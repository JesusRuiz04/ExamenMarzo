const argv = require('yargs')
   .usage('Uso: $0 <comando><entidad>[opciones]')
   //.demandCommand(2)
   .command('read', 'Lectura de contactos')
   .option('id', {
      type:'number',
      demandOption:false,
      describe: 'Id del personaje'
   })
   .check ((argv, options) => {
      if(argv.id != null && isNaN(argv.id)){
         throw 'El valor del id tiene que ser un número';
      }
      return true;
   })
.argv
module.exports = argv;