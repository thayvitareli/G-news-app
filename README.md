# GNews App 📰

Bem-vindo ao repositório do **GNews**, um aplicativo de agregação de notícias construído usando **React Native** e **Expo**. O aplicativo permite aos usuários explorar as principais manchetes, pesquisar notícias por categoria e salvar artigos para leitura posterior.

## 🚀 Funcionalidades

- **Home Feed**: Explore as principais manchetes (Top Headlines) assim que abrir o aplicativo.
- **Discover (Descobrir)**: Filtre notícias por categorias ou busque por palavras-chave específicas.
- **Detalhes do Artigo**: Veja a notícia completa com uma interface de leitura limpa, além de poder ajustar o tamanho da fonte.
- **Artigos Salvos**: Adicione artigos aos favoritos para ler mais tarde. O estado dos artigos é salvo globalmente.

## 🛠️ Tecnologias e Bibliotecas

Este projeto foi construído usando tecnologias modernas e as melhores práticas do ecossistema React/React Native:

- **Framework**: [Expo SDK 54](https://expo.dev/) & [React Native 0.81](https://reactnative.dev/)
- **Roteamento**: [Expo Router](https://docs.expo.dev/router/introduction/) (Navegação baseada em arquivos estáticos e pastas `app/`)
- **Estilização**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native)
- **Gerenciamento de Estado**: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) (Para gerenciar a lista de artigos salvos)
- **Data Fetching**: [React Query (TanStack Query)](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)
- **Outras bibliotecas**: `dayjs` (formatação de datas), `@expo/vector-icons` (ícones).

## 🏗️ Arquitetura (MVVM)

Este projeto adota o padrão de arquitetura **Model-View-ViewModel (MVVM)**, que promove uma clara separação de responsabilidades (Separation of Concerns):

A estrutura do projeto dentro de `src/` é a seguinte:

- **`features/`**: O coração da aplicação. Cada tela/feature principal (Home, Discover, Article, Saved) é um módulo aqui.
  - **View (`*.view.tsx`)**: O componente visual de UI. Não contém regras de negócio.
  - **Model/ViewModel (`*.model.tsx`/hook)**: Gerencia o estado e as regras de negócio para a `View`. Ele interage com os `services` e o `store`.
- **`app/`**: Contém o roteamento da aplicação usando Expo Router, servindo como pontos de entrada das telas.
- **`components/`**: Componentes reutilizáveis por todo o projeto (ex: cartões de notícias).
- **`service/`**: Configuração do Axios e funções que fazem as chamadas para APIs externas (ex: `news/index.ts` que se conecta com a NewsAPI).
- **`store/`**: Estado global da aplicação com Zustand (`useSavedArticlesStore.ts`).

## ⚙️ Como replicar e rodar o projeto localmente

Siga os passos abaixo para configurar e rodar o ambiente de desenvolvimento na sua máquina.

### Pré-requisitos
- Ter o **Node.js** (v18+) instalado na máquina.
- Conta e chave de API gratuita no [NewsAPI](https://newsapi.org/).

### Passo a passo

1. **Clone este repositório** e acesse a pasta do projeto:
    ```bash
    git clone <url-do-repositorio>
    cd my-expo-app
    ```

2. **Instale as dependências**:
    ```bash
    npm install
    ```

3. **Configuração das Variáveis de Ambiente**:
    - Renomeie o arquivo `.exemple.env` para `.env` (ou crie um novo arquivo `.env` na raiz do projeto).
    - Insira a sua chave de API obtida no NewsAPI:
    ```env
    EXPO_PUBLIC_API_KEY=sua_chave_api_aqui
    ```

4. **Inicie o servidor de desenvolvimento do Expo**:
    ```bash
    npx expo start
    ```

5. **Acesse o aplicativo**:
    - Pressione `i` no terminal para rodar no simulador do **iOS** (apenas no macOS).
    - Pressione `a` para rodar no emulador do **Android**.
    - Ou escaneie o código QR gerado no terminal usando o aplicativo **Expo Go** no seu celular físico.

---
Desenvolvido com 💙 usando Expo.
