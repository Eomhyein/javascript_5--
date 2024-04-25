// 클래스 연습하기
// 1.Car라는 새로운 클래스를 만든다
// 처음 객체를 만들때는 다음 네개의 값이 필수로 입력!
// 1) modelName
// 2) modelYear
// 3) type : 가솔린, 전기차, 디젤
// 4) price
// 2. mackeNoise() 메서드를 만들어 클락션을 출력하라.
// 3. 이후 자동차를 3개 정도 만들어라(객체 생성)

// 새로운 Car class 정의
class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    // 클락션을 울리는 메서드
    makeNoise() {
        console.log(`${this.modelName}: 빵!`);
    }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("QM6", "2010", "g", 4500);
car1.makeNoise();
car2.makeNoise();
car3.makeNoise();