# Boilerplate: Vite + React + TypeScript + Redux Toolkit (RTK Query)

Este repositório é um boilerplate destinado a acelerar a criação de aplicações front-end usando Vite, React, TypeScript e Redux Toolkit com RTK Query para chamadas a APIs.

## Visão geral

- Stack: Vite, React 19, TypeScript, Redux Toolkit (RTK) / RTK Query, MUI (Material UI) e Emotion.
- Objetivo: oferecer uma base pronta com configuração de bundler, TypeScript, store Redux, organização de pastas e exemplo de serviço API para uso imediato.

## Principais características

- Configuração pronta do Vite com React + TypeScript.
- Integração com Redux Toolkit e exemplos de slices em `src/store/slices`.
- Estrutura para serviços de API usando RTK Query em `src/services` (ex.: `src/services/pokemon`).
- Providers para contexto e tema em `src/providers`.
- Exemplo mínimo de aplicação em `src/App.tsx` e entrada em `src/main.tsx`.

## Pré-requisitos

- Node.js (LTS recomendado, >= 18)
- npm ou yarn

## Instalação

1. Clone este repositório:

   git clone <este-repo>
   cd VRTSRTKQ

2. Instale as dependências:

   npm install

3. Copie o arquivo de variáveis de ambiente de exemplo e ajuste se necessário:

   cp .env.example .env

   (Opcional) Ajuste a URL base da API no `.env`.

## Variáveis de ambiente

As variáveis de ambiente expostas ao client no Vite devem começar com `VITE_`.

| Nome                    | Default                      | Descrição                                                |
| ----------------------- | ---------------------------- | -------------------------------------------------------- |
| `VITE_POKEAPI_BASE_URL` | `https://pokeapi.co/api/v2/` | URL base utilizada pelo serviço de exemplo `pokemonApi`. |

Para alterar a origem das requisições da API de exemplo, modifique o valor em `.env`.

## Scripts úteis

- npm run dev: inicia o servidor de desenvolvimento (Vite)
- npm run build: compila o projeto (TypeScript build + Vite build)
- npm run lint: executa o ESLint
- npm run preview: serve a build gerada pelo Vite (preview)

## Estrutura do projeto

Principais arquivos e pastas:

- `index.html` — entrada HTML do Vite
- `src/`
  - `main.tsx` — ponto de entrada React
  - `App.tsx` — componente principal
  - `providers/` — providers como `StoreProvider.tsx` e `ThemeProvider.tsx`
  - `services/` — serviços API (RTK Query). Exemplo: `src/services/pokemon/pokemon.ts`
  - `store/` — configuração da store Redux e slices (`store.ts`, `store.hooks.ts`, `slices/auth`)

## Exemplo: uso do RTK Query neste boilerplate

O diretório `src/services/pokemon` contém um exemplo de serviço que demonstra como configurar endpoints com RTK Query. Em linhas gerais:

- Defina um "api slice" com `createApi` e um `fetchBaseQuery`.
- Declare endpoints (query/mutation) e gere hooks automáticos.

Exemplo simplificado (conceito):

// ...exemplo simplificado de uso

No código do projeto existe um serviço pronto em `src/services/pokemon/pokemon.ts`; use-o como referência para criar novos serviços para suas APIs.

## Boas práticas e convenções

- Mantenha a lógica de chamadas a API dentro de `src/services`.
- Slices do Redux em `src/store/slices`.
- Components e pages podem ser organizados em subpastas dentro de `src/` conforme o tamanho do projeto.
- Use `providers/` para agrupar Providers compartilhados (store, theme, auth, etc.).

## Contribuição

Contribuições são bem-vindas. Para contribuir:

1. Abra uma issue descrevendo a sugestão.
2. Crie um branch, aplique as mudanças e abra um pull request.

## Melhorias e próximos passos sugeridos

- Adicionar exemplos de testes (Jest + React Testing Library).
- Configurar CI (GitHub Actions) com lint, build e testes.
- Adicionar exemplos de uso de variáveis de ambiente e documentação de deploy.

## Vantagens de usar este boilerplate

Este boilerplate foi pensado para acelerar o início de um novo projeto front-end, oferecendo:

- Setup pronto e testado com Vite e TypeScript, reduzindo tempo de configuração inicial.
- Padrões de organização (stores, services, providers) que facilitam escalabilidade e manutenção.
- Integração com Redux Toolkit e RTK Query para gerenciamento de estado e chamadas a API de forma eficiente (caching, invalidation, hooks automáticos).
- Dependências modernas e alinhadas com as melhores práticas (MUI + Emotion para estilização se desejar UI pronta).

Use este boilerplate como ponto de partida para projetos que precisem de uma base sólida e escalável.
