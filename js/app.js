function comprar() {
    
    //declaração das variaveis
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let QuantidadeIngresso = document.getElementById('qtd').value;    
    let saldoIngressos;
    let saldo;

    //puxar o saldo de ingressos disponiveis para venda
    saldoIngressos = document.getElementById(`qtd-${tipoIngresso.value}`);
    
    //Validar se o saldo disponivel é o suficiente para cobrir a demanda
    saldo = parseInt(saldoIngressos.innerHTML) - QuantidadeIngresso

    //Realizar ação de compra ou informar saldo indisponivel para compra
    if (saldo < 0) {
        alert(`Saldo insuficiente para compra de ingresso ${tipoIngresso.value}. Saldo disponivel: ${saldoIngressos.innerHTML}`);
    } else {
        saldoIngressos.innerHTML = saldo;        
    }
}
