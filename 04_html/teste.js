const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host : 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado com sucesso')

}).cath(function(erro){
    console.log('erro pae:' + erro)

})
