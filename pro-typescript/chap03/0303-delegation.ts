
module Listing0303Delegation {
  
  interface ControlPanel {
    startAlarm(message: string): any;
  }
  interface Sensor {
    check(): any;
  }
  
  // ControlPanel is the delegator for Sensor to call alarm
  class MasterControlPanel implements ControlPanel {
    private sensors: Sensor[] = [];
    constructor() {
      // initiate delegators 
      this.sensors.push(new HeatSensor(this));
    }
    start() {
      for (var i = 0; i < this.sensors.length; i ++)
        // calling the delegate
        this.sensors[i].check();
      setTimeout(() => this.start(), 1000);
    }
    startAlarm(message: string) {
      console.log('Alarm! ' + message);
    }
  }
  class HeatSensor implements Sensor {
    private upperLimit = 38;
    private sensor = {
      read: () => Math.floor(Math.random() * 100)
    }
    constructor(private controlPanel: ControlPanel) {}
    check() {
      if (this.sensor.read() > this.upperLimit)
        this.controlPanel.startAlarm('Overheating!');
    }
  }
  var cp = new MasterControlPanel();
  cp.start();
}