# 🏦 Sistema Bancário em JavaScript

Projeto educacional desenvolvido para praticar lógica de programação e fundamentos de JavaScript por meio da evolução contínua de um sistema bancário.

O sistema funciona no navegador utilizando `prompt()` e `alert()`. Atualmente, permite cadastrar um cliente, consultar o saldo, realizar depósitos e saques, visualizar o extrato, filtrar transações, buscar uma operação pelo ID e consultar os dados da conta.

---

## 📌 Status do projeto

🚧 Projeto em desenvolvimento

**Versão atual: `v3.1.0`**

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
- Dados organizados em objetos.

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
- Exibição do extrato completo;
- Total depositado;
- Total sacado;
- Quantidade de depósitos;
- Quantidade de saques;
- Quantidade total de operações;
- Saldo atual no resumo da conta;
- Mensagem para extrato sem movimentações.

### Filtros e busca

- Filtro para visualizar apenas depósitos;
- Filtro para visualizar apenas saques;
- Busca de uma transação pelo ID;
- Mensagem quando o ID não é encontrado;
- Validação do ID informado;
- Mensagem quando não existem operações do tipo escolhido.

---

## 🆕 Novidades da v3.1.0

A versão `v3.1.0` adiciona novos recursos utilizando métodos de Arrays.

### Principais mudanças

- Uso de `filter()` para separar depósitos e saques;
- Uso de `find()` para buscar uma transação pelo ID;
- Uso de `reduce()` para calcular os totais;
- Nova opção para filtrar transações;
- Nova opção para buscar uma transação;
- Exibição da quantidade de depósitos;
- Exibição da quantidade de saques;
- Melhor organização da formatação das transações;
- Atualização do menu principal de 6 para 8 opções.

---

## 🧠 Conceitos praticados

- Variáveis com `let`;
- Tipos de dados;
- Conversão com `Number()`;
- Validação com `Number.isNaN()`;
- Validação com `Number.isInteger()`;
- Condicionais com `if`, `else if` e `else`;
- Operadores de comparação e operadores lógicos;
- Laços `while` e `for`;
- Funções;
- Parâmetros e retorno;
- Escopo de variáveis;
- Arrays;
- Objetos;
- Objetos aninhados;
- Arrays de objetos;
- Acesso e alteração de propriedades;
- Método `push()`;
- Método `filter()`;
- Método `find()`;
- Método `reduce()`;
- Propriedade `length`;
- Template strings;
- Formatação com `toFixed()`;
- Objeto `Date`;
- `toLocaleDateString()`;
- `toLocaleTimeString()`;
- Valor `undefined`.

---

## 📋 Histórico de versões

### v3.1.0 — Filtros, busca e cálculos

- Implementação de `filter()`;
- Implementação de `find()`;
- Implementação de `reduce()`;
- Filtro de depósitos;
- Filtro de saques;
- Busca de transação por ID;
- Totais calculados com `reduce()`;
- Quantidade de depósitos e saques;
- Novo menu com oito opções.

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
