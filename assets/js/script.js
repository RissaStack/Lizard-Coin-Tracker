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

        // Format the percentage change to one decimal place
        change24h = change24h.toFixed(1);

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
        const currentFearLevel = result.fgi.now.value;
        document.querySelector(
            '.current-fear-level p'
        ).textContent = `Current fear level: ${currentFearLevel}`;
    } catch (error) {
        console.error(error);
    }
}

getFearAndGreedIndex();
