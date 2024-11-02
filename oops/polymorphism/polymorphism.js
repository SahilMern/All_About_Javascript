class Animal {
    speak() {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows");
    }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.speak(); // Output: The dog barks
myCat.speak(); // Output: The cat meows


//? Method Overriding: Jab ek child class apne parent class se method inherit karti hai aur us method ko apni class mein redefine karti hai, toh is process ko method overriding kehte hain. Jab aap child class ka object banate hain aur us method ko call karte hain, toh child class ki method execute hoti hai, parent class ki nahi. Yeh example hai polymorphism ka, jisme ek method alag-alag objects ke liye alag behavior dikha sakti hai.