const fs=require("fs");
let log = "mensagem de log\n";

fs.writeFileSync("./logs.log", log, {flag:"a+"});

fs.writeFile("./logs2.log", log, {flag:"a+"}, (erro)=>{
    if(erro){
        console.log(erro)
    }
})

console.log("criado arquivo com sucesso");
fs.rmSync("./logs2.log");
console.log("Removido arquivo com rmSync");
fs.unlinkSync("./logs.log");
console.log("Removido arquivo usando unlinkSync");