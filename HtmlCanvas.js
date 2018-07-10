(function() {

    let isDrawing;
    let lastX;
    let lastY;

    window.onload = function() {
        const canvas = document.querySelector("#paint");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const context = canvas.getContext('2d');
        context.strokeStyle = "#BADA55";
        context.lineJoin = "round";
        context.lineCap = "round";

        isDrawing = false;
        lastX = 0;
        lastY = 0;

        canvas.addEventListener("mousemove", draw);
    }

    function draw(e) {
        console.log(e);
    }
})();