enum Weather {
    SPRING,
    SUMMER,
    AUTOMN,
    WINTER
}

function getWeather(month: number): Weather {
    if (3 <= month && month < 6) {
        return Weather.SPRING;
    } else if (6 <= month && month < 9) {
        return Weather.SUMMER;
    } else if (9 <= month && month < 12) {
        return Weather.AUTOMN;
    } else {
        return Weather.WINTER;
    }
}
console.log(getWeather(1))
