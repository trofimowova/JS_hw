//1.

let n = 100;
let i = 2
while (i <= n) {
    let j = 2
    let flag =1
    while ((j <= i/2)&&(flag==1)){
        if (i%j==0) {
            flag=0
       }
    j=j+1
    }
    if (flag==1) {console.log(i);}
    i++  
}
 

 








var bucket = [["book",300],["table",500],["pen",50],["lamp",150]]
function countBasketPrice(arr){
    var cost=0
    for ( var i in arr){
        cost=cost+bucket[i][1]
    }
    return cost
}
console.log(countBasketPrice(bucket))


//*4.Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла
for(let i =0; i <10;console.log(i++)){
}

//5. Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
//только у вашей пирамиды должно быть 20 рядов, а не 5: //

var pyramid =[]
for(let i=0;i<21;(i++)){
    pyramid.push('x')
    console.log(pyramid.join(''))    
}

