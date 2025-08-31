
// let num 
// let num1 =2 ;
// let num2 =4 ;
// num =num1 + num2;
// console.log(num)
// document.getElementById("num").innerHTML=(num)
// let x,y,z;
// x=2;
// y=3;
// z=4;
// if(x>y){
//     if (x>z) {
//         console.log(x)
//     }

// }
// else {
//     if(y>z){
//         console.log(y)
//     }
//     else{
//         console.log(z)
//     }
// }
 function summing(x){
    if (x < 0)
        return 0;
    else  {
        sum=0
         i=1;
        while( i <= x ) { 
             sum= sum + i;
             i++ ;
        }
        return sum ;

    }

    
 }
 console.log(summing(5));


//  function isPrinme(x){
//     if( x / x == 1 && x / 1 ==  )

//         return true;
//     else 
//         return false;

//  }
//  console.log(isPrinme(1));
// // let num 
// // let num1 =2 ;
// // let num2 =4 ;
// // num =num1 + num2;
// // console.log(num)
// // document.getElementById("num").innerHTML=(num)


// //  كتابة التابع يأخذ كمعامل رقم و يعيد  مجموع الاعداد 1من 1  ال هذا الرقم
// // و اذا كان الرقم  سالب يعيد 0
// function summing(x){
//     if(x<0){
//         return 0;

//     }
//     else {
//         i = 1;
//         num=0;
//         while(i<=x){
//             num=num+i;
//             i++;
//         }
//         return num;
//     }
// }
// console.log(summing(4))


// // كتابة تابع يأخذ كمعامل رقم صحيح موجب ويعيد   
//   // اذا كان غير ذلك "fuls" اذا كان الرقم  اولي و  "true"

// function isPrime(x){
//     i=1
//     if(i >= x){
//         return false;
//     }
//     else{

//          y = 2;
//         while( y < x ){

//             if(x % y === 0 ){
//                 return false;
//             }
//             y++;
//         }
//         return true;
//     }
// }
// console.log(isPrime(4));



// //تابع يقوم بطباعة الاعداد الاولية من 1 الى 1000
// function print (){
//     x=1;
//     while(x <= 1000){
//         if(isPrime(x)){
//             console.log(x);
//         }
//         x++;
//     }
// }
// print();

// ليدنا أربع علامات لمواد جامعية رياضيات – فيزياء – برمجة – عربي
//     نقول ان الطالب ناجح بمادة ما إذا حصل على علامة أكبر أو تساوي 60
// نقول عن الطالب أنه ناجح في السنة الدراسية إذا كان ناجح في كافة المواد الأربعة
// يحق للجامعة أن تساعد الطالب بعلامتين فقط، ولا يمكن نقل علامة من مادة إلى أخرى

function mark(a, b, s, d) {
    let i = 0;
    let marks = [a, b, s, d];
    let y = 0;
    let x = 0;
    let z = 0 ;

    while(i < 4) {
        if(marks[i] > 59) {
             y++;
        }  
        if(marks[i] == 59  ){
            x++;
        }
        if( marks[i] == 58){
          z++;
        }
        i++;
    }
    if(x==2 && y==2|| z==1 && y==3 ||  y==4 || x==1 && y==3 ){
        return " ناجح";

    }
    return "راسب";
}
console.log (mark(59,70,70,70));

// لنفترض أن عدد أيام أي شهر في السنة 30 يوم ) لا يوجد 31 أو 28 )
// ولنفترض أن عدد أيام السنة 30 * 12 = 360 يوم )وليس 365 )
// لدينا شخصين لكل منهما تاريخ ميلاد )يوم – شهر – سنة ( وفق الشروط السابق ة
// يعني لدينا ست متحولات :
// Day1 – month1 – year1
// Day2 – month2 – year2
// نريد كتابة برنامج يعرف أي من الشخصين الأول ام الثاني أكبر عمر اً وذلك بشرط القيام بعملية مقارنة واحدة فقط

function age(y1 ,m1 ,d1 ,y2 ,m2 ,d2){
      age1 = (2025-y1)*360 + (12-m1)*30 +d1 ;
      age2 = (2025-y2)*360 + (12-m2)*30 +d2 ;

    if( age1 > age2){
        return "الشخص الاول اكبر"
    }
        return "الشخص الثاني اكبر"
}
console.log (age(2002 ,6,2 ,2010,8 , 2 ));
