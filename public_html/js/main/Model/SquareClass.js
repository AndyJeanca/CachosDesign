var Square = Figure.extend({
    init : function(pId, pColor, pBorderSize, pInitialPoint, pWidth, pHeight, pFill) {
    this._super(pId, pColor, pBorderSize, pInitialPoint);
    this.width = pWidth;
    this.height = pHeight;
    
    //Is the color of the filler
    this.fill = pFill;
    },
    
    getWidth : function () {
      return this.width;  
    },
    
    getHeight : function () {
        return this.height;
    },
    
    getFill : function () {
        return this.fill;
    },
    
    setWidth : function (pWidth) {
      this.width = pWidth;  
    },
    
    setHeight : function (pHeight) {
        this.height = pHeight;
    },
    
    setFill : function () {
      this.fill = pFill;  
    },
    
    isInPointIn : function (pPoint) {
        var pointX1 = (this.initialPoint.getX() - this.width/2);
        var pointX2 = (this.initialPoint.getX() + this.width/2);
        
        var pointY1 = (this.initialPoint.getY() - this.height/2);
        var pointY2 = (this.initialPoint.getY() + this.height/2);
        
       if((pPoint.getX()>=pointX1 && pPoint.getX()<=pointX2)&&(pPoint.getY()>=pointY1 && pPoint.getY()<=pointY2)){
            return true;
        }
        else{
            return false;
        }
        
        
    },
    
    drawFigure : function () {
    var rect = new Kinetic.Rect({
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        fill: this.colorList.getColot(color),
        stroke: 'black',
        draggable : true,
        strokeWidth: this.borderSize
      });

      return rect
        
    }
    
});