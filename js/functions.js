
function alterarQtd(produto, acao){
    const qtd = document.getElementById('qtd_' + produto)
    const valor = document.getElementById('valor_' + produto)
    const total = document.getElementById('total_' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        alert('Atenção! Quantidade negativa nao é permitida!')
    } else{
    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
    const valorTotal = qtd.innerHTML * somenteNumeros(valor.innerHTML)
    total.innerHTML = formatarValor(valorTotal)
    soma()
    }
    
}
//Funçao para o subtotal
function soma(){
    let soma = 0
    for( let i = 1; i < 5; i++){
        soma += Number(somenteNumeros(document.getElementById('total_' + i).innerHTML))

    }

    document.getElementById('subtotal').innerHTML = soma
}

//Expressao regular para tratar o R$
function somenteNumeros(n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return 'R$ ' + n.toLocaleString('pt-br')
}