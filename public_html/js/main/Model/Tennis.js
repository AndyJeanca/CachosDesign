/*
                                                                    ______                 _     
                                                                  /_  __/__  ____  ____  (_)____
                                                                   / / / _ \/ __ \/ __ \/ / ___/
                                                                  / / /  __/ / / / / / / (__  ) 
                                                                 /_/  \___/_/ /_/_/ /_/_/____/  
                               
 */

//document.write("<script type='text/javascript' src = '../Model/Figure.js'></script>");

var tennis = Figure.extend({
    init : function (pId, pColor, pBorderSize,pPointArray) {
        
       this._super(pId, pColor, pBorderSize, pPointArray[0]);
       this.pointArray=pPointArray;
       
    },
    
    
    drawFigure : function () {
      /* create the tennis shape by defining a
       * drawing function which draws it
       */
      var actualPoints =this.pointArray;
      var tennis = new Kinetic.Shape({
        sceneFunc: function(context) {
          context.beginPath();
          //Point A
         context.moveTo(actualPoints[0].getX(),actualPoints[0].getY());
         //Point A curve 
         context.quadraticCurveTo(actualPoints[1].getX(),actualPoints[1].getY(),actualPoints[2].getX(),actualPoints[2].getY());
         //Point C
         context.lineTo(actualPoints[3].getX(),actualPoints[3].getY());
         //PointD
         context.lineTo(actualPoints[4].getX(),actualPoints[4].getY());
         //pointE
         context.lineTo(actualPoints[5].getX(),actualPoints[5].getY());
         //pointE curve
          context.quadraticCurveTo(actualPoints[6].getX(),actualPoints[6].getY(),actualPoints[0].getX(),actualPoints[0].getY());
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        draggable: false,
        fill: 'white',
        stroke: this.colorList.getColor(0),
        opacity : 0.75,
        strokeWidth: 1
      });
      return tennis;

    },
    paintFigure : function () {
    
       var actualPoints =this.pointArray;
      var tennis = new Kinetic.Shape({
        sceneFunc: function(context) {
          context.beginPath();
          //Point A
         context.moveTo(actualPoints[0].getX(),actualPoints[0].getY());
         //Point A curve 
         context.quadraticCurveTo(actualPoints[1].getX(),actualPoints[1].getY(),actualPoints[2].getX(),actualPoints[2].getY());
         //Point C
         context.lineTo(actualPoints[3].getX(),actualPoints[3].getY());
         //PointD
         context.lineTo(actualPoints[4].getX(),actualPoints[4].getY());
         //pointE
         context.lineTo(actualPoints[5].getX(),actualPoints[5].getY());
         //pointE curve
          context.quadraticCurveTo(actualPoints[6].getX(),actualPoints[6].getY(),actualPoints[0].getX(),actualPoints[0].getY());
          context.closePath();
          // KineticJS specific context method
          context.fillStrokeShape(this);
        },
        draggable:false,
        fill: this.colorList.getColor(this.pColor),
        stroke: this.colorList.getColor(this.pColor),
        opacity : 0.75,
        strokeWidth: this.borderSize
      });
      return tennis;
    }
    
});