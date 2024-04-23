#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    'USD': 1,
    'EUR': 0.9,
    'CAD': 1.3,
    'AUD': 1.65,
    'PKR': 280,
};
let answer = await inquirer.prompt([
    {
        name: 'from',
        type: "list",
        message: 'Select your "from" currency',
        choices: ['USD', 'EUR', 'CAD', 'AUD', 'PKR']
    },
    {
        name: 'to',
        type: "list",
        message: 'Select your "to" currency',
        choices: ['USD', 'EUR', 'CAD', 'AUD', 'PKR']
    },
    {
        name: 'amount',
        type: 'input',
        message: 'Enter your amount to convert'
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount2 = answer.amount;
let baseCurrency = amount2 / fromAmount;
let convertedAmount = baseCurrency * toAmount;
console.log(`Your converted amount is :${convertedAmount.toFixed(2)}`);
