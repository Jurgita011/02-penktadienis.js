/* 
 3-uzduotis

Parašykite  funkcija  kuri  paskaičiuotų  atstumą  tarp  dviejų  taškų koordinačių sistemoje.
 Parametrai 4 perduodami skaičiai x1, y1, x2, y2. 
 @param {number} x1             @example:
  @param {number} y1             (0,0) (0,1) => 1
  @param {number} x2            (0,0) (1,0) => 1
  @param {number} y2            (-5,0) (10,-10) => 18.027756377319946 

*/

console.clear()
//a^2 + b^2 = c^2
function kordinates( x1, y1, x2, y2){
    x= x2-x1;
    y = y2-y1 ;
//x^2 + y^2 = atstumas^2
  atstumas = Math.sqrt( x**2 + y**2);
  return  atstumas;
}
console.log( kordinates(-5, 0, 10, -10));
console.log(kordinates(0,0, 1,0));
console.log(kordinates(0,0, 0,1));
