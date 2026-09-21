interface Rectangle {
    readonly left: number;
    readonly top: number;
    readonly width: number;
    readonly height: number;
}

interface PointerCoordinates {
    readonly clientX: number;
    readonly clientY: number;
}

export function getProjectSpotlightPosition(
    visualBounds: Rectangle,
    pointer: PointerCoordinates,
) {
    return {
        x: ((pointer.clientX - visualBounds.left) / visualBounds.width) * 100,
        y: ((pointer.clientY - visualBounds.top) / visualBounds.height) * 100,
    };
}
