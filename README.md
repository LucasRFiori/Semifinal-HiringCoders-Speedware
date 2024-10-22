
# HiringCoders-speedware05

WS: https://speedware05--speedware.myvtex.com/

### ⚠️ BACKEND - !INSERT YOUR APPTOKEN AND APPKEY!

# Hiring Coders Phase 03!!

![logo-hiring-coders](https://github.com/diosneygomes/desafio-final-gama-academy-vtex/blob/main/logo-hiring-coders.png)

![logo-hiring-coders](https://github.com/devlobao84/front-speedeware05/blob/main/SPEED.png)

# :desktop_computer: Final Challenge - Group 05 :trophy:

This repository contains the content related to the last challenge of the program <a href="https://www.hiringcoders.com.br/">Hiring Coders</a>.
Here you will find all the details about the construction of the final project done by **Group 05**.

# :notebook: Index

<a name="anchor"></a>
:pushpin: - [Challenge Description](#anchor1)

:pushpin: - [About the Project](#anchor2)

:pushpin: - [Links to the Projects](#anchor3)

:pushpin: - [Team](#anchor4)

<a id="anchor4"></a>
# :1st_place_medal: Team

:pouting_man: Lobão - | <a href="https://www.linkedin.com/in/jonaslobo/">LinkedIn</a> | <a href ="https://github.com/devlobao84">GitHub</a> |

:pouting_man: Lucas Fiori - | <a href="https://www.linkedin.com/in/lucas-rodrigues-fiori-763326196/">LinkedIn</a> | <a href ="https://github.com/lucasrfiori">GitHub</a> |

:pouting_man: Victor Dandolini - | <a href="https://www.linkedin.com/in/victordandolini/">LinkedIn</a> | <a href ="https://github.com/victordandolini">GitHub</a> |

# Backend Speedware - Group 05 🦅

### How to Use:
⚠️ - Insert App Key and App Token in /speedware-backend05/node/clients/vtexCommerce.ts

```
# Commands

vtex setup - install dependencies
vtex use {{ workspace }} - use in your workspace
vtex link - link this app to your workspace
```

## Available APIs:

```
# Routes

https://{{ workspace }}--{{ account }}.myvtex.com/orderHookEndPoint
https://{{ workspace }}--{{ account }}.myvtex.com/getTotalPoints
https://{{ workspace }}--{{ account }}.myvtex.com/removePoints

```

## API Documentation

- #### orderHookEndPoint
Powered by VTEX, but if you want to insert a value manually, just pass the orderId of the order.

```
# Example request body
{
  "OrderId": "1247981552231-01"
}

# Example response body 
{
    "user": "fulaninho@gmail.com",
    "prevPointsBalance": 8725,
    "newPointsBalance": 10450
}
```

- #### getTotalPoints

This route aims to return the total points of a user according to their email.

```
# Example request body
{
    "userEmail": "fulaninho@gmail.com"
}

# Example response body 

{
    "id": "eacac18a-07b0-11ed-124d-0e6dcc45d76d",
    "userEmail": "fulaninho@gmail.com",
    "totalPoints": 3451
}
```

- #### removePoints

This route aims to deduct points from a user according to their email and return the balance after the deduction has been completed.

```
# Example request body

{
  "targetUser": "fulaninho@gmail.com",
  "valueToDiscount": 144
}

# Example response body 

{
  "user": "fulaninho@gmail.com",
  "oldPointsBalance": 1400,
  "newPointsBalance": 1296
}
```

## More Information

| Routes            | Method | Params                     | Type                                    |
|-------------------|--------|----------------------------|-----------------------------------------|
| orderHookEndPoint | POST   | OrderId                    | string                                  |
| getTotalPoints    | POST   | userEmail                  | string - Note: must be a valid email   |
| removePoints      | POST   | targetUser</br> valueToDiscount | string</br> number                           |
