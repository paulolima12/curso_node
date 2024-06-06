const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host : 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log('conectado com sucesso')

// }).cath(function(erro){
//     console.log('erro pae:' + erro)

// })

const Postagem = sequelize.define('Postagens'),{
    titulo:{
        type: Sequelize.STRING
    },

    contudo :{


    }

}
.postagem.sync(force = true)
Usario











Postagem.create({
    titulo:'primeira postagem',
    conteudo :'Conteudo da primeira postagem, babababab'
})
