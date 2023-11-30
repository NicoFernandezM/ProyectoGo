class Juego {
    constructor() {
        /*this.tablero = new Tablero();*/
        this.usuario1 = new Usuario("white");
        this.usuario2 = new Usuario("black");
        this.usuarioActual = this.usuario1;
        this.botonPresionado = this.botonPresionado.bind(this);
    }

    cambiarTurno() {
        this.usuarioActual = this.usuarioActual === this.usuario1 ? this.usuario2 : this.usuario1;
    }

    iniciarJuego() {
        const buttonsContainer = document.getElementById("buttonContainer");

        // Check if buttonsContainer is present before adding event listeners
        if (buttonsContainer) {
            buttonsContainer.addEventListener("click", this.botonPresionado);
        }
    }

    botonPresionado(event) {
        const boton = event.target;
        this.marcarBoton(boton);
        this.cambiarTurno();
    }

    marcarBoton(boton) {
        var dataX = boton.getAttribute("data-x");
        var dataY = boton.getAttribute("data-y");
        var cellSize = boton.getAttribute("cellSize");
        var color = this.usuarioActual.getColor();
        CreadorTablero.createCircle(color, dataX, dataY, cellSize);
        boton.disabled = true;
    }
}