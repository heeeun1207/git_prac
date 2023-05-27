class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`안녕하세요! 제 이름은 ${this.name}이고, 나이는 ${this.age}세입니다.`);
  }
}

// 클래스의 인스턴스 생성
const person1 = new Person('철수', 20);
const person2 = new Person('영희', 25);

// 메서드 호출
person1.sayHello(); // 출력: 안녕하세요! 제 이름은 철수이고, 나이는 20세입니다.
person2.sayHello(); // 출력: 안녕하세요! 제 이름은 영희이고, 나이는 25세입니다.
