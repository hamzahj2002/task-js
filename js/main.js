// let num 
// let num1 =2 ;
// let num2 =4 ;
// num =num1 + num2;
// console.log(num)
// document.getElementById("num").innerHTML=(num)


//  كتابة التابع يأخذ كمعامل رقم و يعيد  مجموع الاعداد 1من 1  ال هذا الرقم
// و اذا كان الرقم  سالب يعيد 0
function summing(x){
    if(x<0){
        return 0;

    }
    else {
        i = 1;
        num=0;
        while(i<=x){
            num=num+i;
            i++;
        }
        return num;
    }
}
console.log(summing(4))


// كتابة تابع يأخذ كمعامل رقم صحيح موجب ويعيد   
  // اذا كان غير ذلك "fuls" اذا كان الرقم  اولي و  "true"

function isPrime(x){
    i=1
    if(i >= x){
        return false;
    }
    else{

         let y = 2;
        while( y < x ){

            if(x % y === 0 ){
                return false;
            }
            y++;
        }
        return true;
    }
}
console.log(isPrime(4));



//تابع يقوم بطباعة الاعداد الاولية من 1 الى 1000
function print (){
    x=1;
    while(x <= 1000){
        if(isPrime(x)){
            console.log(x);
        }
        x++;
    }
}
print();