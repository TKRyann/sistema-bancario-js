# 🏦 Sistema Bancário em JavaScript

Projeto educacional desenvolvido para praticar lógica de programação e os fundamentos de JavaScript por meio da evolução contínua de um sistema bancário.

O sistema funciona no navegador utilizando `prompt()` e `alert()`. Atualmente, permite cadastrar um cliente, consultar o saldo, realizar depósitos e saques, visualizar o extrato e consultar os dados da conta.

---

## 📌 Status do projeto

🚧 Projeto em desenvolvimento

**Versão atual: `v3.0.0`**

O projeto recebe novas funcionalidades conforme novos conteúdos de JavaScript são estudados.

---

## 🎯 Objetivo

O objetivo deste projeto é aplicar os conteúdos estudados em uma aplicação que evolui por versões.

Além de JavaScript, o projeto também é utilizado para praticar:

- Git e GitHub;
- criação e exclusão de branches;
- commits organizados;
- Pull Requests;
- tags e releases;
- versionamento semântico.

---

## ✨ Funcionalidades

### Cadastro e dados da conta

- Cadastro básico do nome do cliente;
- Cadastro da idade;
- Escolha do tipo da conta;
- Exibição dos dados do cliente;
- Exibição da agência, número e tipo da conta;
- Dados do cliente e da conta organizados em objetos.

### Operações bancárias

- Consulta de saldo;
- Realização de depósitos;
- Realização de saques;
- Verificação de saldo insuficiente;
- Bloqueio de depósitos e saques menores ou iguais a zero;
- Tratamento de campos vazios;
- Tratamento de operações canceladas;
- Validação de valores não numéricos;
- Encerramento do sistema pelo menu.

### Histórico e extrato

- Registro de depósitos e saques;
- Transações armazenadas como objetos;
- Identificador único para cada transação;
- Registro de data e horário;
- Numeração das operações;
- Total depositado;
- Total sacado;
- Quantidade de operações;
- Saldo atual no resumo da conta;
- Mensagem para extrato sem movimentações.

---

## 🆕 Novidades da v3.0.0

A versão `v3.0.0` reorganiza os dados do sistema utilizando Objetos e Arrays de Objetos.

### Principais mudanças

- Criação do objeto `cliente`;
- Criação do objeto `conta` dentro do cliente;
- Saldo movido para `cliente.conta.saldo`;
- Transações movidas para `cliente.conta.transacoes`;
- Substituição dos Arrays antigos por um único Array de transações;
- Depósitos e saques registrados como objetos;
- Identificador único para cada operação;
- Registro de data e horário;
- Cadastro básico do cliente;
- Nova opção para visualizar os dados da conta;
- Extrato adaptado para trabalhar com objetos.

## 🧠 Conceitos praticados

- Variáveis com `let`;
- Tipos de dados;
- Conversão com `Number()`;
- Validação com `Number.isNaN()`;
- Condicionais com `if`, `else if` e `else`;
- Operadores de comparação e operadores lógicos;
- Laços `while` e `for`;
- Funções;
- Parâmetros e retorno;
- Escopo de variáveis;
- Arrays;
- Objetos;
- Objetos dentro de objetos;
- Arrays de objetos;
- Propriedades e valores;
- Acesso e alteração de propriedades;
- Método `push()`;
- Propriedade `length`;
- Índices de Arrays;
- Variáveis acumuladoras;
- Template strings;
- Formatação com `toFixed()`;
- Objeto `Date`;
- `toLocaleDateString()`;
- `toLocaleTimeString()`.

---

## ⚙️ Como o sistema funciona

Ao iniciar o projeto, o sistema solicita:

1. Nome do cliente;
2. Idade;
3. Tipo da conta.

Em seguida, o menu principal é exibido:

```text
1 - Consultar saldo
2 - Depositar
3 - Sacar
4 - Ver extrato
5 - Ver dados da conta
6 - Sair
```

O menu permanece ativo por meio de um laço `while` até que a opção `6` seja escolhida.

---

## ▶️ Como executar

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acesse a pasta

```bash
cd NOME_DA_PASTA
```

### 3. Abra o projeto

Abra o arquivo `index.html` no navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code.

---

## 🧪 Testes realizados

Foram testados os seguintes cenários:

- Consulta do saldo inicial;
- Depósito válido;
- Depósito com valor zero;
- Depósito negativo;
- Depósito com letras;
- Depósito com campo vazio;
- Cancelamento de depósito;
- Saque válido;
- Saque com valor zero;
- Saque negativo;
- Saque com letras;
- Saque maior que o saldo;
- Saque com campo vazio;
- Cancelamento de saque;
- Extrato sem operações;
- Extrato com depósitos e saques;
- Sequência dos identificadores;
- Registro de data e horário;
- Total depositado;
- Total sacado;
- Quantidade de operações;
- Saldo final;
- Exibição dos dados do cliente;
- Opções inválidas no menu;
- Encerramento do sistema.

---

## 📋 Histórico de versões

### v3.0.0 — Objetos e dados da conta

- Cadastro básico do cliente;
- Dados do cliente organizados em objeto;
- Conta como objeto interno;
- Saldo armazenado dentro da conta;
- Transações armazenadas como objetos;
- Um único Array de transações;
- IDs únicos;
- Data e horário das operações;
- Nova opção para visualizar os dados da conta;
- Extrato adaptado para Arrays de Objetos.

### v2.1.0 — Resumo da conta

- Numeração das transações;
- Exibição do saldo atual;
- Quantidade de operações;
- Total depositado;
- Total sacado;
- Resumo da conta.

### v2.0.1 — Correções e melhorias

- Tratamento de operações canceladas;
- Tratamento de campos vazios;
- Validação de valores não numéricos;
- Melhorias nas mensagens;
- Ajustes de organização e formatação.

### v2.0.0 — Histórico e extrato

- Criação do histórico de transações;
- Registro de depósitos;
- Registro de saques;
- Implementação do extrato;
- Utilização de Arrays.

### v1.1.0 — Validações

- Bloqueio de depósitos inválidos;
- Bloqueio de saques inválidos;
- Verificação de saldo insuficiente;
- Tratamento de opções inválidas.

### v1.0.0 — Primeira versão

- Consulta de saldo;
- Depósito;
- Saque;
- Menu interativo;
- Funções para operações bancárias.

---

## 🛠️ Tecnologias utilizadas

- HTML;
- JavaScript;
- Git;
- GitHub;
- Visual Studio Code.

---

## 🌿 Fluxo de desenvolvimento

O projeto utiliza o seguinte fluxo:

1. Criar uma branch;
2. Desenvolver as funcionalidades;
3. Fazer commits separados;
4. Enviar a branch para o GitHub;
5. Abrir um Pull Request;
6. Fazer o merge na `main`;
7. Criar a tag da versão;
8. Publicar a Release;
9. Apagar a branch concluída.

---

## 📖 Aviso

Este é um projeto educacional.

O sistema não possui conexão com bancos reais, não utiliza dados financeiros verdadeiros e não deve ser utilizado para operações bancárias reais.

---

## 👨‍💻 Autor

Desenvolvido por **Kherlysson Ryann** durante os estudos de lógica de programação e JavaScript.
