let Record = (function () {
    let id = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        get status() {
            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                return 'Stormy'
            }

            return 'Not stormy'
        }

        toString() {
            let result = `Reading ID: ${this.id}
Temperature: ${this.temperature}*C
Relative Humidity: ${this.humidity}%
Pressure: ${this.pressure}hpa
Wind Speed: ${this.windSpeed}m/s
Weather: ${this.status}
`;

            return result
        }
    }
})();

let record1 = new Record(32, 66, 760, 12);
let report1 = record1.toString();

let record2 = new Record(10, 40, 680, 30);
let report2 = record2.toString();

console.log(report1);
console.log(report2);