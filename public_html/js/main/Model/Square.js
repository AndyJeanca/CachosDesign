/*
                                                                        _____                           
                                                                      / ___/____ ___  ______ _________ 
                                                                      \__ \/ __ `/ / / / __ `/ ___/ _ \
                                                                     ___/ / /_/ / /_/ / /_/ / /  /  __/
                                                                    /____/\__, /\__,_/\__,_/_/   \___/ 
                                                                            /_/                        
 */

//document.write("<script type='text/javascript' src = '../Model/Figure.js'></script>");

var Square = Figure.extend({
    init : function(pId, pColor, pBorderSize, pInitialPoint, pWidth, pHeight) {
    this._super(pId, pColor, pBorderSize, pInitialPoint);
    this.width = pWidth;
    this.height = pHeight;
    },
    
    getWidth : function () {
      return this.width;  
    },
    
    getHeight : function () {
        return this.height;
    },
    
    
    
    setWidth : function (pWidth) {
      this.width = pWidth;  
    },
    
    setHeight : function (pHeight) {
        this.height = pHeight;
    },
   
    
    drawFigure : function () {
    var rect = new Kinetic.Rect({
        x: this.initialPoint.getX(),
        y: this.initialPoint.getY(),
        width: this.width,
        height: this.height,
        opacity : 0.5,
        fill: this.colorList.getColor(16) ,
        stroke: this.colorList.getColor(0) ,
        draggable : true,
        strokeWidth: this.borderSize
      });

      return rect;
        
    },
    paintFigure : function () {
    var rect = new Kinetic.Rect({
        x: this.initialPoint.getX(),
        y: this.initialPoint.getY(),
        width: this.width,
        height: this.height,
        opacity : 0.5,
        fill: this.colorList.getColor(this.color),
        stroke: this.colorList.getColor(this.color) ,
        draggable : true,
        strokeWidth: this.borderSize
      });

      return rect;
        
    }
    
});