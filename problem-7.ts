{
    class Car {
        make: string;
        model: string;
        year: number;
        constructor(make: string, model: string, year: number) {
            this.make = make,
                this.model = model,
                this.year = year
        }
        getCarAge() {
            const date = new Date();
            const currentYear = date.getFullYear()
            const carAge = currentYear - this.year;
            console.log(`${carAge}  (assuming current year is ${currentYear})`);
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    car.getCarAge();
}