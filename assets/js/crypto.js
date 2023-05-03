let watchListArr = [];

const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h.7d&locale=en';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            const row = document.createElement('tr');

            const starData = document.createElement('td');
            starData.classList.add('star');
            starData.innerHTML = `<button id="star-button-${i}"><img src="" alt=""></button>`;
            const coinNumberData = document.createElement('td');
            coinNumberData.classList.add('coin-number');
            coinNumberData.textContent = i + 1;

            const actualCoinData = document.createElement('td');
            actualCoinData.classList.add('actual-coin');
            const coinInfo = document.createElement('div');
            coinInfo.classList.add('coin-info-div');
            const coinLogoData = document.createElement('img');
            coinLogoData.classList.add('coin-logo');
            const coinNameDataSpan = document.createElement('span');
            coinNameDataSpan.classList.add('coin-name');
            coinNameDataSpan.textContent = data[i].id;
            const coinAbrvData = document.createElement('span');
            coinAbrvData.classList.add('coin-abrv');
            coinAbrvData.textContent = data[i].symbol;

            const actualPriceData = document.createElement('td');
            actualPriceData.classList.add('actual-price-td');
            const coinPriceData = document.createElement('div');
            coinPriceData.classList.add('coin-price-data-div');
            const coinPriceSpan = document.createElement('span');
            coinPriceSpan.classList.add('coin-price');
            coinPriceSpan.textContent = data[i].current_price;

            const actual24hrPercentData = document.createElement('td');
            actual24hrPercentData.classList.add('actual-24hr-%');
            const coin24hrPercentData = document.createElement('div');
            coin24hrPercentData.classList.add('coin-24hr-percent-data-div');
            const coin24hrPercentSpan = document.createElement('span');
            coin24hrPercentSpan.classList.add('coin-percent-24hr');
            coin24hrPercentSpan.textContent =
                data[i].price_change_percentage_24h;

            const actual7dData = document.createElement('td');
            actual7dData.classList.add('acutal-7d-%');
            const coin7dPercentDataDiv = document.createElement('div');
            coin7dPercentDataDiv.classList.add('coin-7d-percent-data-div');
            const coinPercent7dSpan = document.createElement('span');
            coinPercent7dSpan.classList.add('coin-percent-7d');
            coinPercent7dSpan.textContent = data[i].ath;

            const actual24hrVolumeData = document.createElement('td');
            actual24hrVolumeData.classList.add('actual-24hr-volume');
            const coin24hrVolumeDataDiv = document.createElement('div');
            coin24hrVolumeDataDiv.classList.add('coin-24hr-volume-data-div');
            const coin24hrVolumeSpan = document.createElement('span');
            coin24hrVolumeSpan.classList.add('coin-24hr-volume');
            coin24hrVolumeSpan.textContent = data[i].total_volume;

            const actualMktCapData = document.createElement('td');
            actualMktCapData.classList.add('actual-mkt-cap');
            const coinMktCapDataDiv = document.createElement('div');
            coinMktCapDataDiv.classList.add('coin-mkt-cap-data-div');
            const coinMktCapSpan = document.createElement('span');
            coinMktCapSpan.classList.add('coin-mkt-cap');
            coinMktCapSpan.textContent = data[i].market_cap;

            const sevenDayChartData = document.createElement('td');
            sevenDayChartData.classList.add('7-day-chart-td');
            const sevenDaychartImg = document.createElement('img');
            sevenDaychartImg.classList.add('sevenDayChart');

            const tbody = document.querySelector('tbody');

            // append
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

            sevenDayChartData.appendChild(sevenDaychartImg);
            row.appendChild(sevenDayChartData);
        }

        for (let i = 0; i < data.length; i++) {
            const button = document.getElementById(`star-button-${i}`);
            // console.log(button);
            let obj = [];

            button.addEventListener('click', function (event) {
                const row = event.target.parentNode.parentNode;
                const arrIndex =
                    row.getElementsByClassName('coin-number')[0].textContent -
                    1;
                // console.log(arrIndex);

                if (!watchListArr.includes(arrIndex)) {
                    watchListArr.push(arrIndex);
                    // console.log(watchListArr);
                }
            });
        }

        const navWatchList = document.getElementById('nav-item-id');
        navWatchList.addEventListener('click', function (event) {
            event.preventDefault();
            const tbody2 = document.querySelector('tbody');
            tbody2.innerHTML = ' ';

            console.log('test');
            for (let i = 0; i < watchListArr.length; i++) {
                console.log('test2')
                const currentIndex = watchListArr[i];
                console.log(currentIndex);
                const row = document.createElement('tr');

                const starData = document.createElement('td');
                starData.classList.add('star');
                starData.innerHTML = `<button id="star-button-${currentIndex}"><img src="./assets/images/star.svg" alt=""></button>`;
                const coinNumberData = document.createElement('td');
                coinNumberData.classList.add('coin-number');
                coinNumberData.textContent = currentIndex + 1;

                const actualCoinData = document.createElement('td');
                actualCoinData.classList.add('actual-coin');
                const coinInfo = document.createElement('div');
                coinInfo.classList.add('coin-info-div');
                const coinLogoData = document.createElement('img');
                coinLogoData.classList.add('coin-logo');
                const coinNameDataSpan = document.createElement('span');
                coinNameDataSpan.classList.add('coin-name');
                coinNameDataSpan.textContent = data[currentIndex].id;
                const coinAbrvData = document.createElement('span');
                coinAbrvData.classList.add('coin-abrv');
                coinAbrvData.textContent = data[currentIndex].symbol;

                const actualPriceData = document.createElement('td');
                actualPriceData.classList.add('actual-price-td');
                const coinPriceData = document.createElement('div');
                coinPriceData.classList.add('coin-price-data-div');
                const coinPriceSpan = document.createElement('span');
                coinPriceSpan.classList.add('coin-price');
                coinPriceSpan.textContent = data[currentIndex].current_price;

                const actual24hrPercentData = document.createElement('td');
                actual24hrPercentData.classList.add('actual-24hr-%');
                const coin24hrPercentData = document.createElement('div');
                coin24hrPercentData.classList.add('coin-24hr-percent-data-div');
                const coin24hrPercentSpan = document.createElement('span');
                coin24hrPercentSpan.classList.add('coin-percent-24hr');
                coin24hrPercentSpan.textContent =
                    data[currentIndex].price_change_percentage_24h;

                const actual7dData = document.createElement('td');
                actual7dData.classList.add('acutal-7d-%');
                const coin7dPercentDataDiv = document.createElement('div');
                coin7dPercentDataDiv.classList.add('coin-7d-percent-data-div');
                const coinPercent7dSpan = document.createElement('span');
                coinPercent7dSpan.classList.add('coin-percent-7d');
                coinPercent7dSpan.textContent = data[currentIndex].ath;

                const actual24hrVolumeData = document.createElement('td');
                actual24hrVolumeData.classList.add('actual-24hr-volume');
                const coin24hrVolumeDataDiv = document.createElement('div');
                coin24hrVolumeDataDiv.classList.add(
                    'coin-24hr-volume-data-div'
                );
                const coin24hrVolumeSpan = document.createElement('span');
                coin24hrVolumeSpan.classList.add('coin-24hr-volume');
                coin24hrVolumeSpan.textContent = data[currentIndex].total_volume;

                const actualMktCapData = document.createElement('td');
                actualMktCapData.classList.add('actual-mkt-cap');
                const coinMktCapDataDiv = document.createElement('div');
                coinMktCapDataDiv.classList.add('coin-mkt-cap-data-div');
                const coinMktCapSpan = document.createElement('span');
                coinMktCapSpan.classList.add('coin-mkt-cap');
                coinMktCapSpan.textContent = data[currentIndex].market_cap;

                const sevenDayChartData = document.createElement('td');
                sevenDayChartData.classList.add('7-day-chart-td');
                const sevenDaychartImg = document.createElement('img');
                sevenDaychartImg.classList.add('sevenDayChart');

                const tbody = document.querySelector('tbody');

                // append
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

                sevenDayChartData.appendChild(sevenDaychartImg);
                row.appendChild(sevenDayChartData);
            }
        });
    });
