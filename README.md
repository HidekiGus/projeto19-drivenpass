# ROUTES

## 👤 Users Routes

### 📮 POST /user/create

```yml
- Use to create a user

- headers: {}
- body: {
  "email": "example@email.com",
  "password": "1234567890" // Must have at least 10 characters
}
```

### 📮 POST /signin

```yml
- Use to sign in

- headers: {}
- body: {
  "email": "example@email.com",
  "password": "1234567890"
}
```

## 🪪 Credentials Routes

### 🔎 GET /credential

```yml
- Use to get all credentials from a user

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 🔎 GET /credential/:id

```yml
- Use to get a specific credential from a user

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 📮 POST /credential/create

```yml
- Use to create a credential

- headers: { "authorization": "yourTokenHere" }
- body: {
  "url": "http://www.example.com",
  "username": "exampleUsername",
  "password": "12345",
  "title": "Example title"
}
```

### 🗑️ DELETE /credential/:id

```yml
- Use to delete a specific credential from a user using the credential's id

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

## 💳 Cards Routes

### 🔎 GET /card

```yml
- Use to get all cards from a user

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 🔎 GET /card/:id

```yml
- Use to get a specific card from a user using the card's id

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 📮 POST /card/create

```yml
- Use to create a card

- headers: { "authorization": "yourTokenHere" }
- body: {
  "title": "Card x",
  "cardNumber": "1234 1234 1234 1234",
  "securityCode": "123",
  "password": "123",
  "isVirtual": false,
  "type": "Credit" //Can be "Credit", "Debit" or "Both"
}
```

### 🗑️ DELETE /card/:id

```yml
- Use to delete a specific card from a user using the card's id

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

## 🗒️ Safe Notes Routes

### 🔎 GET /safenote

```yml
- Use to get all safe notes from a user

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 🔎 GET /safenote/:id

```yml
- Use to get a specific safe note from a user

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 📮 POST /safenote/create

```yml
- Use to create a safe note

- headers: { "authorization": "yourTokenHere" }
- body: {
  "title": "Safe Note Title Example",
  "content": "Example content for a safe note"
}
```

### 🗑️ DELETE /safenote/:id

```yml
- Use to delete a specific safe note from a user using the safe note's id

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

## 📶 Wi-fi Routes

### 🔎 GET /wifi

```yml
- Use to get all wi-fis from a user

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 🔎 GET /wifi/:id

```yml
- Use to get a specific wi-fi from a user

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```

### 📮 POST /wifi/create

```yml
- Use to create a wi-fi

- headers: { "authorization": "yourTokenHere" }
- body: {
  "title": "Wifi title",
  "networkName": "Example Network Name",
  "password": "examplePassword123"
}
```

### 🗑️ DELETE /wifi/:id

```yml
- Use to delete a specific wi-fi from a user using the wi-fi's id

- headers: { 'authorization': 'yourTokenHere' }
- body: {}
```
