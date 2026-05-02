const apiKey = '099623063901339a4eb9d39b';

const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const btn = document.getElementById('btn');
let data = null; //сделал данные глобальными чтобы работала кнопка 
async function currency() {
    const response = await fetch(apiUrl);
    data = await response.json(); // <- тут убралась const т к data стала лобальной переменной
    console.log(data, "data");

    document.getElementById("RUB").innerHTML = data.conversion_rates['RUB'] + " &#8381;";
    document.getElementById("EUR").innerHTML = data.conversion_rates['EUR'] + " &#8364;";
    document.getElementById("CNY").innerHTML = data.conversion_rates['CNY'] + " &#165;";
    document.getElementById("KZT").innerHTML = data.conversion_rates['KZT'] + " &#8376;";

};

currency();

btn.addEventListener('click', function(event){
    event.preventDefault();
    const fromCurrency = document.getElementById('currency-welcome-input').value;
    const toCurrency = document.getElementById('currency-welcome-output').value;
    const inputNum = document.querySelector('.transfer-input').value;
    const outputNum = document.querySelector('.transfer-output');
    if(fromCurrency == 'USD' && toCurrency == 'RUB'){
        outputNum.value = inputNum * data.conversion_rates['RUB'];
    }
    else if(fromCurrency == 'USD' && toCurrency == 'EUR'){
        outputNum.value = inputNum * data.conversion_rates['EUR'];
    }
    else if(fromCurrency == 'USD' && toCurrency == 'CNY'){
        outputNum.value = inputNum * data.conversion_rates['CNY'];
    }
    else if(fromCurrency == 'USD' && toCurrency == 'KZT'){
        outputNum.value = inputNum * data.conversion_rates['KZT'];
    }
    else if(fromCurrency == 'RUB' && toCurrency == 'USD'){
        outputNum.value = inputNum / data.conversion_rates['RUB'];
    }
    else if(fromCurrency == 'RUB' && toCurrency == 'EUR'){
        outputNum.value = (inputNum / data.conversion_rates['RUB']) * data.conversion_rates['EUR'];
    }
    else if(fromCurrency == 'RUB' && toCurrency == 'CNY'){
        outputNum.value = (inputNum / data.conversion_rates['RUB']) * data.conversion_rates['CNY'];
    }
    else if(fromCurrency == 'RUB' && toCurrency == 'KZT'){
        outputNum.value = (inputNum / data.conversion_rates['RUB']) * data.conversion_rates['KZT'];
    }
    else if(fromCurrency == 'EUR' && toCurrency == 'USD'){
        outputNum.value = inputNum / data.conversion_rates['EUR'];
    }
    else if(fromCurrency == 'EUR' && toCurrency == 'RUB'){
        outputNum.value = (inputNum / data.conversion_rates['EUR']) * data.conversion_rates['RUB'];
    }
    else if(fromCurrency == 'EUR' && toCurrency == 'CNY'){
        outputNum.value = (inputNum / data.conversion_rates['EUR']) * data.conversion_rates['CNY'];
    }
    else if(fromCurrency == 'EUR' && toCurrency == 'KZT'){
        outputNum.value = (inputNum / data.conversion_rates['EUR']) * data.conversion_rates['KZT'];
    }
    else if(fromCurrency == 'CNY' && toCurrency == 'USD'){
        outputNum.value = inputNum / data.conversion_rates['CNY'];
    }
    else if(fromCurrency == 'CNY' && toCurrency == 'RUB'){
        outputNum.value = (inputNum / data.conversion_rates['CNY']) * data.conversion_rates['RUB'];
    }
    else if(fromCurrency == 'CNY' && toCurrency == 'EUR'){
        outputNum.value = (inputNum / data.conversion_rates['CNY']) * data.conversion_rates['EUR'];
    }
    else if(fromCurrency == 'CNY' && toCurrency == 'KZT'){
        outputNum.value = (inputNum / data.conversion_rates['CNY']) * data.conversion_rates['KZT'];
    }
    else if(fromCurrency == 'KZT' && toCurrency == 'USD'){
        outputNum.value = inputNum / data.conversion_rates['KZT'];
    }
    else if(fromCurrency == 'KZT' && toCurrency == 'RUB'){
        outputNum.value = (inputNum / data.conversion_rates['KZT']) * data.conversion_rates['RUB'];
    }
    else if(fromCurrency == 'KZT' && toCurrency == 'EUR'){
        outputNum.value = (inputNum / data.conversion_rates['KZT']) * data.conversion_rates['EUR'];
    }
    else if(fromCurrency == 'KZT' && toCurrency == 'CNY'){
        outputNum.value = (inputNum / data.conversion_rates['KZT']) * data.conversion_rates['CNY'];
    }
});

