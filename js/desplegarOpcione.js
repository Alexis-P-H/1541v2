// Seleccionamos el texto desplegable y el contenido oculto
const textoDesplegables = document.querySelectorAll('.texto-desplegable');

textoDesplegables.forEach(texto => {
  texto.addEventListener('click', () => {
    const contenido = texto.nextElementSibling;
    const contenidosDesplegados = document.querySelectorAll('.contenido-oculto.activo')
    console.log(contenidosDesplegados[0])

    if (contenidosDesplegados.length !== 0 && contenidosDesplegados[0]?.id !== contenido?.id){
      contenidosDesplegados[0].classList.value = 'contenido-oculto'
    }

    if (contenido && contenido.classList.contains('contenido-oculto')) {
      contenido.classList.toggle('activo');
    }
  })
});

// Seleccionamos el texto desplegable
const textoDesplegado = document.querySelectorAll('.content-desplegado');
textoDesplegado.forEach(texto => {
  texto.addEventListener('click', () => {
    const contenidosDesplegados = document.querySelectorAll('.contenido-oculto.activo')
    if (contenidosDesplegados.length !== 0){
      contenidosDesplegados[0].classList.value = 'contenido-oculto'
    }
  })
});
