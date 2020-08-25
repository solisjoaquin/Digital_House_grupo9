/*

cost path = require('path')

------sin path

__dirname + '/carpeta/carpeta'

------con path

path.join(__dirname, '/carpeta/carpeta')

-------------------------------------------
Se puede unir varias carpetas con join

let archivoUsuarios = path.join('carpeta1', 'carpeta2', 'carpeta3')

--------------------------------------------
Se puede saber la extension de un archivo

let extension = path.extname(archivoUsuarios)

------------------------------------------
Se puede saber el camino para llegar a un archivo con dirname
Este solo quitara el ultimo valor de la ruta que indica el nombre del archivo

let direction = path.dirname(archivoUsuarios)

*/