function saludar(nombre, edad, genero, idioma) {
  let saludo;

  if (idioma === "es") {
    saludo = obtenerSaludoSegunHora(idioma) + " Hola " + nombre;
    
    if (edad > 30) {
      if (genero === "masculino") {
        saludo = obtenerSaludoSegunHora("es") + " Hola Sr. " + nombre;
      } else {
        saludo = obtenerSaludoSegunHora("es") + " Hola Sra. " + nombre;
      }
    }
  } else if (idioma === "en") {
    saludo = obtenerSaludoSegunHora(idioma) + " Hello " + nombre;

    if (edad > 30) {
      if (genero === "masculino") {
        saludo = obtenerSaludoSegunHora("en") + " Hello Mr. " + nombre;
      } else {
        saludo = obtenerSaludoSegunHora("en") + " Hello Mrs. " + nombre;
      }
    }
  }

  return saludo;
}

function obtenerSaludoSegunHora(idioma) {
  const horaActual = new Date().getHours();

  if (idioma === "es") {
    if (horaActual >= 5 && horaActual < 12) {
      return "Buenos días, ";
    } else if (horaActual >= 12 && horaActual < 18) {
      return "Buenas tardes, ";
    } else {
      return "Buenas noches, ";
    }
  } else if (idioma === "en") {
    if (horaActual >= 5 && horaActual < 12) {
      return "Good morning, ";
    } else if (horaActual >= 12 && horaActual < 18) {
      return "Good afternoon, ";
    } else {
      return "Good evening, ";
    }
  }
}

export default saludar;