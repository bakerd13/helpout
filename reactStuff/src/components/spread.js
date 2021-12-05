var ob = {};

var ob1 = {
    car:'astra',
    colour: 'blue'  
};

var ob2 = {
    town: 'up north'
};


var obSpread = {
    ...ob1,
    ...ob2
};

console.log(ob);
console.log(ob1);
console.log(ob2);
console.log(obSpread);


function test1(outputs, ...inputs){
    console.log(outputs);
    console.log(inputs);
}

test1("test1",{car:1},{car:2},{car:3});

public void test2(params int args)
{

}

test1(1,2,3)