const fs = require('fs');

let getListar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor base: '${ base }' no es numerico.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor limite: '${ limite }' no es numerico.`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }
    })
};


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor base: '${ base }' no es numerico.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor limite: '${ limite }' no es numerico.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i }= ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    getListar
}