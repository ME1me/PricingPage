const checkbox = document.getElementById("checkbox");
const entertainment = document.getElementById("entertainment");
const basic = document.getElementById("basic");
const standard = document.getElementById("standard");
const professional = document.getElementById("professional");
const infinity = document.getElementById("infinity");




let isAnnually = true; 

checkbox.addEventListener("click", () => {
    isAnnually = !isAnnually;
    updatePrices();
});

currencyDropdown.addEventListener("change", () => {
    updatePrices();
});

function updatePrices() {
    const currency = currencyDropdown.value;

    const basePrices = {
        entertainment: isAnnually ? 999 : 10999,
        basic: isAnnually ? 499 : 4999,
        professional: isAnnually ? 1498 : 15999,
        standard: isAnnually ? 799 : 8999,
    };

    entertainment.textContent = getFormattedPrice(currency, basePrices.entertainment);
    basic.textContent = getFormattedPrice(currency, basePrices.basic);
    professional.textContent = getFormattedPrice(currency, basePrices.professional);
    standard.textContent = getFormattedPrice(currency, basePrices.standard);
}

function getFormattedPrice(currency, amount) {
    const conversionRate = {
        INR: 1,
        USD: 0.014, 
        EUR: 0.011
    };

    const convertedAmount = amount * conversionRate[currency];
    return `${currency}${convertedAmount.toFixed(2)}`;
}

updatePrices();