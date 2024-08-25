# manage-items-with-db

To run the code, run the following command in the root folder


## Setup
clone project with
```bash
  git clone <REPOSITORY_URL>
```
setup a postgres database named
```
items
```
create a .env file, and copy the .env.sample file into it with your local database credentials (eg. db username, password ...)
## Installation

Install packages with npm

```bash
  cd manage-items-with-db
  npm install
```

## Runing the project

```bash
  npm start
```


## API Reference

### Get all items

```http
  GET /api/items
```
#### Sample
##### Request
```http
GET http://localhost:3000/items
```
##### Response
```json
[
  {
    "id": 4,
    "name": "Pen",
    "description": "used to write",
    "price": "123.21",
    "createdAt": "2024-08-25T06:17:37.191Z",
    "updatedAt": "2024-08-25T06:51:22.297Z"
  },
  {
    "id": 5,
    "name": "check",
    "description": "updated",
    "price": "88",
    "createdAt": "2024-08-25T06:52:39.036Z",
    "updatedAt": "2024-08-25T06:53:33.008Z"
  }
]
```

### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Sample
##### Request
```http
GET http://localhost:3000/items/4
```
##### Response
```json
{
  "id": 4,
  "name": "Pen",
  "description": "used to write",
  "price": "123.21",
  "createdAt": "2024-08-25T06:17:37.191Z",
  "updatedAt": "2024-08-25T06:55:50.192Z"
}
```

### Create item

```http
  POST /api/items
```


| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. A unique id |
| `name` | `string` | **Required**. Name of the item |
| `description` | `string` | **Required**. Description of the item |
| `price` | `float` | **Required**. Non-negative float |

#### Sample
##### Request
```request
POST http://localhost:3000/items
BODY {
  "name": "Lord of the rings",
  "description": "Novel",
  "price": 123.21
}
```
##### Response
```json
{
  "id": 6,
  "name": "Lord of the rings",
  "description": "Novel",
  "price": "123.21",
  "updatedAt": "2024-08-25T06:59:45.361Z",
  "createdAt": "2024-08-25T06:59:45.361Z"
}
```

### Update item

```http
  PUT /api/items
```


| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. A unique id |
| `name` | `string` | **Optional**. Name of the item |
| `description` | `string` | **Optional**. Description of the item |
| `price` | `float` | **Optional**. Non-negative float |

#### Sample
##### Request
```request
PUT http://localhost:3000/items
BODY {
  "id": 6,
  "description": "A movie about rings",
  "price": 4
}
```
##### Response
```json
{
  "id": 6,
  "name": "Lord of the rings",
  "description": "A movie about rings",
  "price": 4,
  "createdAt": "2024-08-25T06:59:45.361Z",
  "updatedAt": "2024-08-25T07:02:12.411Z"
}
```

### Delete item

```http
  DELETE /api/items/${id}
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. A unique id |

#### Sample
##### Request
```request
DELETE http://localhost:3000/items/6
```

##### Response
```json
{
  "id": 6,
  "name": "Lord of the rings",
  "description": "A movie about rings",
  "price": "4",
  "createdAt": "2024-08-25T06:59:45.361Z",
  "updatedAt": "2024-08-25T07:02:12.411Z"
}
```