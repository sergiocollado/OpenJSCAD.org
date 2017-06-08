// title      : Criptex
// author     : Sergio González Collado
// license    : MIT License
// revision   : 0.003
// tags       : Sergio
// file       : Criptex.jscad

function main() {
    
    var cb = cylinder({r:1,h:1});
    cb = cb.translate([0,0,0]).scale(10).setColor(0,0,255,0.7);
    
    var cb2 = cylinder({r:0.5,h:1});
    cb2 = cb2.translate([0,0,0]).scale(10).setColor(0,255,0,0.7);
    
    var donut = difference(cb,cb2).rotateX(90).translate([0,0,10]);
    
   
    
    return donut;

}
