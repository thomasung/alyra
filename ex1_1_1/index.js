const _ = require('lodash');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


/**
 * fn nombre aléatoire entre 1 et 100
 *
 * Problèmatique : random flottant dans r=[0,1[ --- transformation ---> [1,100]
 * Solution      : r x 100 + 1 = [0,100[ + 1 = [1,100]
 * Solution générique implémentée ci-dessous
 *
 * @this {int}
 * @param {number} min nombre
 * @param {number} max nombre max
 * @see: _.random(1,100)
 * @see: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
 */
function getRandomInt(min=1, max=100){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function question(q){
  readline.question('Deviner un nombre entre 1 et 100 ?',(answer)=>{
    var a = parseInt(answer);
    if(_.isInteger(a)){
      if(q==a) {
        console.log(`vous avez trouvé le bon numéro ${answer}!`);
        process.exit(0);
      } else {
        var diff=q-a
        if(diff<0) console.log('le nombre à deviner est plus petit');
        else console.log('le nombre à deviner est plus grand');

        var diffAbs=Math.abs(diff);
        if(diffAbs<=10) {
            if(diffAbs<=5) console.log('Vous être très proche');
            else console.log('Vous être proche');
        }else{
            console.log('la différence est > 10 en valeur absolue');
        }
        question(q);
      }
    } else {
      process.exit(1);
    }
  });
}


question(getRandomInt());
