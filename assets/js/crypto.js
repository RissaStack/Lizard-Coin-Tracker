const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h.7d&locale=en';

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(myFunction);

        function myFunction(item) {
            console.log(item.id);

            const row = document.createElement('tr');

            const starData = document.createElement('td');
            starData.classList.add('star');

            const coinNumberData = document.createElement('td');
            coinNumberData.classList.add('coin-number');

            const actualCoinData = document.createElement('td');
            actualCoinData.classList.add('actual-coin');
            const coinInfo = document.createElement('div');
            coinInfo.classList.add('coin-info-div');
            const coinLogoData = document.createElement('img');
            coinLogoData.classList.add('coin-logo');
            const coinNameDataSpan = document.createElement('span');
            coinNameDataSpan.classList.add('coin-name');
            const coinAbrvData = document.createElement('span');
            coinAbrvData.classList.add('coin-abrv');

            const actualPriceData = document.createElement('td');
            actualPriceData.classList.add('actual-price-td');
            const coinPriceData = document.createElement('div');
            coinPriceData.classList.add('coin-price-data-div');
            const coinPriceSpan = document.createElement('span');
            coinPriceSpan.classList.add('coin-price');

            const actual24hrPercentData = document.createElement('td');
            actual24hrPercentData.classList.add('actual-24hr-%');
            const coin24hrPercentData = document.createElement('div');
            coin24hrPercentData.classList.add('coin-24hr-percent-data-div');
            const coin24hrPercentSpan = document.createElement('span');
            coin24hrPercentSpan.classList.add('coin-percent-24hr');

            const actual7dData = document.createElement('td');
            actual7dData.classList.add('acutal-7d-%');
            const coin7dPercentDataDiv = document.createElement('div');
            coin7dPercentDataDiv.classList.add('coin-7d-percent-data-div');
            const coinPercent7dSpan = document.createElement('span');
            coinPercent7dSpan.classList.add('coin-percent-7d');

            const actual24hrVolumeData = document.createElement('td');
            actual24hrVolumeData.classList.add('actual-24hr-volume');
            const coin24hrVolumeDataDiv = document.createElement(
                'coin-24hr-volume-data-div'
            );
            coin24hrVolumeDataDiv.classList.add('coin-24hr-volume-data-div');
            const coin24hrVolumeSpan = document.createElement('span');
            coin24hrVolumeSpan.classList.add('coin-24hr-volume');

            const actualMktCapData = document.createElement('td');
            actualMktCapData.classList.add('actual-mkt-cap');
            const coinMktCapDataDiv = document.createElement('div');
            coinMktCapDataDiv.classList.add('coin-mkt-cap-data-div');
            const coinMktCapSpan = document.createElement('span');
            coinMktCapSpan.classList.add('coin-mkt-cap');

            const sevenDayChartData = document.createElement('td');
            sevenDayChartData.classList.add('7-day-chart-td');
            const sevenDaychartImg = document.createElement('img');
            sevenDaychartImg.classList.add('sevenDayChart');

            // append
            row.appendChild(starData);

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

        // console.log(data);
    });
