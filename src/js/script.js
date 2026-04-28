// LIMPEZA  

const email="    email@email.com    ";
//trim- remove os espaços inicio e fim
const emailLimpo= email.trim();
console.log(emailLimpo)

//VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("email válido")
}else{
    console.log("Email inválido")
}

//TRANSFORMAÇÃO DE TEXTO

const tituloArtigo="Como aprender JAVA RAIZ";
//metodo upper(maiusculo) e low(minusculo)
const texto1 = tituloArtigo.toUpperCase();
console.log(texto1)
//split - transforma o texto em array
const texto2 =tituloArtigo.split(" ");
console.log(texto2)
//join- junta tudo em uma unica string
const texto3 = texto2.join(" ");
console.log(texto3)

