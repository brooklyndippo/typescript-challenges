

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

import { Kaiju , KaijuType } from "./example-8"

// Import Kaiju and KaijuType from example-8.js

// Fix the rampage function so it makes use of the KaijuType enum

function rampage(kaiju: Kaiju, city: string) {
	const { name, type, power } = kaiju
	let action: string
	switch(type) {
		case KaijuType.ape: 
			action = 'smash'
			break

		case KaijuType.lizard:
			action = 'burn'
			break

		case KaijuType.flying: 
			action = 'flap'	
			break
	} 
	let result = `${name} ${action} over ${city} causing ${power * 10000} damage!`
	return result
}

const gojira = new Kaiju('Gojira', KaijuType.lizard, 90)
const kingkong = new Kaiju('King Kong', KaijuType.ape, 100)
const dragon = new Kaiju('Dragon', KaijuType.flying, 40)

// Define two more monsters


console.log(rampage(gojira, 'tokyo'))
console.log(rampage(kingkong, 'new york city'))
console.log(rampage(dragon, 'london'))
// Set the new monsts to rampage in a city

