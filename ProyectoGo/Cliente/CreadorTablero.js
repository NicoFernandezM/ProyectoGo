class CreadorTablero {
    static SMALL = 9;
    static MEDIUM = 13;
    static BIG = 19;

    static createGoBoard(lines) {
        const boardSize = this.getSize(lines); 
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

    

    static createCircle(color, dataX, dataY, cellSize) {
        const svg = document.getElementById("goBoard");

        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("class", "circle");
        circle.setAttribute("cx", dataX * cellSize);
        circle.setAttribute("cy", dataY * cellSize);
        circle.setAttribute("r", 15);
        circle.setAttribute("fill", color);

        svg.appendChild(circle); 
    }
    
    static getSize(numLines) {
        if(numLines == this.SMALL) {
            return 400;
        } else if(numLines == this.MEDIUM) {
            return 450;
        } else {
            return 550;
        }
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
                button.setAttribute("cellSize", cellSize);
                button.style.position = "absolute";
                button.style.left = i * cellSize - 10 + "px"; // Adjust button position
                button.style.top = j * cellSize - 10 + "px";  // Adjust button position
    
                buttonContainer.appendChild(button);
            }
        }
        document.getElementById("goBoardContainer").appendChild(buttonContainer);
    }
}