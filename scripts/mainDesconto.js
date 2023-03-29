const inputBuyRef = document.querySelector('#inputBuy');

const inputSellRef = document.querySelector('#inputSell');

const lucroVendaRef = document.querySelector('#lucroVenda')

const percentualVendaRef = document.querySelector('#percentualVenda');

const btnCalcularRef = document.querySelector('#btnCalcular');

var validValorCompraRef = document.querySelector('#validValorCompra');

var validValorVendaRef = document.querySelector('#validValorVenda')



inputBuyRef.addEventListener('keyup', () => {
    if (isNaN(inputBuyRef.value.replace(",",".")) || inputBuyRef.value.replace(",",".") == 0) {

        validValorCompraRef.style.display = 'block'
        btnCalcularRef.setAttribute('disabled', 'disabled')
    } else {
        validValorCompraRef.style.display = 'none'
        btnCalcularRef.removeAttribute('disabled')
    }
})

inputSellRef.addEventListener('keyup', () => {
    if (isNaN(inputSellRef.value.replace(",",".")) || inputSellRef.value.replace(",",".") == 0) {
        validValorVendaRef.style.display = 'block'
        btnCalcularRef.setAttribute('disabled', 'disabled')
    } else {
        validValorVendaRef.style.display = 'none'
        btnCalcularRef.removeAttribute('disabled')
    }
})





btnCalcularRef.addEventListener('click',  () => {

    if (isNaN(inputBuyRef.value.replace(",",".")) || inputBuyRef.value.replace(",",".") == 0 || isNaN(inputSellRef.value.replace(",",".")) || inputSellRef.value.replace(",",".") == 0) {
        alert('Você deve digitar um valor válido.') 
        location.reload()           

    }


    var buyValor = parseFloat(inputBuyRef.value.replace(",",".").replace(/[^0-9\.]/g,''))
    var sellValor = parseFloat(inputSellRef.value.replace(",",".").replace(/[^0-9\.]/g,''))    


    var lucro = (sellValor - buyValor)
    var porcentagem = ((sellValor / buyValor)-1) *100

    var resultadoLucro = `
    <p>R$ ${lucro.toFixed(2)}</p>
    
    `
    var resultadoPorcentagem = `
    <p>${porcentagem.toFixed(2)}%</p>
    `

    lucroVendaRef.innerHTML = resultadoLucro

    percentualVendaRef.innerHTML = resultadoPorcentagem

    inputBuyRef.value = ''
    inputSellRef.value = ''


})