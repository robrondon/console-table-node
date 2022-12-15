const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Base de la tabla al multiplicar',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla por consola',
    },
    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Hasta donde multiplica la tabla',
    },
  })
  .check((argv, options) => {
    console.log('argvs', argv);
    if (isNaN(argv.b)) throw 'La base tiene que ser un numero';
    if (isNaN(argv.h)) throw 'El hasta tiene que ser un numero';
    return true;
  }).argv;

module.exports = argv;
