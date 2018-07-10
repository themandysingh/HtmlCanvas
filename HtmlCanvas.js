(function() {

    let isDrawing;
    let lastX;
    let lastY;
    let hue = 0;
    let direction;

    window.onload = function() {
        const canvas = document.querySelector("#paint");
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        context.strokeStyle = "#BADA55";    // color
        context.lineJoin = "round";     // lineJoin shape
        context.lineCap = "round";      // end of line shape

        isDrawing = false;
        lastX = 0;
        lastY = 0;
        direction = true;

        canvas.addEventListener("mousemove", function(e) {
            draw(e, context);
        });
        canvas.addEventListener("mousedown", (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });
        canvas.addEventListener("mouseup", () => isDrawing = false);
        canvas.addEventListener("mouseout", () => isDrawing = false);
    }

    function draw(e, context) {
        if (!isDrawing) {
            return;
        }
        context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if (hue >=360) {
            hue = 0;
        }

        if (context.lineWidth >= 100 || context.lineWidth <= 1) {
            direction = !direction;
        }
        if (direction) {
            context.lineWidth++;
        } else {
            context.lineWidth--;
        }
    }
})();