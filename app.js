let saldo = 1000;

let opcao = 0;

function consultarSaldo() {
  return saldo;
}

function depositar(saldo, depositoFeito) {
  return saldo + depositoFeito;
}

function sacar() {}

while (opcao !== 4) {
  opcao = Number(
    prompt(`
Escolha uma opção:

1 - Consultar saldo
2 - Depositar
3 - Sacar
4 - Sair`),
  );

  if (opcao == 1) {
    alert(`Seu saldo disponivel é de R$${consultarSaldo()}`);
  } else if (opcao == 2) {
    let depositoFeito = Number(prompt("Qual o valor deseja depositar?"));
    saldo = depositar(saldo, depositoFeito);
    alert(`Depósito realizado!
      Novo saldo: R$ ${saldo} `);
  }
}
