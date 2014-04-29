/*
                                                                    _______                     
                                                                   / ____(_)___ ___  __________ 
                                                                  / /_  / / __ `/ / / / ___/ _ \
                                                                 / __/ / / /_/ / /_/ / /  /  __/
                                                                /_/   /_/\__, /\__,_/_/   \___/ 
                                                                        /____/                  
 */

//document.write("<script type='text/javascript' src = '../Vendor/Class.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Colors.js'></script>");
//document.write("<script type='text/javascript' src = '../Model/Point.js'></script>");

var Figure = Class.extend({
   
    init : function(pId, pColor, pBorderSize, pInitialPoint) {
        this.id = pId;
        
        //Color is a number that represents the position of the color in the colorList
        this.color = pColor;
        this.borderSize = pBorderSize;
        
        this.initialPoint = pInitialPoint;
        
        //colorList is a list composed of 16 hex numbers that are used to represnt colors
        this.colorList = new Colors();
    },
    
    getId : function(){
        return this.id;
    }, 
    
    getLabel : function(){
        return this.label;
    },
        
    getType : function(){
    return this.type;
    },
        
    getColor : function(){
    return this.color;
    },
    
    getBorderSize : function(){
    return this.borderSize;
    },
        
    getInitialPoint : function(){
    return this.initialPoint;
    },
   
    
     setInitialPoint : function(pPoint) {
        this.initialPoint= pPoint;
    },
 
    setColor : function(pColor) {
        this.color = pColor;
    },
    
    setBorderSize : function(pBorderSize) {
        this.borderSize = pBorderSize;
    },
    
    setLabel : function(pLabel) {
        this.label = pLabel;
    },
    
    printInformationOfFigure : function () {
        
    },
    
    isInPointIn : function () {
        
    },
    
    drawFigure : function () {
        
    },
    
    paintFigure : function () {
        
    },
     
   
    movePoint : function(pPointX,pPointY) {
        this.initialPoint.setX(pPointX);
        this.initialPoint.setY(pPointY);

    },
            
    /*Points in range is a function that add all the points that are between the range given in pointInRange
    *We are giving the array because we want that no matter if the array is empty or with elements,
    *it takes the array push the elements and return the same array plus the new elements.*/
    
     pointsInRange : function(pInitialPoint,pEndingPoing,pPointsInRange){
        for (var actualPointY=pInitialPoint.getY(); actualPointY<pEndingPoing.getY(); actualPointY++){
            for (var actualPointX=pInitialPoint.getX(); actualPointY<pEndingPoing.getX(); actualPointX++){
                var actualPoint = new point(actualPointX,actualPointY);
                pPointsInRange.push(actualPoint);
            }
        }
        return pPointsInRange;
    }
});