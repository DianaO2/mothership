export function mostrarOpinion(app){
 

  // Crear el botón
  const boton = document.createElement("button");
  boton.textContent = "Mostrar Opinión";
  boton.classList.add("opiniones");

  // Agregar el botón al elemento "app"
  app.appendChild(boton);

  // Agregar evento de clic al botón
  boton.addEventListener("click", () => {
      // Crear la tarjeta
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("containerTarjeta");
      tarjeta.textContent = "aqui se muestra la opinion";

      // Agregar la tarjeta al elemento "app"
      app.appendChild(tarjeta);

// Crear botón de responder
const botonResponder = document.createElement("button");
botonResponder.textContent = "Responder";
botonResponder.classList.add("botonVioleta");

// Crear botón de cancelar
const botonCancelar = document.createElement("button");
botonCancelar.textContent = "Cancelar";
botonCancelar.classList.add("botonBlanco");


// Agregar casilla de respuestas y botones debajo de la tarjeta
app.appendChild(casillaRespuesta);
app.appendChild(botonResponder);
app.appendChild(botonCancelar);
  });

}
