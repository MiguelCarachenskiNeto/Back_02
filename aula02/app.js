const fs=require("fs");
/*fs.readFile("./dados.csv",(erro,data)=>{
    if (erro){
        console.log(erro);
    }else{
        console.log(data.toString());
    }
})
console.log("segunda operação");*/

/*let dados =fs.readFileSync('../aula02/dados.csv');
console.log (dados.toString());
console.log ("Segunda operação");*/

let dados = "";
if(fs.existsSync('../aula02/dados.csv')){
    dados=fs.readFileSync('../aula02/dados.csv')
    console.log(dados.toString());

}
else{
    console.log("Arquivo não encontrado")
}

console.log("fim")