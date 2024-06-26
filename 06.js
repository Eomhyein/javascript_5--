// 상속(Inheritance)
// Class -> 유산으로 내려주는 주요 기능!
// 부모 <-> 자식


// 동물 전체에 대한 클래스
class Animal {

    // 생성자
    constructor(name) {
        this.name = name;
    }

    // 메서드 (짖다)동물의 행동을 정의하는 메소드
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// 동물 클래스를 상속받는 Dog 클래스 만들기
class Dog extends Animal {
    // 상속받을 때, speak()를 입맛에 맞게 재정의하기
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Dog를 만들 때는 Animal의 상속을 받은 class이기 때문에 
// 이름을 필수로 받아야 됨
let d = new Dog('Mitzie');

// speak는 'makes a noise'가 아니라, 'barks'가 출력되어진다.
d.speak(); // "Mitzie barks."