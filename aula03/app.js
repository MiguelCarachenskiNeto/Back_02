const fs = require('fs');
//fs.mkdirSync('logs');

fs.mkdir('./logs2',(erro)=>{
    if(erro){
        console.log("Erro!!")
    }
})

if(fs.existsSync('./logs2')){
    fs.rmdirSync('./logs2');
}

console.log('fim da execução')