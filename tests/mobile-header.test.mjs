import assert from "node:assert/strict";

const target = await fetch(
    "http://127.0.0.1:9222/json/new?http://localhost:4321/portfolio/pt-br/",
    { method: "PUT" },
).then((response) => response.json());

const socket = new WebSocket(target.webSocketDebuggerUrl);
const responses = new Map();
let nextMessageId = 1;
let resolvePageLoad;
const pageLoaded = new Promise((resolve) => {
    resolvePageLoad = resolve;
});

socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    const resolve = responses.get(message.id);
    if (resolve) {
        responses.delete(message.id);
        resolve(message);
    }

    if (message.method === "Page.loadEventFired") {
        resolvePageLoad();
    }
});

await new Promise((resolve) =>
    socket.addEventListener("open", resolve, { once: true }),
);

function send(method, params = {}) {
    const id = nextMessageId++;
    socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve) => responses.set(id, resolve));
}

await send("Emulation.setDeviceMetricsOverride", {
    width: 320,
    height: 800,
    deviceScaleFactor: 1,
    mobile: false,
});
await send("Page.enable");
await send("Page.navigate", { url: "http://localhost:4321/portfolio/pt-br/" });
await pageLoaded;

const evaluation = await send("Runtime.evaluate", {
    expression: `(() => {
        const header = document.querySelector("header");
        const navigation = document.querySelector("header nav");
        const navigationList = document.querySelector("header nav ul");
        return {
            viewport: window.innerWidth,
            headerRight: header.getBoundingClientRect().right,
            navigationRight: navigation.getBoundingClientRect().right,
            navigationListRight: navigationList.getBoundingClientRect().right,
            navigationListWidth: navigationList.clientWidth,
            navigationListScrollWidth: navigationList.scrollWidth,
            documentWidth: document.documentElement.scrollWidth
        };
    })()`,
    returnByValue: true,
});

socket.close();

assert.ok(evaluation.result?.result?.value, JSON.stringify(evaluation));
const dimensions = evaluation.result.result.value;
assert.ok(
    dimensions.headerRight <= dimensions.viewport,
    JSON.stringify(dimensions),
);
assert.ok(
    dimensions.navigationRight <= dimensions.viewport,
    JSON.stringify(dimensions),
);
assert.ok(
    dimensions.navigationListRight <= dimensions.viewport,
    JSON.stringify(dimensions),
);
assert.ok(
    dimensions.navigationListScrollWidth <= dimensions.navigationListWidth,
    JSON.stringify(dimensions),
);
assert.equal(
    dimensions.documentWidth,
    dimensions.viewport,
    JSON.stringify(dimensions),
);
