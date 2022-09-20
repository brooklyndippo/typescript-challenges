// We need a Kaiju class
// All Kaiju have name, power and type. 
// Type can be: lizard, flying, or ape. 
// Be sure to include a constructor in the 
// Kaiju class that initializes it's properties!

enum KaijuType { 
	flying,
	lizard,
	ape
}

class Kaiju {
	name: string
	type: KaijuType
	power: number

	constructor(name, type, power) {
		this.name = name
		this.type = type
		this.power = power
	}
}

export {
	Kaiju, 
	KaijuType
}
