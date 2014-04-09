var ProjectManager = Class.extend({
    init : function(){
        this.actualDesign = new Design("New");
        this.currentXpostion = 0;
        this.currentYposition = 0;
        this.kineticBase;
        //This layer contains the basic points and basic lines
        this.firstLayer;
    },
    
    
    
    //This function is the one that as soon as the program load, it loads canvasManagment
    
    startCachosDesign : function(){
      this.kineticManagment();
      this.firstlayer = new Kinetic.Layer();
      this.drawBasicPoints();
      this.drawBasicLines();
      this.reloadCachosDesign();
      
    },
    reloadCachosDesign : function(){
        this.kineticBase.add(this.firstlayer);
    },
            
    // This is the function that controls the interactions between the user and the canvas
    kineticManagment : function(){
         this.kineticBase = new Kinetic.Stage({
            container: 'container',
            width: 700,
            height: 400
          });

    },
    

    //These function are to controll the mose movement and to save the x and y position when it is clicked.
    
    drawBasicPoints :  function(){
        
        var actualPoints=this.actualDesign.getBasicPoints();
        for( var amountOfPoints = 0;amountOfPoints<9;amountOfPoints++){
            var basicPoint = actualPoints[amountOfPoints];
            this.buildBasicPoint(basicPoint,amountOfPoints);
            
            
              
        }   
    },
    
    buildBasicPoint: function(pBasicPoint,pPositionOfPoint){
        var basicPointCircle = new Circle(pPositionOfPoint, 1, 4,pBasicPoint, 7, 1);
        var basicPoint = basicPointCircle.drawFigure();


        basicPoint.on('mouseover',function(){
            this.radius(12);
            this.firstlayer.draw();

        });

        basicPoint.on('dragend',function(){
            var actualPositionPoint = new point(pPositionOfPoint,this.getX(),this.getY(),1);
            this.actualDesign.modificatePointById(pPositionOfPoint,actualPositionPoint);
            this.drawBasicLines();
            this.firstlayer.draw();
        });

        this.firstlayer.add(basicPoint);
        this.rebuildKinetic();
           
    },
    
    drawBasicLines : function(){
        this.actualDesign.createBasicLines();
        var actualLines= this.actualDesign.getBasicLines();
        for(var amountOfLines= 0;amountOfLines<5;amountOfLines++){
           this.firstlayer.add(actualLines[amountOfLines].drawFigure());
           this.firstlayer.draw();
       }
       
    },
    

    getActualDesign  : function(){
        return this.actualDesign;
    },

    setActualDesign :  function(pActualDesign){
      this.actualDesign = pActualDesign;  
    },
            
    addCircle :  function(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill){
        this.actualDesign.addCircle(pLabel, pColor,pBorderSize, pX, pY, pRadius, pFill);
     },

    addAsquare : function (pX, pY, pWidth, pHeight) {
      this.actualDesign.addSquare(pX, pY, pWidth, pHeight);
    },

    
   drawFigure : function(pId){
       var _FigureToDraw = actualDesign.getFigure(pId);
       var pointsToDraw = _FigureToDraw.drawFigure();
       drawFromList(pointsToDraw);
     },

    

    drawFromList : function(pListOfPoints){
        var ListOfPoints = [];
        ListOfPoints =pListOfPoints;

        var amountOfPointsLeft=ListOfPoints.length;

        for(var positionOfActualPoint = 0; positionOfActualPoint<amountOfPointsLeft;positionOfActualPoint++){
            var actualPoint = getPointfromListById(positionOfActualPoint,ListOfPoints);
            this.paintApixel(actualPoint.getX(),actualPoint.getY());
        }
    },

    getPointfromListById : function(pId,pListOfPoints){
           var ListOfPoints = [];
           ListOfPoints =pListOfPoints;
           var arrayWithfigureWithTheId = ListOfPoints.slice(pId,pId);
           var figureWithTheId = arrayWithfigureWithTheId.pop();
           return figureWithTheId;
         }
    });
    
      window.addEventListener('load',function(){
       var projectObject = new ProjectManager();
       projectObject.startCachosDesign();
  
  
        
     
   });