class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        // 实例方法
    }

    static sayHi() {
        // 静态方法
    }
}

class Student extends Person {
    // 继承
    constructor() {
        super();
        this.stuNo = 10086;
    }
}