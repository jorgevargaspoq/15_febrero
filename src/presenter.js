import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_select = document.querySelector("#genero");
const idioma_select = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = parseInt(edad_input.value);
  const genero = genero_select.value;
  const idioma = idioma_select.value;

  div.innerHTML = "<p>" + saludar(nombre, edad, genero, idioma) + "</p>";
});