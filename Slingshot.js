class SlingShot{
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.pointB =pointB;
            this.chain = Constraint.create(options);
            World.add(world, this.chain);
        }
       display(){
           if(this.chain.bodyA!==null){
               push ()
            strokeWeight(4);
            stroke(14,24,25)
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop ()
           }
         
        }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA=body
    }
   
}
