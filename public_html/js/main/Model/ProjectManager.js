/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 */

function ProjectManager(){
    //var actualDesign = new Design("New");
    var canvasContext =  document.getElementById("_Canvas").getContext('2d');
    var currentXpostion;
    var currentYposition;
    
    
    
    //This function is the one that as soon as the program load, it loads canvasManagment
    
    this.startCachosDesign = function(){
        alert("Hola");
          this.canvasManagment();
          this.drawBasicPoints();
    };
 
    // This is the function that controls the interactions between the user and the canvas
    this.canvasManagment = function(){
        canvasContext.canvas.addEventListener('mousemove',function(event){
        var xPosition = event.clientX - canvasContext.canvas.offsetLeft;
        var yPosition = event.clientY - canvasContext.canvas.offsetTop;
        document.getElementById('mousePositionText').innerHTML ='Mouse Position X '+xPosition+' , Y '+yPosition;},false);
        this.drawBasicPoints();
        
    };
    

    //These function are to controll the mose movement and to save the x and y position when it is clicked.
    
    this.drawBasicPoints= function(){
        var actualPoints=actualDesign.getBasicPoints();
       
        for( var amountOfPoints = 0;amountOfPoints<9;amountOfPoints++){
            var positionX = actualPoints[amountOfPoints].getX();
            var positionY = actualPoints[amountOfPoints].getY();
            this.paintApixel(amountOfPoints,amountOfPoints);
            
        }
        
    };


    this.getActualDesign  = function(){
        return actualDesign;
    };

    this.setActualDesign = function(pActualDesign){
      actualDesign = pActualDesign;  
    };


    this.addCircle = function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
        actualDesign.addCircle(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill);
     };

     this.addAsquare = function (pX, pY, pWidth, pHeight) {
      actualDesign.addSquare(pX, pY, pWidth, pHeight);
    };

    this.drawAline = function(pXstarting, pYstarting, pXending, pYending) {
        var designCanvas = document.getElementById("_Canvas").getContext("2d");
        designCanvas.moveTo(pXstarting, pYstarting);
        designCanvas.lineTo(pXending, pYending);
        designCanvas.stroke();
    };

    this.drawAarc = function (pX, pY, pRadius, pAngleStarting, pAngleEnding, pAntiClockWise) {
        var designCanvas = document.getElementById("_Canvas").getContext("2d");
        designCanvas.beginPath(); 
        designCanvas.arc(pX, pY, pRadius, pAngleStarting, pAngleEnding, pAntiClockWise); 
        designCanvas.stroke(); 
    };

    this.drawFigure=function(pId){
       var _FigureToDraw = actualDesign.getFigure(pId);
       var pointsToDraw = _FigureToDraw.drawFigure();
       drawFromList(pointsToDraw);
     };

    this.paintApixel= function(pX, pY) {  
        var designCanvas = document.getElementById("_Canvas").getContext("2d");
        designCanvas.fillRect(pX, pY, 1, 1);
        designCanvas.stroke(); 
    };

    this.drawFromList=function(pListOfPoints){
        var ListOfPoints = [];
        ListOfPoints =pListOfPoints;

        var amountOfPointsLeft=ListOfPoints.length;

        for(var positionOfActualPoint = 0; positionOfActualPoint<amountOfPointsLeft;positionOfActualPoint++){
            var actualPoint = getPointfromListById(positionOfActualPoint,ListOfPoints);
            paintApixel(actualPoint.getX(),actualPoint.getY());
        }
    };

    this.getPointfromListById = function(pId,pListOfPoints){
           var ListOfPoints = [];
           ListOfPoints =pListOfPoints;
           var arrayWithfigureWithTheId = ListOfPoints.slice(pId,pId);
           var figureWithTheId = arrayWithfigureWithTheId.pop();
           return figureWithTheId;
         };
    }
    
    window.addEventListener('load',function(){
        projectObject = new ProjectManager();
        projectObject.startCachosDesign();});