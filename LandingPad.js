class landingPad{
    constructor(x,y,width,height){
       var options={
           isStatic: true
       }
       this.x=x;
       this.y=y;
       this.width=width;
       this.height=height;
      this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body)
    
    }
    display(){
        var pos=this.body.position;
    
        fill("red");
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
    }

    }