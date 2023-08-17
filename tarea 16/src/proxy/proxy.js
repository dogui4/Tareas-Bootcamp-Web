const LEVENSHTEIN_DISTANCE = 1;

const actions = {
  "ir a nosotros": () => {
    window.location.href = "../budle/nosotros.html";
  },

  "ir a cursos": () => {
    window.location.href = "../budle/cursos.html";
  },

  "ir a contacto": () => {
    window.location.href = "../budle/contacto.html";
  },

  "cambiar color a rosa": () => {
    const body = document.getElementById("body");
    body.style.backgroundColor = "pink";
  },

  "eliminar subtítulo": () => {
    const subtitle = document.getElementById("subtitulo");
    subtitle.textContent = "";
  }
};

const actionHandler = {
  set(obj, prop, value) {
    const stringValue = value.toLowerCase();
    const keys = Object.keys(obj);

    if (keys.includes(stringValue)) {
      obj[stringValue]();
    }

    let suggestion = keys.find(key => {
      return Levenshtein.get(key, stringValue) <= LEVENSHTEIN_DISTANCE;
    });

    if (suggestion) {
      obj[suggestion]();
    }

    return true;
  }
};

export const actionsProxy = () => {
  return new Proxy(actions, actionHandler);
};
