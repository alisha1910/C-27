class Chain {
    constructor(bodyA,bodyB){

        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 250
        }
this.chain = Constraint.create(options);
World.add(world,this.chain);

    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        strokeWeight(6);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       pop ();
    }

}