const x = 1;

// 1
function outer() {
    const x = 10;
    const inner = function () {
        console.log(x);
    };
    return inner;
}

// outer함수를 '실행'해서, innerFunc에 담고
// outer함수의 retulrn부분을 innerFunc에 담는다.
const innerFunc = outer();
// 여기서는 outer 함수
innerFunc();

