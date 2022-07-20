# Backend Speedware - Grupo05 🦅

⚠️ BACKEND - !COLOCAR SEU APPTOKEN E APPKEY!

### Como utilizar:

⚠️ - Colocar App Key e App Token em /speedware-backend05/node/clients/vtexCommerce.ts

```
# Comandos

vtex setup - instalar dependências
vtex use {{ workspace }} - utilizar no seu workspace
vtex link - vincular esse app ao seu workspace
```

## Apis disponíveis:

```
# Rotas

https://{{ workspace }}--{{ account }}.myvtex.com/orderHookEndPoint
https://{{ workspace }}--{{ account }}.myvtex.com/getTotalPoints
https://{{ workspace }}--{{ account }}.myvtex.com/removePoints

```

## Documentação das Api's

- #### orderHookEndPoint
Alimentado pela vtex, porém caso queira inserir um valor manualmente
basta passar o orderid do pedido

```
# Exemplo request body
{
  "OrderId": "1247981552231-01"
}

# Exemplo response body 
{
    "user": "fulaninho@gmail.com",
    "prevPointsBalance": 8725,
    "newPointsBalance": 10450
}
```

- #### getTotalPoints

Essa rota tem como objetivo retornar o total de pontos de um usuário
de acordo com seu email.

```
# Exemplo request body
{
    "userEmail": "fulaninho@gmail.com"
}

# Exemplo response body 

{
    "id": "eacac18a-07b0-11ed-124d-0e6dcc45d76d",
    "userEmail": "fulaninho@gmail.com",
    "totalPoints": 3451
}
```

- #### removePoints

Essa rota tem como objetivo descontar os pontos de um usuário de acordo com seu email,
e retornar o saldo após o desconto ter sido finalizado.

```
# Exemplo request body

{
  "targetUser": "fulaninho@gmail.com",
  "valueToDiscount": 144
}

# Exemplo response body 

{
  "user": "fulaninho@gmail.com",
  "oldPoinsBalance": 1400,
  "newPointsBalance": 1296
}

```

## Mais informações

| Routes            | Method | Params                     | Type                                    |
|-------------------|--------|----------------------------|-----------------------------------------|
| orderHookEndPoint | POST   | OrderId                    | string                                  |
| getTotalPoints    | POST   | userEmail                  | string -Obs tem que ser um email válido |
| removePoints      | POST   | targetUser</br> valueToDiscount | string</br> number                           |
