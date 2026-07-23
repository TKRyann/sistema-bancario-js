# 🏦 K2 Banco Digital

O **K2 Banco Digital** é um sistema bancário desenvolvido para fins educacionais. O projeto nasceu durante meus estudos de lógica de programação com JavaScript e vem sendo evoluído por versões, acompanhando os conhecimentos adquiridos ao longo do aprendizado.

A versão **4.1.0** marca a migração do sistema que antes funcionava com `prompt()`, `alert()` e menus no terminal para uma interface visual manipulada pelo DOM.

---

## 🎯 Objetivo do projeto

O principal objetivo é aplicar, na prática, conhecimentos de:

- 🏗️ HTML semântico;
- 🎨 CSS e responsividade;
- ⚡ JavaScript;
- 🖱️ Manipulação do DOM;
- 🧩 Funções, objetos e Arrays;
- 🔍 Métodos como `filter()`, `find()` e `reduce()`;
- ✅ Validação de formulários;
- 📁 Organização de código;
- 🔀 Git e GitHub;
- 🌿 Branches, commits e Pull Requests;
- 🤝 Colaboração entre desenvolvedores.

Este projeto também está sendo desenvolvido em colaboração com um amigo @WerbeteKaue.Dev. A proposta é vivenciar a experiência de trabalhar em equipe em um projeto maior, dividindo responsabilidades, utilizando Git para controlar as alterações e mantendo uma organização semelhante à encontrada em projetos reais.

---

## 🛠️ Tecnologias Utilizadas

- 🌐 **HTML5** - Estruturação semântica da aplicação web
- 🎨 **CSS3** - Estilização, layout e responsividade da interface
- ⚡ **JavaScript (ES6+)** - Lógica de negócios, manipulação do DOM e dinâmica da aplicação
- 🔀 **Git** - Sistema de controle de versão
- 🐙 **GitHub** - Hospedagem de repositório e trabalho colaborativo
- 💻 **Visual Studio Code** - Ambiente de desenvolvimento (IDE)

---

## 🤖 Uso de Inteligência Artificial

Durante a reta final da versão 4.1.0, utilizei Inteligência Artificial como uma ferramenta de apoio ao desenvolvimento e ao aprendizado.

A IA foi utilizada para:

- 💡 Esclarecer dúvidas;
- 📚 Explicar conceitos;
- 🚀 Apresentar novas possibilidades de implementação;
- 🎨 Ajudar na escolha de cores e decisões visuais;
- 🐛 Revisar erros de sintaxe;
- 🔍 Identificar comportamentos inesperados;
- 📐 Sugerir melhorias de organização;
- 🧪 Apoiar testes e documentação.

Ela não substituiu o processo de estudo. As sugestões foram analisadas, adaptadas e testadas antes de serem adicionadas ao projeto. Em alguns momentos, a IA também auxiliou na construção e revisão de trechos de código, mas o objetivo permaneceu o mesmo: compreender a lógica aplicada e utilizar a tecnologia como uma ferramenta de produtividade, assim como ela já é utilizada no mercado de trabalho e no meio educacional.

Acredito que a Inteligência Artificial pode ser uma grande aliada do desenvolvedor quando é utilizada com responsabilidade, senso crítico e disposição para aprender.

---

## ✨ Funcionalidades da versão 4.1.0

- 🔑 Login demonstrativo;
- 👤 Exibição dos dados do cliente e da conta;
- 💰 Consulta de saldo;
- 👁️ Opção para mostrar e esconder o saldo;
- 💵 Realização de depósitos;
- 💸 Realização de saques;
- 🚫 Bloqueio de saques acima do saldo disponível;
- ✔️ Validação dos campos dos formulários;
- 📝 Registro automático das transações;
- 🆔 Identificação das transações por ID;
- 📅 Data e horário de cada operação;
- 📊 Extrato bancário em tabela;
- 🔎 Filtro de depósitos, saques ou todas as transações;
- 🎯 Busca de transação pelo ID;
- 📈 Total depositado;
- 📉 Total sacado;
- 🔢 Quantidade total de operações;
- 🔔 Mensagens visuais de erro e sucesso.

---

## 📁 Estrutura do projeto

```text
k2-banco-digital/
├── assets/
│   ├── css/
│   │   ├── login.css
│   │   └── style.css
│   └── js/
│       ├── login.js
│       └── script.js
├── index.html
├── painel.html
└── README.md
```

---

## 🚀 Como executar

1. Clone o repositório:

```bash
git https://github.com/kherlyssonr/sistema-bancario-js.git
```

2. Entre na pasta do projeto:

```bash
cd k2-banco-digital
```

3. Abra o arquivo `index.html` no navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code.

---

## 🔐 Acesso demonstrativo

```text
E-mail: clienteK@k2banco.com
Senha: jovemtech
```

Essas credenciais são públicas e existem apenas para demonstrar o funcionamento da interface. O projeto ainda não possui backend, banco de dados ou autenticação real.

---

## ⚠️ Limitações atuais

O K2 Banco Digital é um projeto exclusivamente educacional. Por enquanto:

- 💾 Os dados ficam apenas na memória do navegador;
- 🔄 As transações são apagadas ao recarregar a página;
- 🔒 O login é apenas uma simulação no front-end;
- 🖥️ Não existe comunicação com servidor;
- 🗄️ Não existe banco de dados;
- 🛑 Não devem ser utilizadas informações bancárias ou credenciais reais.

---

## 📈 Evolução do projeto

### 📌 v1.0.0

Criação do sistema bancário inicial com consulta de saldo, depósito, saque e menu executado com `prompt()` e `alert()`.

### 📌 v1.1.0

Adição de validações para impedir depósitos e saques inválidos.

### 📌 v2.0.0

Criação do histórico de transações utilizando Arrays.

### 📌 v2.0.1

Correções de validação, mensagens e comportamentos inesperados.

### 📌 v2.1.0

Adição de IDs, resumo da conta, total depositado, total sacado e quantidade de operações.

### 📌 v3.0.0

Organização dos dados do cliente, da conta e das transações utilizando objetos.

### 📌 v3.1.0

Aplicação dos métodos `filter()`, `find()` e `reduce()` para filtros, buscas e cálculos.

### 📌 v3.1.1

Correções e melhorias nas validações do sistema.

### 📌 v4.0.0

Criação da página de login e início da migração para uma interface visual.

### 📌 v4.1.0

Implementação do painel bancário com DOM, formulários, extrato em tabela, filtros, busca por ID, resumo das operações e mensagens visuais.

---

## 🔮 Próximos passos

Entre as melhorias planejadas estão:

- 💾 Armazenamento dos dados no navegador;
- 👥 Criação de novos clientes;
- 🔑 Autenticação com backend;
- 🗄️ Integração com banco de dados;
- 📱 Melhoria da responsividade;
- ♿ Acessibilidade;
- 🧪 Testes automatizados;
- 💳 Novos tipos de transação;
- 📦 Organização do JavaScript em módulos.

---

## 💡 Aprendizados

Este projeto representa minha evolução nos estudos de desenvolvimento web. Além da parte técnica, ele também está ajudando a desenvolver habilidades de organização, resolução de problemas, comunicação, colaboração, versionamento e responsabilidade sobre as alterações realizadas no código.

Cada versão registra uma nova etapa do aprendizado e transforma um exercício simples em um projeto cada vez mais completo.

---

## ⚠️ Aviso

Este sistema não é uma instituição financeira e não realiza operações bancárias reais. Todo o conteúdo foi criado exclusivamente para estudo, prática e composição de portfólio.
