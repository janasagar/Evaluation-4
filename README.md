# Automate API testing using Cypress
## Scope 
### 1. Register a user and create their wallet.
Base URL: ```https://crypto-wallet-server.mock.beeceptor.com```
Endpoint: ```/api/v1/register```
HTTP request: ```POST```
Request body  ```{
  "username": "user123",
  "password": "securepassword",
  "email": "user@example.com"}```
### 3. Login the user and generate a session token.
Base URL: ```https://crypto-wallet-server.mock.beeceptor.com```
Endpoint: ```/api/v1/login```
HTTP request: ```POST```
Request body  ```{
  "username": "user123",
  "password": "securepassword"}```

### 4. Retrieve the wallet balance.
Base URL: ```https://crypto-wallet-server.mock.beeceptor.com```
Endpoint: ```/api/v1/balance```
HTTP request: ```GET```

### 5. List all transactions done by the user.
Base URL: ```https://crypto-wallet-server.mock.beeceptor.com```
Endpoint: ```/api/v1/transactions```
HTTP request: ```GET```

### 6. Transfer 5 ETH to a recipient.
Base URL: ```https://crypto-wallet-server.mock.beeceptor.com```
Endpoint: ```/api/v1/transactions```
HTTP request: ```POST```
Request body  ```{
  "recipient_address": "0x1234567890ABCDEF",
  "amount": 5.0,
  "currency": "ETH"}```

### 7. Calculate transaction fees and return the estimated cost.
Base URL: ```https://crypto-wallet-server.mock.beeceptor.com```
Endpoint: ```/api/v1/transaction_fee```
HTTP request: ```POST```
Request body  ```{
  "amount": 2.5,
  "currency": "BTC",
  "recipient_address": "0x1234567890ABCDEF"}```
### 8. Get an object with all available currency exchange rates. 
Base URL: ```https://crypto-wallet-server.mock.beeceptor.com```
Endpoint: ```/api/v1/exchange_rates```
HTTP request: ```GET```

## Test Result
### Using Postman
![image](https://github.com/user-attachments/assets/a81667bb-f896-42af-ba96-f93a6982eefb)
![image](https://github.com/user-attachments/assets/53e70935-61f5-47c0-8df5-6e0702bda495)
![image](https://github.com/user-attachments/assets/88abf395-d86c-4bbb-8a3e-28c3e47c24e9)
### Using Cypress
Code
![image](https://github.com/user-attachments/assets/54a96500-2e85-4f24-abc7-5a9b35e02fbd)
![image](https://github.com/user-attachments/assets/d5c550c5-5105-4d31-a8cf-8fef0322a8cd)
## Getting started
1. Install [git](https://www.git-scm.com/) & [node.js](https://nodejs.org/en)  in your system.
2. Open your terminal
Paste this command
```bash
git clone https://github.com/janasagar/Evaluation-4.git
```
3. Open your IDE VS Code and navigate to downloaded folder.
4. Open terminal within your IDE
Paste this command
```bash
npx cypress open
```
5. Choose your Browser and start testing

Thank You :)





























