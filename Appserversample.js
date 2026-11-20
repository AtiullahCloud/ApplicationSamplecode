const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Azure App Service Test</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background-color: #f4f4f4;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    width: 500px;
                    margin: auto;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #0078D4;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Azure App Service Test</h1>
                <p>Application deployed successfully!</p>
                <p>Current Time: ${new Date()}</