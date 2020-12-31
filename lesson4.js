let numb = parseInt(prompt('Введите число от нуля до 999'))

function NumberConv(){

    let table = {};
    if (numb<0 || numb >999)

        console.log("Вы ввели значение"+ numb +"которое вне условий");

    else if(numb>=0 && numb<=999){
        table.units =parseInt(numb%10);
        table.tens = parseInt((numb%100)/10);
        table.hundreds = parseInt(numb/100);
        console.log(table)

    }

    else(console.log("Это не является числом"));


}
NumberConv(numb)