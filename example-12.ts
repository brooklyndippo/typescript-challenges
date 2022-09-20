
// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West

enum Direction {
	North = 'North',
	East = 'East',
	South ='South',
	West = 'West'	
}

// Should having a heading property type Direction

class MapPosition {

	direction: Direction

	constructor() {
		this.direction = Direction.North
	}

	// takes a new Direction as an argument
	move(newDirection: Direction) {
		this.direction = newDirection
		console.log(`New direction: ${this.direction}`)
		// set the direction on your property 
		// Print the new direction
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `You are heading ${this.direction}`
	}
}

const location = new MapPosition()
console.log(location.describe())
// Might output:
// "You are heading north"
location.move(Direction.South)
console.log(location.describe())


export default MapPosition