// URL for the Coingecko API
let API_URL = 'https://api.coingecko.com/api/v3/global';

// Create a div to display the result
let resultDiv = document.createElement('div');
resultDiv.id = 'result';
document.querySelector('.result').appendChild(resultDiv);

// Fetch data from the API
fetch(API_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Get the 24-hour percentage change for the global market
        let change24h = data.data.market_cap_change_percentage_24h_usd;

        // Determine whether the market is up or down
        let upOrDown;
        if (change24h >= 0) {
            upOrDown = 'up';
        } else {
            upOrDown = 'down';
            change24h = -change24h;
        }

        // Format the percentage change to two decimal place
        change24h = change24h.toFixed(2);

        // Display the result on the page
        let resultText =
            'In the past 24 hours the market is ' +
            upOrDown +
            " <span class='percentage'>" +
            change24h +
            '%</span>';
        resultDiv.innerHTML = resultText;

        // Add CSS styling based on upOrDown
        if (upOrDown === 'up') {
            resultDiv.querySelector('.percentage').style.color = 'green';
        } else {
            resultDiv.querySelector('.percentage').style.color = 'red';
        }
    })
    .catch(function (error) {
        console.error(error);
    });

// Only show modal if input has '@', and clear input upon successful submission.
$(document).ready(function () {
    $('#email-button').click(function () {
        var email = $('#email-input').val();
        if (email.includes('@')) {
            $('#success-modal').modal('show');
            $('#email-input').val('');
        }
    });
});

// Fear and Greed Api
// Define the API endpoint and options for making the request
const url = 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '29c57de282mshdd469773ca73b8ap10523ajsn7c2115877b65',
        'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com',
    },
};
// Asynchronously fetch the fear and greed index data from the API and update the DOM with the current fear level
async function getFearAndGreedIndex() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        console.log(result.fgi.now.value);
        const currentFearLevelNum = result.fgi.now.value;
        const currentFearLevelWord = result.fgi.now.valueText;
        document.querySelector(
            '#current-fear-level .level-value'
        ).textContent = `${currentFearLevelWord} - ${currentFearLevelNum}`;

        const monthAgoFearLevelNum = result.fgi.oneMonthAgo.value;
        const monthAgoFearLevelWord = result.fgi.oneMonthAgo.valueText;
        document.querySelector(
            '#month-ago-fear-level .level-value'
        ).textContent = `${monthAgoFearLevelWord} - ${monthAgoFearLevelNum}`;

        const yearAgoFearLevelNum = result.fgi.oneYearAgo.value;
        const yearAgoFearLevelWord = result.fgi.oneYearAgo.valueText;
        document.querySelector(
            '#year-ago-fear-level .level-value'
        ).textContent = `${yearAgoFearLevelWord} - ${yearAgoFearLevelNum}`;
    } catch (error) {
        console.error(error);
    }
}

getFearAndGreedIndex();

// coingecko api for top 6 cryptocurrencies by market cap
fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,dogecoin,chainlink,binancecoin&order=market_cap_desc&per_page=6&page=1&sparkline=false'
)
    .then((response) => response.json())
    .then((data) => {
        // manipulate data here
        console.log(data);

        // Btc image
        btcImgS3.src = data[0].image;
        // 24hr percentage
        if (data[0].price_change_percentage_24h > 0) {
            document.querySelector('#btcPriceChangePercentage').style.color =
                'green';
        } else if (data[0].price_change_percentage_24h === 0) {
            document.querySelector('#btcPriceChangePercentage').style.color =
                'black';
        } else {
            document.querySelector('#btcPriceChangePercentage').style.color =
                'red';
        }
        document.querySelector(
            '#btcPriceChangePercentage'
        ).textContent = `${data[0].price_change_percentage_24h.toFixed(2)}%`;
        // Btc current price
        document.querySelector(
            '#btcCardPrice'
        ).textContent = `$${data[0].current_price.toLocaleString()}`;

        // Ethereum image
        ethImgS3.src = data[1].image;
        // 24hr percentage
        if (data[1].price_change_percentage_24h > 0) {
            document.querySelector('#ethPriceChangePercentage').style.color =
                'green';
        } else if (data[1].price_change_percentage_24h === 0) {
            document.querySelector('#ethPriceChangePercentage').style.color =
                'black';
        } else {
            document.querySelector('#ethPriceChangePercentage').style.color =
                'red';
        }
        document.querySelector(
            '#ethPriceChangePercentage'
        ).textContent = `${data[1].price_change_percentage_24h.toFixed(2)}%`;
        // Eth current price
        document.querySelector(
            '#ethCardPrice'
        ).textContent = `$${data[1].current_price.toLocaleString()}`;

        // Bnb image
        bnbImgS3.src = data[2].image;
        // 24hr percentage
        if (data[2].price_change_percentage_24h > 0) {
            document.querySelector('#bnbPriceChangePercentage').style.color =
                'green';
        } else if (data[2].price_change_percentage_24h === 0) {
            document.querySelector('#bnbPriceChangePercentage').style.color =
                'black';
        } else {
            document.querySelector('#bnbPriceChangePercentage').style.color =
                'red';
        }
        document.querySelector(
            '#bnbPriceChangePercentage'
        ).textContent = `${data[2].price_change_percentage_24h.toFixed(2)}%`;
        // Bnb current price
        document.querySelector(
            '#bnbCardPrice'
        ).textContent = `$${data[2].current_price.toLocaleString()}`;

        // ada image
        adaImgS3.src = data[3].image;
        // 24hr percentage
        if (data[3].price_change_percentage_24h > 0) {
            document.querySelector('#adaPriceChangePercentage').style.color =
                'green';
        } else if (data[3].price_change_percentage_24h === 0) {
            document.querySelector('#adaPriceChangePercentage').style.color =
                'black';
        } else {
            document.querySelector('#adaPriceChangePercentage').style.color =
                'red';
        }
        document.querySelector(
            '#adaPriceChangePercentage'
        ).textContent = `${data[3].price_change_percentage_24h.toFixed(2)}%`;
        // ada current price
        document.querySelector(
            '#adaCardPrice'
        ).textContent = `$${data[3].current_price.toLocaleString()}`;

        // doge image
        dogeImgS3.src = data[4].image;
        // 24hr percentage
        if (data[4].price_change_percentage_24h > 0) {
            document.querySelector('#dogePriceChangePercentage').style.color =
                'green';
        } else if (data[4].price_change_percentage_24h === 0) {
            document.querySelector('#dogePriceChangePercentage').style.color =
                'black';
        } else {
            document.querySelector('#dogePriceChangePercentage').style.color =
                'red';
        }
        document.querySelector(
            '#dogePriceChangePercentage'
        ).textContent = `${data[4].price_change_percentage_24h.toFixed(2)}%`;
        // Doge current price
        document.querySelector(
            '#dogeCardPrice'
        ).textContent = `$${data[4].current_price.toLocaleString()}`;

        // link image
        linkImgS3.src = data[5].image;
        // 24hr percentage
        if (data[5].price_change_percentage_24h > 0) {
            document.querySelector('#linkPriceChangePercentage').style.color =
                'green';
        } else if (data[5].price_change_percentage_24h === 0) {
            document.querySelector('#linkPriceChangePercentage').style.color =
                'black';
        } else {
            document.querySelector('#linkPriceChangePercentage').style.color =
                'red';
        }
        document.querySelector(
            '#linkPriceChangePercentage'
        ).textContent = `${data[5].price_change_percentage_24h.toFixed(2)}%`;
        // Link current price
        document.querySelector(
            '#linkCardPrice'
        ).textContent = `$${data[5].current_price.toLocaleString()}`;
    })
    .catch((error) => console.error(error));
