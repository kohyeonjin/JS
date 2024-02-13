
//export default 방식

const NAME = "홍길동";
const AGE = 20;

// export default NAME;
// export default AGE; 두 번 사용X

class Person {
    name = "이순신";
    age = 20;
    constructor(age) {
        this.age = age;
    }

    getAge = () => {
        return this.age;
    }
}

export default Person;
