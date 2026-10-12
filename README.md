# Spring Ionic

Aplicativo frontend de e-commerce desenvolvido com Ionic e Angular. O código inclui telas e serviços para interagir com uma API, além de suporte a recursos móveis, como câmera.

## Tecnologias principais

- TypeScript
- Angular
- Ionic
- HTML e CSS
- Android e iOS (estrutura para aplicativo móvel)

## Relação com o backend

Este frontend corresponde ao backend [Spring Boot Ionic Backend](https://github.com/murillomtz/spting-boot-ionic-backend), conforme a anotação do projeto. A configuração do frontend aponta para `http://localhost:8081`; mantenha essa URL alinhada à porta configurada no backend.

## Executar

Com Node.js e Ionic CLI instalados:

```bash
npm install
npm start
```

O script inicia o servidor de desenvolvimento Ionic. Consulte `src/config/api.config.ts` para URL da API e `package.json` para os comandos disponíveis.
