const car = {}
car.name = "Polocar"
car.make = "WW"
car.year = 1999
//console.log(car)
car.price = 500
console.log(car)
//showMake(car)
//showName(car)

function showMake(car){
    console.log(car.make)
}

 const showName = function(car){
    console.log(car.name);
}

const showPrice = (car)=> {
console.log(car.price)
}
showMake(car)
showName(car)
showPrice(car)
for (const property in car){
    console.log(`property:${property},Value:${car[property]}`)
}

