class Launcher{
    constructor(body,anchor){
        var options = {
            bodyA:body,
            bodyB:anchor,
            stiffness:0.001,
            length:1,

        }
        this.bodyA = body ;
        this.bodyB = anchor;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
        
    }

    attach(body){
        this.launcher.bodyA= body
    }

    fly(){
        this.launcher.bodyA=null
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(0.001);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    
        
    }
}