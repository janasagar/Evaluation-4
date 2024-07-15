/// <reference types="cypress" />


describe('Beeceptor API testsuite', () => {
    const burl = "https://crypto-wallet-server.mock.beeceptor.com";
    let from_wallet;
    let token;
    const username = "user123";

    // Make an API request to Register a user
    it('Register a user', () => {
        cy.request({
            method: "POST",
            url: burl + "/api/v1/register",
            headers: {
                accept: "application/json"
            },
            body: {
                "username": username,
                "password": "securepassword",
                "email": "user@example.com"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            const res = response.body;
            expect(res.username).to.equal(username);
            cy.log("Registreation successful: "+JSON.stringify(response.body));

        })
        
    });

    // Make an API request to Login and generate a session token
    it('Login and generate a session token', () => {
        cy.request({
            method: "POST",
            url: burl + "/api/v1/login",
            headers: {
                accept: "application/json"
            },
            body: {
                "username": username,
                "password": "securepassword"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            const res = response.body;
            token = res.access_token;
            expect(res.token_type).to.equal("bearer")
            cy.log("Token is: "+res.access_token);
            cy.log(JSON.stringify(response.body));
        })
        
    });
    // Make an API request to Retrieve the wallet balance
    it('Retrieve the wallet balance', () => {
        cy.request({
            method: "GET",
            url: burl + "/api/v1/balance",
            headers: {
                accept: "application/json"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            const res = response.body;
            cy.log("Your balance is: "+res.balance);
            cy.log(JSON.stringify(response.body));
        })    
        
    });

    //Make an API request to List all the transactions
    it('List all the transactions', () => {
        cy.request({
            method: "GET",
            url: burl + "/api/v1/transactions",
            headers: {
                accept: "application/json"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            const res = response.body.transactions;
            from_wallet = res[0].from_wallet; 
            cy.log("Fetched order ID: " + res[0].from_wallet); 
            cy.log(JSON.stringify(response.body));
        })
        
    });

    // Make an API request to Transfer 5 ETH to a recipient
    it('Transfer 5 ETH to a recipient', () => {
        cy.request({
            method: "POST",
            url: burl + "/api/v1/transactions",
            headers: {
                accept: "application/json"
            },
            body: {
                "recipient_address": from_wallet,
                "amount": 5.0,
                "currency": "ETH"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            const res = response.body;
            expect(res.amount).to.equal(5);
            cy.log("Transfer successful")
            cy.log(JSON.stringify(response.body));
        })
        
    });
    
    // Make an API request to Calculate transaction fees and return estimated cost
    it('Calculate transaction fees and return estimated cost', () => {
        cy.request({
            method: "POST",
            url: burl + "/api/v1/transaction_fee",
            headers: {
                accept: "application/json"
            },
            body: {
               "amount": 2.5,
               "currency": "BTC",
               "recipient_address": from_wallet 
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            const res = response.body;
            cy.log("Fee is: "+ res.fee);
            cy.log(JSON.stringify(response.body));
        })
        
    });

    // Make an API request to Get all available currency exchange rates
    it('Get all available currency exchange rates', () => {
        cy.request({
            method: "GET",
            url: burl + "/api/v1/exchange_rates",
            headers: {
                accept: "application/json"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200);
            cy.log(JSON.stringify(response.body));
        })
        
    });
    
});