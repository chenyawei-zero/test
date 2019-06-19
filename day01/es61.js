let obj= {
    name: '哈哈',
    age: 18
};


let {name: name1, age: age1} =  obj;
console.log(name1);
console.log(age1);

let {name, age} =  obj;
console.log(name);
console.log(age);

function test({name, age}) {
    console.log(name);
    console.log(age);
}

test(obj)