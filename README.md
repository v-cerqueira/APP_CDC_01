# APP_CDC_01

Aplicativo mobile desenvolvido com React Native e Expo como atividade prática da disciplina de Fundamentos II.

## Objetivo

O projeto foi criado para praticar:

- construção de interfaces no React Native
- uso de `View`, `Text`, `Image`, `ScrollView` e `SafeAreaView`
- organização de estilos em arquivos separados
- exibição dinâmica de uma lista de países

## Tecnologias utilizadas

- React
- React Native
- Expo

## Funcionalidades da tela

A aplicação apresenta:

- cabeçalho com o título `FUNDAMENTOS II`
- imagem central ilustrativa
- subtítulo `DSV MOBILE`
- faixa decorativa amarela
- lista de países com nome e capital
- rodapé com autor e data

## Países exibidos

- Japão — Tóquio
- Portugal — Lisboa
- Itália — Roma
- Alemanha — Berlim
- Egito — Cairo
- Síria — Damasco

## Estrutura do projeto

```text
APP_CDC_01/
|-- App.js
|-- index.js
|-- app.json
|-- package.json
|-- README.md
|-- assets/
`-- src/
    `-- styleSheet/
        |-- cabecalho.js
        |-- container.js
        |-- conteudo.js
        |-- estilo.js
        `-- rodape.js
```

## Organização dos estilos

Os estilos foram separados por responsabilidade:

- [container.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/src/styleSheet/container.js): estrutura principal da tela
- [cabecalho.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/src/styleSheet/cabecalho.js): estilos do topo da aplicação
- [conteudo.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/src/styleSheet/conteudo.js): estilos da lista de países
- [rodape.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/src/styleSheet/rodape.js): estilos do rodapé
- [estilo.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/src/styleSheet/estilo.js): arquivo que centraliza e exporta todos os estilos

## Arquivos principais

- [App.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/App.js): componente principal da aplicação
- [package.json](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/package.json): scripts e dependências do projeto
- [app.json](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/app.json): configurações do Expo

## Como executar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie a aplicação:

```bash
npm start
```

3. No Expo, escolha uma forma de execução:

- `a` para abrir no Android
- `w` para abrir no navegador
- Expo Go para testar no celular

## Scripts disponíveis

- `npm start`: inicia o projeto com Expo
- `npm run android`: abre no Android
- `npm run ios`: abre no iOS
- `npm run web`: abre na web

## Autor

- Vinicius Cerqueira Silva
