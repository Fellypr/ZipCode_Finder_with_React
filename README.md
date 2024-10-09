# React + Vite

# Buscador de CEP

Este é um projeto simples de um buscador de CEP utilizando React e a API pública ViaCEP. O usuário pode inserir um CEP e obter informações relacionadas, como logradouro, localidade e DDD.

## Funcionalidades

- Busca informações de um CEP fornecido pelo usuário.
- Utiliza a API pública ViaCEP para obter os dados.
- Exibe informações como logradouro, localidade, DDD, e região (se disponível).

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para criação de interfaces de usuário.
- **Axios** - Cliente HTTP para realizar as requisições à API.
- **React Icons** - Biblioteca de ícones, neste caso, o ícone de busca `CiSearch`.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/buscador-cep.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd buscador-cep
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o projeto:
    ```bash
    npm start
    ```

O projeto será executado em `http://localhost:3000`.

## Como Usar

1. Insira um CEP no campo de busca (ex: `01001-000`).
2. Clique no botão de busca ou pressione Enter.
3. As informações relacionadas ao CEP serão exibidas abaixo.

## Estrutura de Código

O código principal se encontra no arquivo `App.js`. A aplicação utiliza dois estados principais:

- `input` - Para armazenar o valor do CEP inserido pelo usuário.
- `cep` - Para armazenar os dados retornados da API ViaCEP.

A função `SearchCep` realiza a requisição para a API e armazena a resposta no estado `cep`. Caso ocorra um erro, uma mensagem de alerta é exibida.

```jsx
async function SearchCep(){
  try{
    const response =  await Axios.get(`https://viacep.com.br/ws/${input}/json`);
    setCep(response.data);
    setInput("");
  }catch{
    alert("ERRO AO PROCURAR O CEP\nPor favor tente novamente ou verifique se o cep está escrito corretamente");
  }
}

