class Umbrella{
    constructor(x,y)
    {
        var options ={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
            this.image = loadImage("batman-logo.png")
        this.x = x;
        this.y = y;
        
        
    }
    display()
    {
        
      
        image(this.image,280,155,150,250);
       
        rectMode(CENTER)
        //strokeWeight(3);
        
        
        
    }
    }