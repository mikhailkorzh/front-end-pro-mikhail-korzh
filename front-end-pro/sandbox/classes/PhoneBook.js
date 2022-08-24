const arr = [];

class ContactBook {
  constructor(firstName, lastName, phone, gender) {
    this.setName(firstName, lastName, phone, gender);
    //this.setName(firstName, lastName, phone, gender);
  }

  getName() {
    return arr;
  }
  setName(firstName, lastName, phone, gender) {
    arr.push({
      fname: (this.firstName = firstName),
      lname: (this.lastName = lastName),
      number: (this.phone = phone),
      gender: (this.gender = gender),
    });
  }
}

const person = new ContactBook("Mike", "Jr", "063", "male");
const person1 = new ContactBook("Mike", "Jr", "063", "male");
const person2 = new ContactBook("Mike", "Jr", "063", "female");
const person3 = new ContactBook("Mike", "Jr", "063", "female");

console.log(person.getName());
