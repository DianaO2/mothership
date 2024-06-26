export function mostrar (puntuacion){

    if (puntuacion >= 3){
        
        const divPlantilla = document.createElement('div');
        divPlantilla.classList.add('containerPlantilla');
      
        const listaOrdenada = document.createElement('ol');
        respuestas.positivas.forEach(respuesta =>{
            const listaDeRespuestas = document.createElement('li');
            listaDeRespuestas.classList.add('containerLi');
            listaDeRespuestas.textContent = respuesta;
            const imgcerrar = document.createElement('img');
            imgcerrar.classList.add('cerrar');
            imgcerrar.src = "https://raw.githubusercontent.com/DianaO2/mothership/9fd7f29f25a986f9ae47d797acde21ab00e8344c/src/img/tag%20button.svg";
            listaDeRespuestas.appendChild(imgcerrar);
            listaOrdenada.appendChild(listaDeRespuestas)
     });
       
        divPlantilla.appendChild(listaOrdenada);
        document.getElementById('app').appendChild(divPlantilla);
  
    }else {
        const divPlantilla = document.createElement('div');
        divPlantilla.classList.add('containerPlantilla');
      
        const listaOrdenada = document.createElement('ul');
        respuestas.negativas.forEach(respuesta =>{
            const listaDeRespuestas = document.createElement('li');
            listaDeRespuestas.classList.add('containerLi');
            listaDeRespuestas.textContent = respuesta;
            const imgcerrar = document.createElement('img');
            imgcerrar.classList.add('cerrar');
            imgcerrar.src = "src/img/tag button.svg";
            listaDeRespuestas.appendChild(imgcerrar);
            listaOrdenada.appendChild(listaDeRespuestas)
     });
       
        divPlantilla.appendChild(listaOrdenada);
        document.getElementById('app').appendChild(divPlantilla);
    }
  }

  
  const respuestas = {
    
    positivas :["Gracias por valorarnos, siempre sera un placer atenderlos.",
                "Sus comentarios nos motivan a trabajar con esmero, fue un gusto recibirlos.",
                 "Agradecemos tu compra, tu opinion es importante.", "Gracias por dejar tu comentario.",
                ],
  
    negativas : ["Lamentamos que tu experiencia no haya sido la mejor. Nos disculpamos sinceramente por cualquier inconveniente que hayas experimentado.",
                 "Esperamos tener la oportunidad de recibirte nuevamente y brindarte una experiencia excepcional.",
                 "No dudes en contactarnos directamente.", "Gracias por su reseña y lamentamos mucho su experiencia con nosotros.",
                ]
    
  }
  
  