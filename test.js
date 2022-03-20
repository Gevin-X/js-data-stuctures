



// let func = function() {

    
//       let l = 'let';
//       var v = 'var';
//       const c = 'const'
//       num=[l,c,v]
// return(num)    
// }
//  console.log(func()); 
// console.log(num[1]);
//     // console.log(v);
//     // console.log(l);
//     // console.log(c);
 //===========================================================


 let func = function() {

    {
      (function(){
      let l = 'let';
      var v = 'var';
      })();
    }
    console.log(v);
    console.log(l);
 
  }
 
 func();

//__________________________________________________


 let dot = (155 === 155)? true : false;
console.log(dot);