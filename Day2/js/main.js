/**
 * Created by Dusk on 6/5/14.
 */


var grades = [80,90,100,20];
getAverage(grades);

console.log(getAverage(grades));

function getAverage(g){
    var total=0;
    for(var i=0;i< g.length;i++){
      total+=g[i];

    }
  return total/ g.length;
}