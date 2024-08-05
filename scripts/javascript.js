let dolar = 5.73 //faça requisição para deixar automático ele pegar esse valor do dólar.

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl") //Está chamando a conversão pela função convert com o parâmetro 'usd-to-brl" (ou seja, de dólar para real)
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd") //Está chamando a conversão pela função convert com o parâmetro 'brl-to-usd" (ou seja, de real para dólar)
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value) //aqui sempre quando eu clicar fora do input, ou seja, tirar do focus ou "blur". Ele vai pegar o valor que está digitado ou aparecendo ali no input do dólar e vai acrescentar os 2 dígitos da casa decimal depois da vírgula. Vai "formatar" conforme a função formatCurrency
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value) //aqui sempre quando eu clicar fora do input, ou seja, tirar do focus ou "blur". Ele vai pegar o valor que está digitado ou aparecendo ali no input do real e vai acrescentar os 2 dígitos da casa decimal depois da vírgula. Vai "formatar" conforme a função formatCurrency
})

usdInput.value = "100,00"//só coloquei pra aparecer mesmo, inventado.
convert("usd-to-brl")



function formatCurrency(value){//função criada para formatar a moeda, ou seja, colocar a ',' e não o '.'
    //ajustar o valor
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false, //não vai colocar ponto ou vírgula entre os números para separa-los, exemplo, ao invés de 1.000,00 vai ficar 1000
        minimumFractionDigits: 2 //o mínimo de números que devem estar depois do número é ,00 ou seja, 2 dígitos.
    }
    //utilizar função de formatar
    let formatter = new Intl.NumberFormat("pt-BR", options)
    //retorna o valor formatado
    return formatter.format(fixedValue) //retorna o número depois de formatado
}

function fixValue(value){ //Aqui estamos fazendo a verificação se é um número mesmo que está sendo digitado
    fixedValue = value.replace(",", ".") //a variável fixedValue vai receber o valor digitado no Input, mas estará trocado a ',' pelo '.'. Isso foi mais fácil porque já existe a função replace que troca algo por outro algo.
    let floatValue = parseFloat(fixedValue) //Aqui vai pegar a string e transformar para número. Então vai precisar digitar um número se não não da certo. estamos fazendo uma verificação de segurança
    if(floatValue == NaN){ //Esse NaN é Not a Number. Então se a pessoa digitar algo que não seja um número, vai dar o NaN. Se der o NaN, então o valor será colocado como 0.
        floatValue = 0
    }
    return floatValue //retorna o valor.
}

function convert(type) {
    if(type == "usd-to-brl"){
        //ajustar o valor ',' ou '.'
        let fixedValue = fixValue(usdInput.value) //Aqui criei a variável fixed Value, ela vai receber o valor que for digitado no input do dólar, esse valor digitado já vai ser pego corrigido pela função fixValue.
        //converter o valor
        let result = fixedValue * dolar //vai multiplicar a variável criada pelo valor do dólar.
        result = result.toFixed(2) //vai reduzir as casas decimais para apenas 2, vai fixar apenas 2 casas decimais arredondando-as.
        //mostra no campo de real
        brlInput.value = formatCurrency(result) //aqui peço para que no campo do real ele pegue o valor presente na variável result e seja formatado colocando o campo do real.
    }
    
    if(type == "brl-to-usd"){ //não coloquei else aqui porque se no futuro eu quiser colocar outras moedas eu posso só acrescentar mais um if aqui. Se eu colocasse else não daria pra colocar brl-to-usd, seria somente o que sobrou. Mas quando for adicionar, lembre-se do switch.
        //ajustar o valor ',' ou '.'
        let fixedValue = fixValue(brlInput.value)
        //converter o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        //mostra no campo de dólar
        usdInput.value = formatCurrency(result)
    }
}