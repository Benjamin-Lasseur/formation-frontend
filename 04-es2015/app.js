let favoriteCityId = 'Rome'
console.log(favoriteCityId)
favoriteCityId = 'Paris'
console.log(favoriteCityId)
let citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)
//let citiesId = []
citiesId.push('Tokyo')
console.log(citiesId)


function getWeather(cityId) {
    let city = cityId.toUpperCase()
    let temperature = 20
    return { city, temperature }
}
const weather = getWeather(favoriteCityId)
console.log(weather)


let {
    city, temperature
} = weather
console.log(city)
console.log(temperature)

let [parisId, nycId, otherCitiesId] = citiesId
console.log(parisId)
console.log(nycId)
console.log(otherCitiesId.length)

class Trip {
    constructor(id, name, imgUrl) {
        this.id = id
        this.name = name
        this.imgUrl = imgUrl
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imgUrl}, ${this.price}]`
    }

    get price() {
        return this._price
    }

    set price(newPrice) {
        this._price = newPrice
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
}

let parisTrip = new Trip("paris", "Paris", "images/paris.jpeg")
console.log(parisTrip)
console.log(parisTrip.name)
parisTrip.price = 100;
console.log(parisTrip.toString())
const defautlTrip = Trip.getDefaultTrip()
console.log(defautlTrip.toString())

class FreeTrip extends Trip {
    constructor(id, name, imgUrl) {
        super(id, name, imgUrl)
        this.price = 0
    }

    toString() {
        return "Free" + super.toString()
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nanges.jpg")
console.log(freeTrip.toString())

class TripService {
    constructor() {
        this.trips = new Set()
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'))
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
    }

    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.trips.forEach(trip => {
                    if (trip.name == tripName) {
                        resolve(trip)
                    }
                })
                reject(`No trip with name ${tripName}`)
            }, 1000)
        })
    }
}

class PriceService {
    constructor() {
        this.trips = new Map()
        this.trips.set('paris', 100)
        this.trips.set('rio-de-janeiro', 800)
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.trips.has(tripId)) {
                    resolve("Price found : " + this.trips.get(tripId)+"€")
                }
                reject(`No price found for ${tripId}`)
            }, 1000)
        })


    }

}

function trouver(ville) {
    tripService.findByName(ville)
    .then(trip => { return priceService.findPriceByTripId(trip.id)},error=>{console.log(error)})
    .then(prix=>{console.log(prix)},error=>{console.log(error)})
}

let tripService = new TripService()
let priceService = new PriceService()
trouver("Nantes")



