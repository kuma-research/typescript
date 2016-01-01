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
  travelTo(point: Point);
  addPassenger(passenger: Passenger);
  removePassenger(passenger: Passenger); 
}