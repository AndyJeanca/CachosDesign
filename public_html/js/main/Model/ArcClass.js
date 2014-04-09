var Arc = Figure.extend({  
    
    init : function(pId, pColor, pBorderSize,pInitialPoint, pMidlePoint, pEndingPoint) {
        
        this._Super(pId, pColor, pBorderSize, pInitialPoint);
        //_points is an array composed by two points the (initial point will be a point composed by the pX,pY, the middle point and the finalpoint
       this.midlePoint = pMidlePoint;
       this.endingPoint=pEndingPoint;
        
    },
    getMiddlePoint: function () {
        return this.midlePoint;
    },
    
    getEndingPoint :function () {
        return this.endingPoint;
    },
    
    
    setMiddlePoint : function (pStartingAngle) {
         this.midlePoint = pStartingAngle;
    },
    
    setEndingPoint : function (pEndingAngle) {
        this.endingPoint = pEndingAngle;
    },
     
    isInPointIn : function (pPoint) {
        var _pointInRange =[];
        _pointInRange = this.pointsInRange(this.initialPoint,this.middlePoint,_pointInRange);
        _pointInRange = this.pointsInRange(this.middlePoint,this.endingPoint,_pointInRange);
        
        for(var currentPointPosition = 0 ; currentPointPosition>_pointInRange.length;currentPointPosition++){
            if(pPoint.comparePosition(_pointInRange[currentPointPosition])){
                return true;
            }
            else{
                
            }
        }
        return false;
        
    },
    
    drawFigure : function () {
        var arc = new Kinetic.Line({
        points: [this.initialPoint.getX(),this.initialPoint.getY(),this.midlePoint.getX(),this.midlePoint.getX(),this.endingPoint.getX(),this.finalPoint.getY()],
        stroke: this.colorList.getColor(this.color),
        strokeWidth: this.borderSize,
        lineCap: 'round',
        draggable : true,
        tension: 1
      });
	return arc; 
    }
    
});