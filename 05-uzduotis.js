/*
Žinomi kambario matmenys ilgis ir plotis.
 Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles, 
 skirtas kambario grindims kloti, jei plytelių vieno kvadrato kaina yra 23 eurai.
  Plytelių reikia pirkti 5 proc. daugiau galimiems nuostoliams padengti. 
  Plytelės supakuotos po 1.5m2 ir parduotuvės darbuotojai nesutinka ardyti pakuočių. 
  Galima pirkti tik pilnas pakuotes. 

*/
/*
/* Kintamieji:
Kambario plotas; a x b
Min plotas plyteliu pokais; turi buti bent 5 proc didesnis - 1.5
plyteliu paku kiekis;
Bendrai mokama suma; bus gauta 23Eur * plyteliu paku skaicius.
*/
 

console.clear()

function kaina(a,b) {
    return `Mokama suma: ${Math.ceil(a * b * 1.05 /1.5)*23} Eur`;
}

console.log(kaina(10,15));

/*tarpiniai skaiciavimai
console.log('Plotas: ', 5*3);
console.log('Min plotas: ', 5*3*1.05);
console.log('Min pokų kiekis', 5*3*1.05/1.5);
console.log('Sveikas poku kiekis', Math.ceil(5*3*1.05/1.5));
console.log('Suma', Math.ceil(5*3*1.05/1.5)*23);*/