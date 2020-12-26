var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2. В префиксной форме инкрементирование производится сразу
d = b++; alert(d);           // 1
c = (2+ ++a); alert(c);      // 5. В префиксной форме инкрементирование производится сразу
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3 накопленные значения
alert(b);                    // 3 накопленные значения



//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); //x = 5



//###3
a=3
b=2

if(a,b>0) 
    console.log(a-b);
else if (a,b<0)
    console.log(a*b);
else if((a>0,b<0) || (a<0,b>0))
    console.log(a+b)

//###4
var a =7
switch(a){
    case(0):
        console.log(0)
    case(1):
        console.log(1)
    case(2):
        console.log(2)
    case(3):
        console.log(3)
    case(4):
        console.log(4)
    case(5):
        console.log(5)
    case(6):
        console.log(6)
    case(7):
        console.log(7)
    case(8):
        console.log(8)
    case(9):
        console.log(9)
    case(10):
        console.log(10)
    case(11):
        console.log(11)
    case(12):
        console.log(12)
    case(13):
        console.log(13)
    case(14):
        console.log(14)    
    case(15):
    console.log(15)
        break
}

//###5
function summ (x,y){
    return x+y
}
function minus (x,y){
    return x-y
}
function multi (x,y){
    return x*y
}
function div (x,y){
    return x/y
}


//###6
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case("summ"):
        return arg1 +arg2
        case("minus"):
        return arg1-arg2
        case("multi"):
        return arg1 * arg2
        case("div"):
        return arg1/arg2
    }
}
console.log(mathOperation(2, 3, "summ"))


//*7 Сравнить 0 и null
//null > 0; // false
//null == 0; // false
//null >= 0; // true

/*8С помощью рекурсии организовать функцию возведения
 числа в степень. Формат: function power(val, pow),
 где val – заданное число, pow – степень.*/

 function power(val,pow){
    {if ( n = pow)
        return(val**n)}
    var n=1
    return power(val**n+1)
}
console.log(power(3,5))//243
console.log(power(2,3))//8
console.log(power(10,3))