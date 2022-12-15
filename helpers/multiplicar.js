const fs = require('fs');
const colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
});

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${colors.debug('x')} ${i} ${'='.debug} ${base * i}\n`;
    }
    if (listar) {
      console.log(colors.silly('======================'));
      console.log(colors.debug(`   Tabla del ${base}    `));
      console.log(colors.silly('======================'));
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };

// import * as fs from 'node:fs'
// import { writeFile } from 'node:fs'; // Para usar esta sintaxis se debe configurar el uso de modulos en el package.json

/*
 * Usando el writeFile (Asincrono)
 */
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//   if (err) throw err;
//   console.log('Archivo creado');
// });

/*
 * Usando el writeFileSync (Sincrono)
 ? Suele ser mas limpio pero necesita un try/catch para atajar errores
 */
// fs.writeFileSync(`tabla-${base}.txt`, salida);
// console.log('Archivo creado');

/*
 * Usando el writeFile (Asincrono) con el import
 */
// writeFile('tabla-6.txt', salida, (err) => {
//   if (err) throw err;
//   console.log('Archivo creado');
// });
