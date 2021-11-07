import * as fs from 'fs'
import fetch from 'node-fetch'

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=38221b8e579243d7ba33d90cb77f9891';

async function currencyConvertor(cur1, amount, cur2) {
    const exchangeRates = await getExchangeRate(cur1, cur2);
    console.log(amount * exchangeRates[cur2]/exchangeRates[cur1])
}

async function getExchangeRate(cur1, cur2) {
    return await fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data.rates
        })
        .catch(err => err)
}

currencyConvertor('USD', 50, 'BYN')



