
import Shipping = require('./Shipping');

export class Dock {
  private dockedShips: Shipping.Ship[] = [];
  
  arrival(ship: Shipping.Ship) {
    this.dockedShips.push(ship);
  }
}