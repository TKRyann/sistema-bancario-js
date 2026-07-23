/*
  K2 Banco Digital — versão 4.1.0

  Sistema bancário utilizando:
  - Objetos
  - Arrays
  - Métodos de Arrays
  - Manipulação do DOM
  - Eventos de formulário
*/

/* ==========================================================
   DADOS DO CLIENTE
   ========================================================== */

const cliente = {
  nome: "Kherlysson Ryann",
  idade: 25,

  conta: {
    agencia: "0001",
    numero: "12345-6",
    tipo: "Conta corrente",
    saldo: 100,
    transacoes: [],
  },
};

let proximoId = 1;

/* ==========================================================
   FUNÇÕES DO SISTEMA
   ========================================================== */

// Formata um número como moeda brasileira
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Retorna o saldo atual
function consultarSaldo() {
  return cliente.conta.saldo;
}

// Soma o depósito ao saldo
function depositar(saldoAtual, depositoFeito) {
  return saldoAtual + depositoFeito;
}

// Subtrai o saque do saldo
function sacar(saldoAtual, saqueFeito) {
  return saldoAtual - saqueFeito;
}

// Soma os valores das transações recebidas
function calcularTotalTransacoes(listaTransacoes) {
  return listaTransacoes.reduce(function (total, transacao) {
    return total + transacao.valor;
  }, 0);
}

/* ==========================================================
   ELEMENTOS DO CLIENTE
   ========================================================== */

const nomeClienteCabecalho = document.getElementById("nome-cliente-cabecalho");

const nomeClienteMenu = document.getElementById("nome-cliente-menu");

const nomeClientePerfil = document.getElementById("nome-cliente-perfil");

const tipoContaPerfil = document.getElementById("tipo-conta-perfil");

/* Mostrar dados do cliente */

nomeClienteCabecalho.textContent = cliente.nome;
nomeClienteMenu.textContent = cliente.nome;
nomeClientePerfil.textContent = cliente.nome;
tipoContaPerfil.textContent = cliente.conta.tipo;

/* ==========================================================
   ELEMENTOS DA CONTA
   ========================================================== */

const contaAgencia = document.getElementById("conta-agencia");

const contaNumero = document.getElementById("conta-numero");

const contaTipo = document.getElementById("conta-tipo");

/* Mostrar dados da conta */

contaAgencia.textContent = cliente.conta.agencia;
contaNumero.textContent = cliente.conta.numero;
contaTipo.textContent = cliente.conta.tipo;

/* ==========================================================
   ELEMENTOS DO SALDO
   ========================================================== */

const saldoValor = document.getElementById("saldo-valor");

const botaoMostrarSaldo = document.getElementById("botao-mostrar-saldo");

let saldoVisivel = true;

/* Mostrar saldo inicial */

saldoValor.textContent = formatarMoeda(consultarSaldo());

/* Mostrar e esconder o saldo */

botaoMostrarSaldo.addEventListener("click", function () {
  if (saldoVisivel) {
    saldoValor.textContent = "••••••";
  } else {
    saldoValor.textContent = formatarMoeda(cliente.conta.saldo);
  }

  saldoVisivel = !saldoVisivel;
});

/* ==========================================================
   ELEMENTOS DO RESUMO
   ========================================================== */

const quantidadeOperacoes = document.getElementById("quantidade-operacoes");

const totalDepositadoElemento = document.getElementById("total-depositado");

const totalSacadoElemento = document.getElementById("total-sacado");

/* ==========================================================
   ELEMENTOS DO EXTRATO
   ========================================================== */

const listaTransacoes = document.getElementById("lista-transacoes");

const filtroTransacoes = document.getElementById("filtro-transacoes");

const formBuscaTransacao = document.getElementById("form-busca-transacao");

const buscaTransacaoId = document.getElementById("busca-transacao-id");

const mensagemExtrato = document.getElementById("mensagem-extrato");

/* ==========================================================
   RENDERIZAR AS TRANSAÇÕES
   ========================================================== */

function renderizarTransacoes(lista) {
  // Limpar as linhas atuais
  listaTransacoes.innerHTML = "";

  // Verificar se o Array está vazio
  if (lista.length === 0) {
    const linhaVazia = document.createElement("tr");

    const celulaVazia = document.createElement("td");

    celulaVazia.colSpan = 5;

    celulaVazia.textContent = "Nenhuma transação encontrada.";

    linhaVazia.appendChild(celulaVazia);

    listaTransacoes.appendChild(linhaVazia);

    return;
  }

  // Criar uma linha para cada transação
  lista.forEach(function (transacao) {
    const dataFormatada = transacao.momento.toLocaleDateString("pt-BR");

    const horarioFormatado = transacao.momento.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const novaLinha = document.createElement("tr");

    const celulaId = document.createElement("td");

    const celulaTipo = document.createElement("td");

    const celulaData = document.createElement("td");

    const celulaHorario = document.createElement("td");

    const celulaValor = document.createElement("td");

    celulaId.textContent = transacao.id;

    celulaData.textContent = dataFormatada;

    celulaHorario.textContent = horarioFormatado;

    celulaValor.textContent = formatarMoeda(transacao.valor);

    // Configurar depósito
    if (transacao.tipo === "deposito") {
      celulaTipo.textContent = "Depósito";

      celulaTipo.classList.add("tipo-transacao", "tipo-deposito");

      celulaValor.classList.add("valor-deposito");
    }

    // Configurar saque
    else {
      celulaTipo.textContent = "Saque";

      celulaTipo.classList.add("tipo-transacao", "tipo-saque");

      celulaValor.classList.add("valor-saque");
    }

    novaLinha.appendChild(celulaId);
    novaLinha.appendChild(celulaTipo);
    novaLinha.appendChild(celulaData);
    novaLinha.appendChild(celulaHorario);
    novaLinha.appendChild(celulaValor);

    listaTransacoes.appendChild(novaLinha);
  });
}

/* ==========================================================
   ELEMENTOS DO DEPÓSITO
   ========================================================== */

const formDeposito = document.getElementById("form-deposito");

const valorDepositado = document.getElementById("valor-deposito");

const mensagemDeposito = document.getElementById("mensagem-deposito");

/* ==========================================================
   REALIZAR DEPÓSITO
   ========================================================== */

formDeposito.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const entradaDeposito = valorDepositado.value;

  const depositoFeito = Number(entradaDeposito);

  /* Validar campo vazio */

  if (entradaDeposito.trim() === "") {
    mensagemDeposito.textContent = "Informe um valor para o depósito.";

    return;
  }

  /* Validar valor não numérico */

  if (!Number.isFinite(depositoFeito)) {
    mensagemDeposito.textContent = "Digite um valor válido.";

    return;
  }

  /* Bloquear zero e valores negativos */

  if (depositoFeito <= 0) {
    mensagemDeposito.textContent = "O depósito deve ser maior que zero.";

    return;
  }

  /* Atualizar o saldo */

  cliente.conta.saldo = depositar(cliente.conta.saldo, depositoFeito);

  /* Criar a transação */

  const novaTransacao = {
    id: proximoId,
    tipo: "deposito",
    valor: depositoFeito,
    momento: new Date(),
  };

  /* Registrar a transação */

  cliente.conta.transacoes.push(novaTransacao);

  proximoId++;

  /* Atualizar o saldo na tela */

  if (saldoVisivel) {
    saldoValor.textContent = formatarMoeda(cliente.conta.saldo);
  } else {
    saldoValor.textContent = "••••••";
  }

  /* Atualizar quantidade de operações */

  quantidadeOperacoes.textContent = cliente.conta.transacoes.length;

  /* Filtrar os depósitos */

  const depositos = cliente.conta.transacoes.filter(function (transacao) {
    return transacao.tipo === "deposito";
  });

  /* Calcular total depositado */

  const totalDepositado = calcularTotalTransacoes(depositos);

  /* Atualizar o resumo */

  totalDepositadoElemento.textContent = formatarMoeda(totalDepositado);

  /* Restaurar o extrato completo */

  filtroTransacoes.value = "todos";
  buscaTransacaoId.value = "";
  mensagemExtrato.textContent = "";

  renderizarTransacoes(cliente.conta.transacoes);

  /* Mostrar sucesso */

  mensagemDeposito.textContent = "Depósito realizado com sucesso.";

  /* Limpar o campo */

  valorDepositado.value = "";
});

/* ==========================================================
   ELEMENTOS DO SAQUE
   ========================================================== */

const formSaque = document.getElementById("form-saque");

const valorSaque = document.getElementById("valor-saque");

const mensagemSaque = document.getElementById("mensagem-saque");

/* ==========================================================
   REALIZAR SAQUE
   ========================================================== */

formSaque.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const entradaSaque = valorSaque.value;

  const saqueFeito = Number(entradaSaque);

  /* Validar campo vazio */

  if (entradaSaque.trim() === "") {
    mensagemSaque.textContent = "Informe um valor para o saque.";

    return;
  }

  /* Validar valor não numérico */

  if (!Number.isFinite(saqueFeito)) {
    mensagemSaque.textContent = "Digite um valor válido.";

    return;
  }

  /* Bloquear zero e valores negativos */

  if (saqueFeito <= 0) {
    mensagemSaque.textContent = "O saque deve ser maior que zero.";

    return;
  }

  /* Verificar saldo suficiente */

  if (saqueFeito > cliente.conta.saldo) {
    mensagemSaque.textContent = "Saldo insuficiente para realizar o saque.";

    return;
  }

  /* Atualizar o saldo */

  cliente.conta.saldo = sacar(cliente.conta.saldo, saqueFeito);

  /* Criar a transação */

  const novaTransacao = {
    id: proximoId,
    tipo: "saque",
    valor: saqueFeito,
    momento: new Date(),
  };

  /* Registrar a transação */

  cliente.conta.transacoes.push(novaTransacao);

  proximoId++;

  /* Atualizar saldo na tela */

  if (saldoVisivel) {
    saldoValor.textContent = formatarMoeda(cliente.conta.saldo);
  } else {
    saldoValor.textContent = "••••••";
  }

  /* Atualizar quantidade de operações */

  quantidadeOperacoes.textContent = cliente.conta.transacoes.length;

  /* Filtrar os saques */

  const saques = cliente.conta.transacoes.filter(function (transacao) {
    return transacao.tipo === "saque";
  });

  /* Calcular total sacado */

  const totalSacado = calcularTotalTransacoes(saques);

  /* Atualizar o resumo */

  totalSacadoElemento.textContent = formatarMoeda(totalSacado);

  /* Restaurar o extrato completo */

  filtroTransacoes.value = "todos";
  buscaTransacaoId.value = "";
  mensagemExtrato.textContent = "";

  renderizarTransacoes(cliente.conta.transacoes);

  /* Mostrar sucesso */

  mensagemSaque.textContent = "Saque realizado com sucesso.";

  /* Limpar o campo */

  valorSaque.value = "";
});

/* ==========================================================
   FILTRAR TRANSAÇÕES
   ========================================================== */

filtroTransacoes.addEventListener("change", function () {
  const filtroSelecionado = filtroTransacoes.value;

  /* Limpar a busca anterior */

  buscaTransacaoId.value = "";
  mensagemExtrato.textContent = "";

  /* Mostrar todas as transações */

  if (filtroSelecionado === "todos") {
    renderizarTransacoes(cliente.conta.transacoes);

    return;
  }

  /* Filtrar depósitos ou saques */

  const transacoesFiltradas = cliente.conta.transacoes.filter(
    function (transacao) {
      return transacao.tipo === filtroSelecionado;
    },
  );

  renderizarTransacoes(transacoesFiltradas);
});

/* ==========================================================
   BUSCAR TRANSAÇÃO PELO ID
   ========================================================== */

formBuscaTransacao.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const entradaId = buscaTransacaoId.value;

  const idProcurado = Number(entradaId);

  /* Validar campo vazio */

  if (entradaId.trim() === "") {
    mensagemExtrato.textContent = "Informe o ID da transação.";

    return;
  }

  /* Validar valor não numérico */

  if (!Number.isFinite(idProcurado)) {
    mensagemExtrato.textContent = "Digite um ID válido.";

    return;
  }

  /* Validar número inteiro */

  if (!Number.isInteger(idProcurado)) {
    mensagemExtrato.textContent = "O ID deve ser um número inteiro.";

    return;
  }

  /* Bloquear zero e números negativos */

  if (idProcurado <= 0) {
    mensagemExtrato.textContent = "O ID deve ser maior que zero.";

    return;
  }

  /* Procurar a transação */

  const transacaoEncontrada = cliente.conta.transacoes.find(
    function (transacao) {
      return transacao.id === idProcurado;
    },
  );

  /* Verificar se a transação existe */

  if (transacaoEncontrada === undefined) {
    mensagemExtrato.textContent = "Nenhuma transação encontrada com esse ID.";

    renderizarTransacoes([]);

    return;
  }

  /* Mostrar somente a transação encontrada */

  filtroTransacoes.value = "todos";

  renderizarTransacoes([transacaoEncontrada]);

  mensagemExtrato.textContent = "Transação encontrada com sucesso.";

  buscaTransacaoId.value = "";
});

/* ==========================================================
   ESTADO INICIAL DO PAINEL
   ========================================================== */

quantidadeOperacoes.textContent = cliente.conta.transacoes.length;

totalDepositadoElemento.textContent = formatarMoeda(0);

totalSacadoElemento.textContent = formatarMoeda(0);

renderizarTransacoes(cliente.conta.transacoes);
