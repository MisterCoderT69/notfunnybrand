let frames = [
        "images/tab-images/ezgif-frame-001.png",
        "images/tab-images/ezgif-frame-002.png",
        "images/tab-images/ezgif-frame-003.png",
        "images/tab-images/ezgif-frame-004.png",
        "images/tab-images/ezgif-frame-005.png",
        "images/tab-images/ezgif-frame-006.png",
        "images/tab-images/ezgif-frame-007.png",
        "images/tab-images/ezgif-frame-008.png",
        "images/tab-images/ezgif-frame-009.png",
        "images/tab-images/ezgif-frame-010.png",
        "images/tab-images/ezgif-frame-011.png",
        "images/tab-images/ezgif-frame-012.png",
        "images/tab-images/ezgif-frame-013.png",
        "images/tab-images/ezgif-frame-014.png",
        "images/tab-images/ezgif-frame-015.png",
        "images/tab-images/ezgif-frame-016.png",
        "images/tab-images/ezgif-frame-017.png",
        "images/tab-images/ezgif-frame-018.png",
        "images/tab-images/ezgif-frame-019.png",
        "images/tab-images/ezgif-frame-020.png",
        "images/tab-images/ezgif-frame-021.png",
        "images/tab-images/ezgif-frame-022.png",
        "images/tab-images/ezgif-frame-023.png",
        "images/tab-images/ezgif-frame-024.png",
        "images/tab-images/ezgif-frame-025.png",
        "images/tab-images/ezgif-frame-026.png",
        "images/tab-images/ezgif-frame-027.png",
        "images/tab-images/ezgif-frame-028.png",
        "images/tab-images/ezgif-frame-029.png",
        "images/tab-images/ezgif-frame-030.png",
        "images/tab-images/ezgif-frame-031.png",
        "images/tab-images/ezgif-frame-032.png",
        "images/tab-images/ezgif-frame-033.png",
        "images/tab-images/ezgif-frame-034.png",
        "images/tab-images/ezgif-frame-035.png",
        "images/tab-images/ezgif-frame-036.png",
        "images/tab-images/ezgif-frame-037.png",
        "images/tab-images/ezgif-frame-038.png",
        "images/tab-images/ezgif-frame-039.png",
        "images/tab-images/ezgif-frame-040.png"
        ];
let index = 0;

setInterval(() => {
    document.getElementById("dynamic-favicon").href = frames[index];
    index = (index + 1) % frames.length;
}, 200); // Adjust speed (200ms = 0.2s per frame)
