let dolar, real, euro, botao, moeda, inputreal
botao = document.getElementById("botao")
let select = document.getElementById("select")

//função que converte as moedas
async function clique() {

    let moedass = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })
    dolar = moedass.USDBRL.high
    euro = moedass.EURBRL.high

    real = Number(document.getElementById("input").value)

    inputreal = document.getElementById("inputreal")
    moeda = document.getElementById("input-moeda")

    if (select.value === "US$ Dólar Americano") {
        let valDol = real / dolar
        moeda.innerHTML = valDol.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let valeur = real / euro
        moeda.innerHTML = valeur.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }
    inputreal.innerHTML = real.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

}
//função que troca a moeda
function selecao() {
    let texto = document.getElementById("print")
    let bandeira = document.getElementById("bandeira")
    if (select.value === "US$ Dólar Americano") {
        texto.innerHTML = "Dólar Americano"
        bandeira.src = "./img/estados-unidos (1) 1.png"
    }
    if (select.value === "€ Euro") {

        texto.innerHTML = "Euro"
        bandeira.src = "./img/Euro.png"
    }
    clique()
}

botao.addEventListener("click", clique)
select.addEventListener("change", selecao)













