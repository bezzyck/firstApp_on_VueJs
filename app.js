const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Volkswagen', 'Polo', 'Alex', 2020, '+7 (921) 923 45 32', 'images/volkswagen_polo.jpg'),
    car('Volkswagen', 'Jetta', 'Vlad', 2020, '+7 (931) 953 45 12', 'images/volkswagen_jetta.jpg'),
    car('Volkswagen', 'Passat', 'Oleg',2020, '+7 (981) 323 55 22', 'images/volkswagen_passat.jpg')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibillity: false,
        search: '',
        modalVisible: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCarIndex = index;
        },
        newOrder() {
            this.modalVisible = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, `Ok`)
            )
        },
        cancelOrder() {
            this.modalVisible = false
            this.logs.push (
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, `Cancel`)
            )
        }
    },
    computed: {
        phoneBtn() {
            return this.phoneVisibillity ? 'Hide phone' : 'Show phone'
        },
        filterCars() {
            const filtered = this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })

            return filtered
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})