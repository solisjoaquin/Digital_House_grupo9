let productsController = {
    // estoy mandando los archivos ejs con render
    // puedo llamarlos con o sin ".ejs"
    'index': function(req, res){
        res.render('index')
    },
    'list': function(req,res){

        let productos = [
            'produto 1',
            'producto 2',
            'producto 3'
        ]
        // pasar la variable users me permite usarla en el ejs
        res.render('index', {'productos': productos})
    }
}

module.exports = productsController;