const firstValueRef = document.querySelector('#inputBuy');

const secondValueRef = document.querySelector('#inputSell');

const valueDifRef = document.querySelector('#lucroVenda')

const percentualDiscontRef = document.querySelector('#percentualVenda');

const btnCalcularRef = document.querySelector('#btnCalcular');

var validValorCompraRef = document.querySelector('#validValorCompra');

var validValorVendaRef = document.querySelector('#validValorVenda')



firstValueRef.addEventListener('keyup', () => {
    if (isNaN(firstValueRef.value.replace(",",".")) || firstValueRef.value.replace(",",".") == 0) {

        validValorCompraRef.style.display = 'block'
        btnCalcularRef.setAttribute('disabled', 'disabled')
    } else {
        validValorCompraRef.style.display = 'none'
        btnCalcularRef.removeAttribute('disabled')
    }
})

secondValueRef.addEventListener('keyup', () => {
    if (isNaN(secondValueRef.value.replace(",",".")) || secondValueRef.value.replace(",",".") == 0) {
        validValorVendaRef.style.display = 'block'
        btnCalcularRef.setAttribute('disabled', 'disabled')
    } else {
        validValorVendaRef.style.display = 'none'
        btnCalcularRef.removeAttribute('disabled')
    }
})





btnCalcularRef.addEventListener('click',  () => {

    if (isNaN(firstValueRef.value.replace(",",".")) || firstValueRef.value.replace(",",".") == 0 || isNaN(secondValueRef.value.replace(",",".")) || secondValueRef.value.replace(",",".") == 0) {
        alert('Você deve digitar um valor válido.') 
        location.reload()           

    }


    var value1 = parseFloat(firstValueRef.value.replace(",",".").replace(/[^0-9\.]/g,''))
    var value2 = parseFloat(secondValueRef.value.replace(",",".").replace(/[^0-9\.]/g,''))    


    var lucro = (value1 - value2)
    var porcentagem = ((value2 / value1)-1) *100

    var resultadoLucro = `
    <p class="resultado">R$ ${lucro.toFixed(2)}</p> 
    
    `
    var resultadoPorcentagem = `
    <p class="resultado">${porcentagem.toFixed(2)}%</p>
    `

    valueDifRef.innerHTML = resultadoLucro

    percentualDiscontRef.innerHTML = resultadoPorcentagem

    firstValueRef.value = ''
    secondValueRef.value = ''


})