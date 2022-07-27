//////////////////////////////////////////Task#1/////////////////////////////////////////////////////
const student = {
  firstName: 'John',
  lastName: 'Doe',
  averageScore: 4.8,
  getFullName() {
    return `${this.firstName}, ${this.lastName}`;
  },
  isGrantHolder() {
    return this.averageScore >= 4 ? true : false;
  },
};

function Aspirant() {
  this.dissertationTopic = 'dissertationTopic';
  this.isDissertationComplete = false;
  this.isGrantHolder = function () {
    return student.averageScore >= 4.5 && this.isDissertationComplete === true
      ? true
      : false;
  };
}
Aspirant.prototype = student;

const aspirant = new Aspirant();

for (let key in aspirant) {
  console.log(key, ':', aspirant[key]);
}

console.log(student.isGrantHolder());
console.log(aspirant.isGrantHolder());

//////////////////////////////////////////Task#2/////////////////////////////////////////////////////

class Plane {
  constructor(name, isFlying = false) {
    this.name = name;
    this.isFlying = isFlying;
  }

  takeOff() {
    this.isFlying = true;
  }

  land() {
    this.isFlying = false;
  }
}

const airport = {
  planes: [],
  getFlyingPlanes(i = 0) {
    for (let value of this.planes) {
      if (value.isFlying === true) i++;
    }
    return i;
  },
};

const plane1 = new Plane('First');
const plane2 = new Plane('Killer');
const plane3 = new Plane('SpitFyre');

plane2.takeOff();
plane3.takeOff();
plane1.takeOff();

plane2.land();

airport.planes.push(plane1, plane2, plane3);

console.log(airport.planes);
console.log(airport.getFlyingPlanes());
