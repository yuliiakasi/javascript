//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400


function currencyExchange (sumUAH, currencyValues, exchangeCurrency) {
  for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
         return  sumUAH / currencyValue.value;
        }
  }
  return 0;
}



