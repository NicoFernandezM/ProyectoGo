class CreadorTablero {
    static createGoBoard(lines) {
        const boardSize = 400; 
        const cellSize = boardSize / (lines - 1);

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "goBoard");
        svg.setAttribute("width", boardSize);
        svg.setAttribute("height", boardSize);
        svg.setAttribute("lines", lines);
        svg.setAttribute("cellSize", cellSize);

        for (let i = 0; i < lines; i++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("class", "line");
            line.setAttribute("x1", i * cellSize);
            line.setAttribute("y1", 0);
            line.setAttribute("x2", i * cellSize);
            line.setAttribute("y2", boardSize);
            svg.appendChild(line);

            const lineHorizontal = document.createElementNS("http://www.w3.org/2000/svg", "line");
            lineHorizontal.setAttribute("class", "line");
            lineHorizontal.setAttribute("x1", 0);
            lineHorizontal.setAttribute("y1", i * cellSize);
            lineHorizontal.setAttribute("x2", boardSize);
            lineHorizontal.setAttribute("y2", i * cellSize);
            svg.appendChild(lineHorizontal);
        }
        document.getElementById("goBoardContainer").innerHTML="";
        document.getElementById("goBoardContainer").appendChild(svg);
    }

    static createCircle(color) {
        var svg = document.getElementById("goBoard");
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx",20);
        circle.setAttribute("cy",20);
        circle.setAttribute("r",20);
        circle.setAttribute("fill", color);
        svg.appendChild(circle);
    }

    static addButtons() {
        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("id", "buttonContainer");
        var svg = document.getElementById("goBoard");
        var numLines = svg.getAttribute("lines");
        var cellSize = svg.getAttribute("cellSize");

        for (let i = 0; i < numLines; i++) {
            for (let j = 0; j < numLines; j++) {
                const button = document.createElement("button");
                button.setAttribute("class", "intersection-button");
                button.setAttribute("data-x", i);
                button.setAttribute("data-y", j);
                button.style.position = "absolute";
                button.style.left = i * cellSize - 10 + "px"; // Adjust button position
                button.style.top = j * cellSize - 10 + "px";  // Adjust button position
    
                button.addEventListener("click", function() {
                    const x = this.getAttribute("data-x");
                    const y = this.getAttribute("data-y");
                    console.log(`Button clicked at intersection (${x}, ${y})`);
                });
    
                buttonContainer.appendChild(button);
            }
        }
        document.getElementById("goBoardContainer").appendChild(buttonContainer);
        console.log("Botones");
    }
}