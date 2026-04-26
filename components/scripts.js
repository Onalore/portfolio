// --- LIMPIAR BOTÓN ---
let btn = [...document.querySelectorAll("button")].find((b) =>
  b.textContent.includes("Ver horarios disponibles"),
);

const cleanBtn = btn.cloneNode(true);
btn.replaceWith(cleanBtn);
btn = cleanBtn;

// --- NUEVO EVENT LISTENER ---
btn.addEventListener("click", async (e) => {
  e.preventDefault();

  const url =
    "https://turnos-api.argentina.gob.ar/api/v1.0/disponibilidad/horarios/3616?tramiteId=3219&fecha=2026-02-24";

  try {
    const r = await fetch(url);
    const data = await r.json();
    console.log("Respuesta del servidor:", data);
  } catch (err) {
    console.error("Error en la llamada:", err);
  }
});

//first button
(function () {
  const OriginalXHR = window.XMLHttpRequest;

  function CustomXHR() {
    const xhr = new OriginalXHR();

    const originalOpen = xhr.open;

    xhr.open = function (method, url, async, user, password) {
      if (typeof url === "string" && url.includes("fecha=2026-02-24")) {
        console.log("XHR interceptado. URL original:", url);
        url = url.replace("fecha=2026-02-24", "fecha=2026-03-06");
        console.log("Nueva URL XHR:", url);
      }

      return originalOpen.call(this, method, url, async, user, password);
    };

    return xhr;
  }

  window.XMLHttpRequest = CustomXHR;
})();

//second button
(function () {
  const OriginalXHR = window.XMLHttpRequest;

  function CustomXHR() {
    const xhr = new OriginalXHR();

    let interceptedUrl = null;
    let interceptedMethod = null;

    const originalOpen = xhr.open;
    xhr.open = function (method, url, async, user, password) {
      interceptedUrl = url;
      interceptedMethod = method;
      return originalOpen.call(this, method, url, async, user, password);
    };

    const originalSend = xhr.send;
    xhr.send = function (body) {
      try {
        // Interceptamos SOLO el POST a /turnos
        if (
          interceptedMethod === "POST" &&
          interceptedUrl.includes("/api/v1.0/turnos")
        ) {
          console.log("Intercepté POST a /turnos");
          console.log("Body original:", body);

          // Parseamos el body original
          let data = JSON.parse(body);

          // Modificamos la fecha
          data.fecha = "2026-03-06";

          // Convertimos de vuelta a JSON
          const newBody = JSON.stringify(data);

          console.log("Body modificado:", newBody);

          // Enviamos el body modificado
          return originalSend.call(this, newBody);
        }
      } catch (err) {
        console.error("Error interceptando body:", err);
      }

      // Si no es la petición que queremos, enviamos el body original
      return originalSend.call(this, body);
    };

    return xhr;
  }

  window.XMLHttpRequest = CustomXHR;
})();
