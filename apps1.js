const { crearArchivo, getListar } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
//console.log('base:', argv.base);
//console.log('limite:', argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        getListar(argv.base, argv.limite)
            .then(listar => console.log('Listar tabla ', argv.base))
            .catch(e => console.log('Error: ', e));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}

/*
let base = 10;

*/
//console.log(multiplicar);