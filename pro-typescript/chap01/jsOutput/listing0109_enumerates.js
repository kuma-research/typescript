// TODO: Figure out how this is implemented to translate to JavaScript...
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["PedalCycle"] = 0] = "PedalCycle";
    VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
    VehicleType[VehicleType["Car"] = 2] = "Car";
    VehicleType[VehicleType["Van"] = 3] = "Van";
    VehicleType[VehicleType["Bus"] = 4] = "Bus";
    VehicleType[VehicleType["Lorry"] = 5] = "Lorry";
})(VehicleType || (VehicleType = {}));
;
var type = VehicleType.Lorry;
var typeName = VehicleType[type];
