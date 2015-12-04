
var name: string = 'Steve';
var heightInCentimeters: number = 182.88;
var isActive: boolean = true;

var names: string[] = [ 'James', 'Nick', 'Rebecca', 'Lily' ];

// function annotation
var sayHello: (name: string) => string;
sayHello = function (name: string) {
  return 'Hello ' + name;
};

// class annotation
var person: { name: string; heightInCentimeters: number };
person = {
  name: 'Mark',
  heightInCentimeters: 183
};
