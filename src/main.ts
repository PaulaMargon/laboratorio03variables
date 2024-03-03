import "./style.css";

console.log("Hello Typescript!");

/*
Grupos musicales
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
*/

// SE CREA LA INTERFAZ
interface Grupos {
  nombre: string;
  anioFundacion: number;
  activo: boolean;
  generoMusical: string;
}

// CONSTANTES PARA LOS ESTILOS MUSICALES
const popRock: string = "🎵 Pop Rock";
const rock: string = "🎸 Rock";
const hardRock: string = "🤘 Hard Rock";
const clasica: string = "🎼 Clásica";

//GRUPOS

const grupo1: Grupos = {
  nombre: "The Beatles",
  anioFundacion: 1960,
  activo: true,
  generoMusical: popRock,
};

const grupo2: Grupos = {
  nombre: "Queen",
  anioFundacion: 1970,
  activo: false,
  generoMusical: rock,
};

const grupo3: Grupos = {
  nombre: "AC DC",
  anioFundacion: 1973,
  activo: true,
  generoMusical: hardRock,
};

const grupo4: Grupos = {
  nombre: "Ludwig van Beethoven",
  anioFundacion: 1770,
  activo: false,
  generoMusical: clasica,
};

const grupo5: Grupos = {
  nombre: "The Rolling Stones",
  anioFundacion: 1962,
  activo: true,
  generoMusical: rock,
};

// CREAR CODIGO CSS PARA EVITAR REPETIRLO
const nombreGrupoEstilo: string = `
  font-weight: bold;
  font-size: 16px;
  background-color: green;
  padding: 5px;
  color: white;
`;

console.log(`%c${grupo1.nombre}`, nombreGrupoEstilo);
console.log(`Año de fundación: ${grupo1.anioFundacion}`);
console.log(`Activo: ${grupo1.activo}`);
console.log(`Género Musical: ${grupo1.generoMusical}\n`);

console.log("------------------------------------------");

console.log(`%c${grupo2.nombre}`, nombreGrupoEstilo);
console.log(`Año de fundación: ${grupo2.anioFundacion}`);
console.log(`Activo: ${grupo2.activo}`);
console.log(`Género Musical: ${grupo2.generoMusical}\n`);

console.log("------------------------------------------");

console.log(`%c${grupo3.nombre}`, nombreGrupoEstilo);
console.log(`Año de fundación: ${grupo3.anioFundacion}`);
console.log(`Activo: ${grupo3.activo}`);
console.log(`Género Musical: ${grupo3.generoMusical}\n`);

console.log("------------------------------------------");

console.log(`%c${grupo4.nombre}`, nombreGrupoEstilo);
console.log(`Año de fundación: ${grupo4.anioFundacion}`);
console.log(`Activo: ${grupo4.activo}`);
console.log(`Género Musical: ${grupo4.generoMusical}\n`);

console.log("------------------------------------------");

console.log(`%c${grupo5.nombre}`, nombreGrupoEstilo);
console.log(`Año de fundación: ${grupo5.anioFundacion}`);
console.log(`Activo: ${grupo5.activo}`);
console.log(`Género Musical: ${grupo5.generoMusical}\n`);

console.log("------------------------------------------");
