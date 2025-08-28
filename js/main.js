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