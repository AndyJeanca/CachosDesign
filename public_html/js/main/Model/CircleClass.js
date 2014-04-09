var Circle = Figure.extend({
    
    init: function(pId, pColor, pBorderSize,pInitialPoint, pRadius, pFill) {
        this._super(pId, pColor, pBorderSize,pInitialPoint);
        this.radius = pRadius;
        //Is the color of the filler
        this.fill = pFill;
    },
    
    getRadius : function () {
        return this.radius;
    },
    
    getFill : function () {
        return this.fill;
    },
    
    setRadius : function (pRadius) {
        this.radius = pRadius;
    },
    
    setFill : function (pFill) {
        this.fill = pFill;
    },
    
    isInPointIn : function (pPoint) {
        //We are making a range between the borders of the circle to know if the pont x,y 
        //its in the area of the circle
        var pointX1 = (this.initialPoint.getX() - this.getRadius());
        var pointX2 = (this.initialPoint.getX() + this.getRadius());
        
        var pointY1 = (this.initialPoint.getY() - this.getRadius());
        var pointY2 = (this.initialPoint.getY() + this.getRadius());
        
        if((pPoint.getX()>=pointX1 && pPoint.getX()<=pointX2)&&(pPoint.getY()>=pointY1 && pPoint.getY()<=pointY2)){
            return true;
        }
        else{
            return false;
        }
        
    },
    
    drawFigure : function () {

        var circle = new Kinetic.Circle({
        x: this.initialPoint.x,
        y: this.initialPoint.y,
        radius: this.radius,
        fill: this.colorList.getColor(this.color),
        stroke: 'black',
        draggable : true,
        strokeWidth: this.borderSize
      });

     return circle;
        
    }               
});