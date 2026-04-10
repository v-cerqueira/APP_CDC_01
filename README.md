# APP_CDC_01

Aplicativo mobile desenvolvido com React Native e Expo para apresentar uma interface simples com cabeçalho, área de conteúdo e rodapé.

## Objetivo

Este projeto foi criado como atividade prática da disciplina de Fundamentos II, com foco em:

- organização de componentes visuais no React Native
- uso de `View`, `Text` e `Image`
- separação de estilos em arquivo externo com `StyleSheet`

## Tecnologias utilizadas

- React
- React Native
- Expo

## Estrutura do projeto

```text
APP_CDC_01/
|-- App.js
|-- index.js
|-- app.json
|-- package.json
|-- assets/
`-- src/
    `-- styleSheet/
        `-- estilo.js
```

## Arquivos principais

- [App.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/App.js): componente principal da aplicação
- [src/styleSheet/estilo.js](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/src/styleSheet/estilo.js): estilos da interface
- [package.json](C:/Users/Lab%20311/Desktop/VINICIUS%20ADS-5A/app10.04.2026/APP_CDC_01/package.json): dependências e scripts do projeto

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
npm start
```

3. Depois disso, escolha uma das opções no terminal do Expo:

- `a` para abrir no Android
- `w` para abrir no navegador
- usar o aplicativo Expo Go para testar no celular

## Scripts disponíveis

- `npm start`: inicia o servidor Expo
- `npm run android`: abre o projeto no Android
- `npm run ios`: abre o projeto no iOS
- `npm run web`: abre o projeto na web

## Interface atual

A aplicação apresenta:

- um cabeçalho com o título `FUNDAMENTOS II`
- uma imagem central ilustrativa
- o texto `DSV MOBILE`
- uma área destinada ao conteúdo
- um rodapé com autor e data

## Autor

- Luiz Fernando Corcini
