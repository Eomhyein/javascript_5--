// 클래스라는 설계도를 만들어보자!
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
// 설계도를 통해 인스턴스를 만들어보자!
const person = new Person('Alice', 20);