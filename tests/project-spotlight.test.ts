import assert from "node:assert/strict";
import { getProjectSpotlightPosition } from "../src/scripts/project-spotlight.ts";

const visualBounds = { left: 80, top: 340, width: 680, height: 420 };
const pointerAtVisualCenter = { clientX: 420, clientY: 550 };

const position = getProjectSpotlightPosition(
    visualBounds,
    pointerAtVisualCenter,
);

assert.deepEqual(position, { x: 50, y: 50 });
