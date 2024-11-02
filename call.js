const object1 = {
  userName: "user1",
  lastName:"lastname1",
  fullName: function (parameter1,parameter2) {
    return `${this.userName}  ${this.lastName}  ${parameter1}  ${parameter2}`
  },
};

const object2 = { 
    userName: "user2",
    lastName:"lastname2",
}
console.log(object1.fullName.call(object2, "parameter1", "parameter2")); 
console.log(object1.fullName.apply(object2, ["parameter1", "parameter2"]))

const result = object1.fullName.bind(object2, "parameter1", "parameter2")
console.log(result, "result");
