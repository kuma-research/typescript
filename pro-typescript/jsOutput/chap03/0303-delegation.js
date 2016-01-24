var Listing0303Delegation;
(function (Listing0303Delegation) {
    // ControlPanel is the delegator for Sensor to call alarm
    var MasterControlPanel = (function () {
        function MasterControlPanel() {
            this.sensors = [];
            // initiate delegators 
            this.sensors.push(new HeatSensor(this));
        }
        MasterControlPanel.prototype.start = function () {
            var _this = this;
            for (var i = 0; i < this.sensors.length; i++)
                // calling the delegate
                this.sensors[i].check();
            setTimeout(function () { return _this.start(); }, 1000);
        };
        MasterControlPanel.prototype.startAlarm = function (message) {
            console.log('Alarm! ' + message);
        };
        return MasterControlPanel;
    })();
    var HeatSensor = (function () {
        function HeatSensor(controlPanel) {
            this.controlPanel = controlPanel;
            this.upperLimit = 38;
            this.sensor = {
                read: function () { return Math.floor(Math.random() * 100); }
            };
        }
        HeatSensor.prototype.check = function () {
            if (this.sensor.read() > this.upperLimit)
                this.controlPanel.startAlarm('Overheating!');
        };
        return HeatSensor;
    })();
    var cp = new MasterControlPanel();
    cp.start();
})(Listing0303Delegation || (Listing0303Delegation = {}));
