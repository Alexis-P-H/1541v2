if (typeof Storage !== "undefined") {
  // Constantes y claves
  const VISIT_COUNT_KEY = "visitCount";
  const PARAMS_KEY = "parametros";

  // Manejo de sessionStorage para el contador de visitas
  let visitCount = parseInt(sessionStorage.getItem(VISIT_COUNT_KEY)) || 0;
  sessionStorage.setItem(VISIT_COUNT_KEY, ++visitCount);
  console.log(`Número de visitas: ${visitCount}`);

  // Obtener el parámetro de la URL
  const parametroCode = new URLSearchParams(window.location.search);
  const dato = parametroCode.get("code")?.trim() || "";

  // Mostrar el parámetro obtenido
  console.log(`Este es el dato: ${dato}`);
  console.log(`Este es el tipo de dato: ${typeof dato}`);

  // Manejo de localStorage para parámetros
  let parametrosGuardados = JSON.parse(localStorage.getItem(PARAMS_KEY)) || [];

  if (dato) {
    if (parametrosGuardados.includes(dato)) {
      console.log("El parámetro ya está guardado.");
    } else {
      parametrosGuardados.push(dato);
      localStorage.setItem(PARAMS_KEY, JSON.stringify(parametrosGuardados));
      console.log(`Se agregó el nuevo parámetro: ${dato}`);
    }
  } else {
    console.log("El dato no puede ser una cadena vacía.");
  }

  // Referencias a los elementos HTML
  const qrElements = [
    document.getElementById("codigo1"),
    document.getElementById("codigo2"),
    document.getElementById("codigo3"),
    document.getElementById("codigo4"),
    document.getElementById("codigo5"),
  ];

  // Procesar los parámetros guardados
  setTimeout(() => {
    if (parametrosGuardados.length) {
      parametrosGuardados.forEach((parametro) => {
        switch (parametro) {
          case "randomizeCode1":
            actualizarQr(qrElements[0]);
            break;
          case "randomizeCode2":
            actualizarQr(qrElements[1]);
            break;
          case "randomizeCode3":
            actualizarQr(qrElements[2]);
            break;
          case "randomizeCode4":
            actualizarQr(qrElements[3]);
            break;
          case "randomizeCode5":
            actualizarQr(qrElements[4]);
            break;
          default:
            console.log("No hay parámetros guardados relevantes.");
        }
      });
    } else {
      console.log("No hay parámetros guardados.");
    }
  }, 500);

  // Ocultar parámetros de la URL
  history.replaceState({}, document.title, window.location.pathname);

} else {
  console.log("Lo siento, tu navegador no es compatible con sessionStorage.");
}

// Función para actualizar un elemento QR
function actualizarQr(elemento) {
  if (!elemento) return;

  const texto = elemento.dataset.texto;
  const url = elemento.dataset.url;
  const clase = elemento.dataset.clase;

  if (texto && url) {
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.className = clase;
    enlace.target = "historias";
    enlace.rel = "noopener noreferrer";
    enlace.textContent = texto;

    elemento.textContent = ""; // Limpiar el contenido existente
    elemento.appendChild(enlace);
  }
}

