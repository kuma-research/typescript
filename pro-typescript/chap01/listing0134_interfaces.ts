interface Point {
  x: number,
  y: number
}

interface Passenger {
  // Properties
  name: string
}

interface Vehicle {
  // Constructor
  new (): Vehicle;
  
  // Properties
  currentLocation: Point;
  
  // Methods
  travelTo(point: Point) : Point;
  addPassenger(passenger: Passenger): void;
  removePassenger(passenger: Passenger): void;
}