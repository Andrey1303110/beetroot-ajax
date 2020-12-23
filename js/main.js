const NB_CURRENCY_RATES_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

function showRate(currencyCode, ratesList) {
  for (let i = 0; i < ratesList.length; i++) {
    if (ratesList[i].cc == currencyCode) {
      alert(`${ratesList[i].txt}: ${ratesList[i].rate}`);
      break;
    }
  }
}

fetch(NB_CURRENCY_RATES_URL)
  .then((response) => {
    return response.json();
  })
  .then((ratesList) => {
    console.log(ratesList);
    //document.write(JSON.stringify(ratesList));

    showRate('CZK', ratesList);
  })
  .catch(e => {
    console.log(e);
  });

console.log("Finished!");
