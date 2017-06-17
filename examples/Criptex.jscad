// title      : Criptex
// author     : Sergio González Collado
// license    : MIT License
// revision   : 0.003
// tags       : Sergio
// file       : Criptex.jscad

function main() {
    
    var scale = 1;
    var tnsp = 0.3;
    
    var cb = cylinder({r:1,h:1});
    cb = cb.translate([0,0,0]).scale(scale).setColor(0,0,255,tnsp);
    
    var cb2 = cylinder({r:0.5,h:1});
    cb2 = cb2.translate([0,0,0]).scale(scale).setColor(0,255,0,tnsp);
    
    var cb3 = cylinder({r:0.75,h:1});
    cb3= cb3.translate([0,0,0.666]).scale(scale).setColor(0,255,0,tnsp);
    
    var cb4= cylinder({r:0.75,h:0.333});
    cb4= cb4.translate([0,0,0]).scale(scale).setColor(0,255,0,tnsp);

    /*var cb5= cylinder({r:0.7,h:0.333});
    cb5 = cb5.translate([0,0,0.666]).scale(scale).setColor(0,255,0,tnsp);
    ^*/
    
    var donut = difference(cb, cb2);
    donut = difference(donut,cb3);
    donut = difference(donut,cb4);
   // donut = difference(donut,cb5);
    
    
 //   return donut;

  
 /*return  rotate_extrude( translate([6,0,0],
 circle({r: 1, fn: 20, center: true}) ) );*/
 
 // return square({size: [2,4], center: true});
    
 /*return rotate_extrude({fn:30}, 
 square({size: [1,1], center: true}).translate([4,0,0]) );  */
 
  //return square({size: [2,4], center: true});
 
  return torus({ fni:4,fno:20,roti:45 });


}
