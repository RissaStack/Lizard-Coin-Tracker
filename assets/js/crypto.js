// major issue, you have to click watch list twice coming from lean more

document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('nav-cc-id');
    nav.addEventListener('click', function () {
        console.log('Hello World!');
    });
});

let watchListArr = JSON.parse(localStorage.getItem('watchListArr')) || [];
// let watchListArr = [];

const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h.7d&locale=en';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // Data from api is looped through and html elements are created and appended to dom (data from api is set to elements)
        console.log(data);
        function createTableRows() {
            for (let i = 0; i < data.length; i++) {
                const row = document.createElement('tr');

                const starData = document.createElement('td');
                starData.classList.add('star');
                if (watchListArr.includes(i)) {
                    starData.innerHTML = `<button class="filled" id="star-button-${i}"></button>`;
                } else {
                    starData.innerHTML = `<button class="unfilled" id="star-button-${i}"></button>`;
                }
                // starData.innerHTML = `<button class="unfilled" id="star-button-${i}"></button>`;
                const coinNumberData = document.createElement('td');
                coinNumberData.classList.add('coin-number');
                coinNumberData.textContent = i + 1;

                const actualCoinData = document.createElement('td');
                actualCoinData.classList.add('actual-coin');
                const coinInfo = document.createElement('div');
                coinInfo.classList.add('coin-info-div');
                const coinLogoData = document.createElement('img');
                coinLogoData.classList.add('coin-logo');
                coinLogoData.src = data[i].image;
                const coinNameDataSpan = document.createElement('span');
                coinNameDataSpan.classList.add('coin-name');
                coinNameDataSpan.textContent =
                    data[i].id.charAt(0).toUpperCase() + data[i].id.slice(1);
                const coinAbrvData = document.createElement('span');
                coinAbrvData.classList.add('coin-abrv');
                coinAbrvData.textContent = data[i].symbol;

                const actualPriceData = document.createElement('td');
                actualPriceData.classList.add('actual-price-td');
                const coinPriceData = document.createElement('div');
                coinPriceData.classList.add('coin-price-data-div');
                const coinPriceSpan = document.createElement('span');
                coinPriceSpan.classList.add('coin-price');
                coinPriceSpan.textContent = data[
                    i
                ].current_price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });

                const actual24hrPercentData = document.createElement('td');
                actual24hrPercentData.classList.add('actual-24hr-%');
                const coin24hrPercentData = document.createElement('div');
                coin24hrPercentData.classList.add('coin-24hr-percent-data-div');
                const coin24hrPercentSpan = document.createElement('span');
                coin24hrPercentSpan.classList.add('coin-percent-24hr');
                coin24hrPercentSpan.textContent = `${data[
                    i
                ].price_change_percentage_24h.toFixed(2)}\%`;
                if (data[i].price_change_percentage_24h.toFixed(2) > 0) {
                    coin24hrPercentSpan.style.color = 'green';
                } else {
                    coin24hrPercentSpan.style.color = 'red';
                }

                const actual7dData = document.createElement('td');
                actual7dData.classList.add('acutal-7d-%');
                const coin7dPercentDataDiv = document.createElement('div');
                coin7dPercentDataDiv.classList.add('coin-7d-percent-data-div');
                const coinPercent7dSpan = document.createElement('span');
                coinPercent7dSpan.classList.add('coin-percent-7d');
                coinPercent7dSpan.textContent = data[i].high_24h.toLocaleString(
                    'en-US',
                    { style: 'currency', currency: 'USD' }
                );

                const actual24hrVolumeData = document.createElement('td');
                actual24hrVolumeData.classList.add('actual-24hr-volume');
                const coin24hrVolumeDataDiv = document.createElement('div');
                coin24hrVolumeDataDiv.classList.add(
                    'coin-24hr-volume-data-div'
                );
                const coin24hrVolumeSpan = document.createElement('span');
                coin24hrVolumeSpan.classList.add('coin-24hr-volume');
                coin24hrVolumeSpan.textContent = data[i].ath.toLocaleString(
                    'en-US',
                    { style: 'currency', currency: 'USD' }
                );

                const actualMktCapData = document.createElement('td');
                actualMktCapData.classList.add('actual-mkt-cap');
                const coinMktCapDataDiv = document.createElement('div');
                coinMktCapDataDiv.classList.add('coin-mkt-cap-data-div');
                const coinMktCapSpan = document.createElement('span');
                coinMktCapSpan.classList.add('coin-mkt-cap');
                coinMktCapSpan.textContent = `${data[
                    i
                ].ath_change_percentage.toFixed(2)}\%`;
                if (data[i].ath_change_percentage.toFixed(2) > 0) {
                    coinMktCapSpan.style.color = 'green';
                } else {
                    coinMktCapSpan.style.color = 'red';
                }

                const sevenDayChartData = document.createElement('td');
                sevenDayChartData.classList.add('7-day-chart-td');
                const sevenDaychartImg = document.createElement('div');
                sevenDaychartImg.classList.add('sevenDayChart');
                const mktCapSpan = document.createElement('span');
                mktCapSpan.classList.add('mkt-cap-span');
                mktCapSpan.textContent = data[i].market_cap.toLocaleString(
                    'en-US',
                    {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    }
                );

                // Append
                const tbody = document.querySelector('tbody');

                tbody.appendChild(row);
                row.appendChild(starData);
                row.appendChild(coinNumberData);

                coinInfo.appendChild(coinLogoData);
                coinInfo.appendChild(coinNameDataSpan);
                coinInfo.appendChild(coinAbrvData);
                actualCoinData.appendChild(coinInfo);
                row.appendChild(actualCoinData);

                coinPriceData.appendChild(coinPriceSpan);
                actualPriceData.appendChild(coinPriceData);
                row.appendChild(actualPriceData);

                coin24hrPercentData.appendChild(coin24hrPercentSpan);
                actual24hrPercentData.appendChild(coin24hrPercentData);
                row.appendChild(actual24hrPercentData);

                coin7dPercentDataDiv.appendChild(coinPercent7dSpan);
                actual7dData.appendChild(coin7dPercentDataDiv);
                row.appendChild(actual7dData);

                coin24hrVolumeDataDiv.appendChild(coin24hrVolumeSpan);
                actual24hrVolumeData.appendChild(coin24hrVolumeDataDiv);
                row.appendChild(actual24hrVolumeData);

                coinMktCapDataDiv.appendChild(coinMktCapSpan);
                actualMktCapData.appendChild(coinMktCapDataDiv);
                row.appendChild(actualMktCapData);

                sevenDaychartImg.appendChild(mktCapSpan);
                sevenDayChartData.appendChild(sevenDaychartImg);
                row.appendChild(sevenDayChartData);

                // Styling
                const symbols = document.querySelectorAll('.coin-abrv');
                symbols[i].style.paddingLeft = '5px';
            }
        }
        createTableRows();

        // Avoids duplicates being added to wl, changes star icon and adds to local storage
        for (let i = 0; i < data.length; i++) {
            // Get star button for each item
            const starButton = document.getElementById(`star-button-${i}`);
            // Listen for when star is clicked, grabs whole row and checks if it has been clicked already to avoid duplicates
            starButton.addEventListener('click', function (event) {
                const row = event.target.parentNode.parentNode;
                console.log(row);

                const arrIndex =
                    row.getElementsByClassName('coin-number')[0].textContent -
                    1;
                // if its not apart of the watch list
                if (!watchListArr.includes(arrIndex)) {
                    starButton.classList.remove('unfilled');
                    starButton.classList.add('filled');
                    watchListArr.push(arrIndex);
                    localStorage.setItem(`star-button-${i}`, 'filled');
                    // console.log(watchListArr);
                } else if (watchListArr.includes(arrIndex)) {
                    starButton.classList.remove('filled');
                    starButton.classList.add('unfilled');
                    console.log(watchListArr);
                    let index = watchListArr.indexOf(arrIndex);
                    watchListArr.splice(index, 1);
                    localStorage.removeItem(`star-button-${i}`);
                    console.log(watchListArr);
                }
                // Save watchListArr to local storage
                localStorage.setItem(
                    'watchListArr',
                    JSON.stringify(watchListArr)
                );

                // Check if the star button is stored in local storage and update its class accordingly
                if (localStorage.getItem(`star-button-${i}`) === 'filled') {
                    starButton.classList.remove('unfilled');
                    starButton.classList.add('filled');
                }
            });
        }

        // When Watchlist is clicked current tables are cleared and watchListArr is looped through and appended
        const navWatchList = document.getElementById('nav-wl-id');
        navWatchList.addEventListener('click', function (event) {
            event.preventDefault();
            const tbody2 = document.querySelector('tbody');
            tbody2.innerHTML = ' ';
            // Creates watchlist
            for (let i = 0; i < watchListArr.length; i++) {
                const currentIndex = watchListArr[i];
                console.log(currentIndex);
                console.log(watchListArr.length);
                const row = document.createElement('tr');

                const starData = document.createElement('td');
                starData.classList.add('star');
                starData.innerHTML = `<button class="filled" id="star-button-${currentIndex}"></button>`;
                const coinNumberData = document.createElement('td');
                coinNumberData.classList.add('coin-number');
                coinNumberData.textContent = currentIndex + 1;

                const actualCoinData = document.createElement('td');
                actualCoinData.classList.add('actual-coin');
                const coinInfo = document.createElement('div');
                coinInfo.classList.add('coin-info-div');
                const coinLogoData = document.createElement('img');
                coinLogoData.classList.add('coin-logo');
                coinLogoData.src = data[currentIndex].image;
                const coinNameDataSpan = document.createElement('span');
                coinNameDataSpan.classList.add('coin-name');
                coinNameDataSpan.textContent =
                    data[currentIndex].id.charAt(0).toUpperCase() +
                    data[currentIndex].id.slice(1);
                const coinAbrvData = document.createElement('span');
                coinAbrvData.classList.add('coin-abrv');
                coinAbrvData.textContent = data[currentIndex].symbol;

                const actualPriceData = document.createElement('td');
                actualPriceData.classList.add('actual-price-td');
                const coinPriceData = document.createElement('div');
                coinPriceData.classList.add('coin-price-data-div');
                const coinPriceSpan = document.createElement('span');
                coinPriceSpan.classList.add('coin-price');
                coinPriceSpan.textContent = data[
                    currentIndex
                ].current_price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });

                const actual24hrPercentData = document.createElement('td');
                actual24hrPercentData.classList.add('actual-24hr-%');
                const coin24hrPercentData = document.createElement('div');
                coin24hrPercentData.classList.add('coin-24hr-percent-data-div');
                const coin24hrPercentSpan = document.createElement('span');
                coin24hrPercentSpan.classList.add('coin-percent-24hr');
                coin24hrPercentSpan.textContent = `${data[
                    currentIndex
                ].price_change_percentage_24h.toFixed(2)}\%`;
                if (
                    data[currentIndex].price_change_percentage_24h.toFixed(2) >
                    0
                ) {
                    coin24hrPercentSpan.style.color = 'green';
                } else {
                    coin24hrPercentSpan.style.color = 'red';
                }

                const actual7dData = document.createElement('td');
                actual7dData.classList.add('acutal-7d-%');
                const coin7dPercentDataDiv = document.createElement('div');
                coin7dPercentDataDiv.classList.add('coin-7d-percent-data-div');
                const coinPercent7dSpan = document.createElement('span');
                coinPercent7dSpan.classList.add('coin-percent-7d');
                coinPercent7dSpan.textContent = data[
                    currentIndex
                ].high_24h.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });

                const actual24hrVolumeData = document.createElement('td');
                actual24hrVolumeData.classList.add('actual-24hr-volume');
                const coin24hrVolumeDataDiv = document.createElement('div');
                coin24hrVolumeDataDiv.classList.add(
                    'coin-24hr-volume-data-div'
                );
                const coin24hrVolumeSpan = document.createElement('span');
                coin24hrVolumeSpan.classList.add('coin-24hr-volume');
                coin24hrVolumeSpan.textContent = data[
                    currentIndex
                ].ath.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                });

                const actualMktCapData = document.createElement('td');
                actualMktCapData.classList.add('actual-mkt-cap');
                const coinMktCapDataDiv = document.createElement('div');
                coinMktCapDataDiv.classList.add('coin-mkt-cap-data-div');
                const coinMktCapSpan = document.createElement('span');
                coinMktCapSpan.classList.add('coin-mkt-cap');
                coinMktCapSpan.textContent = `${data[
                    currentIndex
                ].ath_change_percentage.toFixed(2)}\%`;
                if (data[currentIndex].ath_change_percentage.toFixed(2) > 0) {
                    coinMktCapSpan.style.color = 'green';
                } else {
                    coinMktCapSpan.style.color = 'red';
                }

                const sevenDayChartData = document.createElement('td');
                sevenDayChartData.classList.add('7-day-chart-td');
                const sevenDaychartImg = document.createElement('div');
                sevenDaychartImg.classList.add('sevenDayChart');
                const mktCapSpan = document.createElement('span');
                mktCapSpan.classList.add('mkt-cap-span');
                mktCapSpan.textContent = data[
                    currentIndex
                ].market_cap.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                });

                // Append
                const tbody = document.querySelector('tbody');

                tbody.appendChild(row);
                row.appendChild(starData);
                row.appendChild(coinNumberData);

                coinInfo.appendChild(coinLogoData);
                coinInfo.appendChild(coinNameDataSpan);
                coinInfo.appendChild(coinAbrvData);
                actualCoinData.appendChild(coinInfo);
                row.appendChild(actualCoinData);

                coinPriceData.appendChild(coinPriceSpan);
                actualPriceData.appendChild(coinPriceData);
                row.appendChild(actualPriceData);

                coin24hrPercentData.appendChild(coin24hrPercentSpan);
                actual24hrPercentData.appendChild(coin24hrPercentData);
                row.appendChild(actual24hrPercentData);

                coin7dPercentDataDiv.appendChild(coinPercent7dSpan);
                actual7dData.appendChild(coin7dPercentDataDiv);
                row.appendChild(actual7dData);

                coin24hrVolumeDataDiv.appendChild(coin24hrVolumeSpan);
                actual24hrVolumeData.appendChild(coin24hrVolumeDataDiv);
                row.appendChild(actual24hrVolumeData);

                coinMktCapDataDiv.appendChild(coinMktCapSpan);
                actualMktCapData.appendChild(coinMktCapDataDiv);
                row.appendChild(actualMktCapData);

                sevenDaychartImg.appendChild(mktCapSpan);
                sevenDayChartData.appendChild(sevenDaychartImg);
                row.appendChild(sevenDayChartData);

                // Styling

                const symbols = document.querySelectorAll('.coin-abrv');
                console.log(symbols);
                console.log(symbols[currentIndex]);
                // symbols[currentIndex].style.paddingLeft = '5px';

                const starButton = document.getElementById(
                    `star-button-${currentIndex}`
                );
                starButton.addEventListener('click', function (event) {
                    const row = event.target.parentNode.parentNode;
                    console.log(event.target);
                    console.log(row);

                    const arrIndex =
                        row.getElementsByClassName('coin-number')[0]
                            .textContent - 1;
                    // if its not apart of the watch list
                    if (!watchListArr.includes(arrIndex)) {
                        starButton.classList.remove('unfilled');
                        starButton.classList.add('filled');
                        watchListArr.push(arrIndex);
                        // console.log(watchListArr);
                    } else if (watchListArr.includes(arrIndex)) {
                        starButton.classList.remove('filled');
                        starButton.classList.add('unfilled');
                        console.log(watchListArr);
                        let index = watchListArr.indexOf(arrIndex);
                        watchListArr.splice(index, 1);
                        console.log(watchListArr);
                        row.remove();
                        // code snippet here
                    }

                    localStorage.setItem(
                        'watchListArr',
                        JSON.stringify(watchListArr)
                    );
                });
            }
        });

        // Bugged needs fix
        // Generates content when click on Cryptocurrencies nav item
        const navCc = document.getElementById('nav-cc-id');
        navCc.addEventListener('click', function (event) {
            event.preventDefault();
            const tbody2 = document.querySelector('tbody');
            tbody2.innerHTML = ' ';
            createTableRows();
            location.reload();
        });
    });
