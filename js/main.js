        let getRandomNumber = size => {
            return Math.floor(Math.random() * size);
        };

        let getDistance = (event, target) => {
            let diffX = event.offsetX - target.x;
            let diffY = event.offsetY - target.y;
            return Math.sqrt(diffX ** 2 + diffY ** 2);
        };

        let getDistanceHint = distance => {
            if (distance < 10) {
                return "Обожжёшься!";
            } else if (distance < 20) {
                return "Очень горячо.";
            } else if (distance < 40) {
                return "Горячо.";
            } else if (distance < 80) {
                return "Тепло.";
            } else if (distance < 160) {
                return "Холодно.";
            } else if (distance < 320) {
                return "Очень холодно.";
            } else if (distance < 640) {
                return "Очень-очень холодно.";
            } else {
                return "Замёрзнешь!";
            }
        }

        let width = 1250;
        let height = 800;
        let clicks = 0;
        let clicksLimit = 50;

        let target = {
            x: getRandomNumber(width),
            y: getRandomNumber(height)
        };

        $("#map").click(event => {
            clicks++;

            if (clicks > clicksLimit) {
                alert("Вы проиграли!")
                alert("Игра окончена!");
                return;
            }

            let distance = getDistance(event, target);

            let distanceHint = getDistanceHint(distance);

            $("#distance").text(distanceHint);

            $("#tries").text(`Осталось: ${clicksLimit - clicks} попыток.`);

            if (distance < 8) {
                alert("Клад найден! Сделано кликов: " + clicks + ".");
            }
        });