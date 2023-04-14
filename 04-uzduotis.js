console.clear()
/*
Parašykite programą, kuri suskaičiuotų , 
kiek duotas skaičius num turi lyginių ir nelyginių skaitmenų .
@param {number} num            @example:
                               63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’ 
*/

// num =  63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’ 


 function number (num){
   let tekstas = Math.abs(num).toString();
   let lyginis = 0;
   let nelyginis = 0;
   for (let i=0 ; i<tekstas.length; i++){
    if(tekstas[i]%2===0){
        lyginis= lyginis+1;
    }else {
        nelyginis = nelyginis+1;
    }
   } 
   return 'lyginiu:' + lyginis + '; nelyginiu:'  + nelyginis;
 };
   console.log(number(-2));
 
