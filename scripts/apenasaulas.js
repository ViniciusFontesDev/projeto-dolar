        //Tipos de variáveis
    /*
let idade = 90 //número
let nome = "Vinícius" //string
let logado = true //boolean
//console.log(10 + nome)
    */


        //Array e objetos
    /*
let ingredientes = ["farinha", "água", "sal", "corante"]
//console.log(ingredientes[2])

let personagem = {
    nome: "fulano",
    nivel: 10,
    forca: 800,
    magia: 200,
    vida: 1000,
    mana: 200
}
    */

//console.log(personagem.magia)

        //FUNÇÕES
    /*
function somar(a, b) {
    let resultado = a + b
    return resultado
}

let x = somar(15, 5)
let y = somar(20, 20)

//console.log(x + y)
    */
        //Arrow Function
    /*
let somar2 = (a, b) => {
    let resultado = a + b    
    return resultado
}

let y = somar2(20, 20)
console.log(y)
    */


        //CONDIÇÕES
    //for
    /*
let idade = 90
let nome = "Vinícius"
let ligado = true


let lista = [10, 20, 30, 40]

for(let item of lista){
    console.log(item)
}
    */


        //OUTRA FORMA DE CHAMAR EVENTOS
    /*
function avisar(){
    alert("opa!")
}

let botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    avisar()
})
    /*



                             //COLAR NO OUTRO DOCUMENTO JS SE QUISER ENTENDER MELHOR. MAS SAIBA QUE ESTAVA NELE.

    //primeiro vou criar uma variável para o id usd ou, para deixar mais claro, vou pegar o que o usuário digitar dentro do input que tem o id#usd
let usdInput = document.querySelector("#usd")
//depois vou criar uma variável para o id brl ou, para deixar mais claro, vou pegar o que o usuário digitar dentro do input que tem o id#brl
let brlInput = document.querySelector("#brl")

//Vou pegar o valor que será digitado no input USD no HTML. O que for digitado lá ele vai pegar, porque eu coloquei console.log(usdInput.value) chamando a variante e o valor que será digitado nela
usdInput.addEventListener("keyup", () => {
    console.log(usdInput.value)
})

//Vou pegar o valor que será digitado no input BRL no HTML. O que for digitado lá ele vai pegar, porque eu coloquei console.log(brlInput.value) chamando a variante e o valor que será digitado nela
brlInput.addEventListener("keyup", () => {
    console.log(brlInput.value)
})

                       /*
//Agora vou criar eventos que vão ser disparados quando a pessoa digitar uma tecla no input usd, agora chamado pela variante usdInput. esse "keyup" quer dizer justamente isso, quando a pessoa digitar algo. No caso no input. Dessa forma vai aparecer (AO OLHAR O INSPECIONAR) a frase "apertou no campo USD"
usdInput.addEventListener("keyup", () => {
    console.log("apertou no campo USD")
})

//Agora vou criar eventos que vão ser disparados quando a pessoa digitar uma tecla no input brl, agora chamado pela variante brlInput. esse "keyup" quer dizer justamente isso, quando a pessoa digitar algo. No caso no input. Dessa forma vai aparecer (AO OLHAR O INSPECIONAR) a frase "apertou no campo BRL"
brlInput.addEventListener("keyup", () => {
    console.log("apertou no campo BRL")
})
                    */