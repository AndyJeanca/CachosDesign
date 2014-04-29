/*
                                                ____               _           __     __  ___                                 
                                               / __ \_________    (_)__  _____/ /_   /  |/  /___ _____  ____ _____ ____  _____
                                              / /_/ / ___/ __ \  / / _ \/ ___/ __/  / /|_/ / __ `/ __ \/ __ `/ __ `/ _ \/ ___/
                                             / ____/ /  / /_/ / / /  __/ /__/ /_   / /  / / /_/ / / / / /_/ / /_/ /  __/ /    
                                            /_/   /_/   \____/_/ /\___/\___/\__/  /_/  /_/\__,_/_/ /_/\__,_/\__, /\___/_/     
                                                            /___/                                          /____/             
 */


//document.write("<script type='text/javascript' src = '../Model/Design.js'></script>");

var ProjectManager = Class.extend({
    init : function(){
        this.actualDesign = new Design("New");
         
        //This is the current position of the mouse. It is changed when the user click the kinectCanvas
        this.currentXpostion = 170;
        this.currentYposition = 170;
        
        //This actual figure is changed every time a figure is doubleClicked
        this.actualFigure = 0;
        
        this.kineticBase;
        //This layer contains the basic points and basic lines
        this.firstlayer = new Kinetic.Layer();
    },
    
    
    
    //This function is the one that as soon as the program load, it loads canvasManagment
    
    startCachosDesign : function(){
        
      this.kineticManagment();
      this.cleanLayer();
      this.reloadCachosDesign();
      this.actualDesign.createTennisBackground();
      this.drawFigures();
      this.drawBasicLines();
      this.drawBasicPoints();
      
    },
    
    paintCachosDesign : function(){
        
      this.kineticManagment();
      this.cleanLayer();
      this.reloadCachosDesign();
      this.actualDesign.createTennisBackground();
      this.firePaint();
      
    },
    cleanLayer : function(){
        this.firstlayer = new Kinetic.Layer();

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
            this.buildBasicPoint(basicPoint,amountOfPoints,this);
              
        }   
    },
    
    buildBasicPoint: function(pBasicPoint,pPositionOfPoint,pProject){
        var actualProject = pProject;
        var basicPointCircle = new Circle(pPositionOfPoint, 1, 4,pBasicPoint, 7, 1);
        var basicPoint = basicPointCircle.paintFigure();
        
        var drawInProject = function(){
            actualProject.firstlayer.draw();
        };
        
        var updatePoint = function(pNewPoint){
            actualProject.actualDesign.modificatePointById(pPositionOfPoint,pNewPoint);
            actualProject.startCachosDesign();
            
        };
        
        
        basicPoint.on('mouseover',function(){
            this.radius(12);
            drawInProject();
        });
        
        basicPoint.on('mouseout',function(){
            this.radius(7);
            drawInProject();
        });
        
        basicPoint.on('dragend',function(){
            var newBasicPoint = new point (pPositionOfPoint,this.getX(),this.getY(),5);
            updatePoint(newBasicPoint);
        });
        
        this.firstlayer.add(basicPoint);
        this.reloadCachosDesign();
           
    },
    
  
    reloadFigureClicked : function (pId){
                document.getElementById("actualFigureId").innerHTML=pId;
                var actualColor = this.actualProject.actualDesign.getFigureColorById(pId); 
                document.getElementById("actualFigureColor").innerHTML= actualColor ;
                var actualBorderSize = this.actualProject.actualDesign.getFigure(pId).getBorderSize();
                document.getElementById("actualFigureBorderSize").innerHTML=actualBorderSize;
    },
    
    buildFigure: function(pFigureDrawn,pPositionOfFigures,pProject){
        var actualProject = pProject;
        
        
        var drawInProject = function(){
            actualProject.firstlayer.draw();
        };
        
        var updatePoint = function(pNewPoint){
            actualProject.actualDesign.modificateFigureById(pPositionOfFigures,pNewPoint);
            actualProject.startCachosDesign();
            
        };
        
        var openConfigurationBox = function(pId){
                actualProject.reloadFigureClicked(pId);
                reloadFigureClicked(pId);
                
            
        };
        
        
        pFigureDrawn.on('mouseover',function(){
            this.opacity(1);
            drawInProject();
        });
        
        pFigureDrawn.on('mouseout',function(){
            this.opacity(0.5);
            drawInProject();
        });
        
        pFigureDrawn.on('dragend',function(){
            var newBasicPoint = new point (pPositionOfFigures,this.getX(),this.getY(),5);
            updatePoint(newBasicPoint);
        });
        
        pFigureDrawn.on('dblclick',function(){
            openConfigurationBox(pPositionOfFigures);
            
        });
        
        this.firstlayer.add(pFigureDrawn);
        this.reloadCachosDesign();
           
    },
    
   
    drawBasicLines : function(){
        this.actualDesign.createBasicLines();
        var actualLines= this.actualDesign.getBasicLines();
        for(var amountOfLines= 0;amountOfLines<5;amountOfLines++){
           var actualLine = actualLines[amountOfLines].drawFigure();
           this.firstlayer.add(actualLine);
           this.firstlayer.draw();
       }
       
    },
     pointFromCurrentPosition : function(){
        var pointInCurrentPosition = new point (0,this.currentXpostion,this.currentYposition,1);
        return pointInCurrentPosition;
     },
     
     endingPointFromCurrentPositionForLine : function(){
        var pointInCurrentPosition = new point (0,this.currentXpostion+40,this.currentYposition+40,1);
        return pointInCurrentPosition;
     },
    
    getActualDesign  : function(){
        return this.actualDesign;
    },

    setActualDesign :  function(pActualDesign){
      this.actualDesign = pActualDesign;  
    },
            
    addCircle :  function( pColor, pBorderSize,pInitialPoint, pRadius, pFill){
        this.actualDesign.addCircle(pColor, pBorderSize,pInitialPoint, pRadius, pFill);
     },

    addSquare : function (pColor, pBorderSize, pInitialPoint, pWidth, pHeight){
       this.actualDesign.addSquare(pColor, pBorderSize, pInitialPoint, pWidth, pHeight);
    },
    addLine :  function (pColor, pBorderSize,pInitialPoint, pEndingPoint){
         this.actualDesign.addLine(pColor, pBorderSize,pInitialPoint, pEndingPoint);


    },
    
    drawFigures : function(){
    this.actualDesign.reloadFigureLines();
    for(var actualFigure = 0; actualFigure<this.actualDesign.getAmountOfFigures();actualFigure++){
        var _FigureToDraw = this.actualDesign.getFigure(actualFigure);
        var figureDrawn = _FigureToDraw.drawFigure();
        this.buildFigure(figureDrawn,actualFigure,this);
        
    }

    },
   
    modifyActualFigureColor: function(pColor){
           this.actualDesign.modificateFigureColorById(this.actualFigure,pColor);
           this.reloadFigureClicked(this.actualFigure);
    },
            
    modifyActualFigureBorderSize: function(pBorderSize){
           this.actualDesign.modificateFigureBordeSizerById(this.actualFigure,pBorderSize);
           this.reloadFigureClicked(this.actualFigure);
    },
            
    modifySoleColor : function(pColor){
            this.actualDesign.modificateSoleColor(pColor);
            this.reloadFigureClicked(this.actualFigure);
    },
    
    modifySoleBorderSize : function(pBorderSize){
        this.actualDesign.modificateSoleBorderSize(pBorderSize);
        this.reloadFigureClicked(this.actualFigure);
     }, 
     
    modifyContourColor : function(pColor){
        this.actualDesign.modificateContourColor(pColor);
        this.reloadFigureClicked(this.actualFigure);
    },
    
    modifyContourBorderSize : function(pBorderSize){
        this.actualDesign.modificateSoleBorderSize(pBorderSize);
        this.reloadFigureClicked(this.actualFigure);
     },
   
    firePaint : function(){
     for(var actualFigure = 0; actualFigure<this.actualDesign.getAmountOfFigures();actualFigure++){
        var _FigureToDraw = this.actualDesign.getFigure(actualFigure);
        var figureDrawn = _FigureToDraw.paintFigure();
        this.firstlayer.add(figureDrawn);
        this.reloadCachosDesign();
        
    }
    

    }
     
    });