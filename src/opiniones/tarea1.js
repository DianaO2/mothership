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
  });

 
}
