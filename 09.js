// 클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합니다.
const x = 1;

function outerFunc() {
    const x = 10;
    function innerFunc() {
        console.log(x); // 10
    }

    innerFunc();
}

outerFunc();