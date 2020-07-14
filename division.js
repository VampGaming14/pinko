class division{
    constructor(x, y, width, height, angle){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    }
    display() {
         var pos = this.body.position; rectMode(CENTER); fill("white"); rect(pos.x, pos.y, this.w, this.h); 
        }
}