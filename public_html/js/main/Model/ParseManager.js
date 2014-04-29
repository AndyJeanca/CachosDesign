/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





   // This variable is to get a design
   var _GlobalDesign = new Design("globalDesign");
   
   //-------------------------------------------------------------------------------------------//
   
   function isEmptyGlobalDesign() {
        if (_GlobalDesign.getDesignName() === "globalDesign") 
            return true;
        else
            return false;
   };
   
   //-------------------------------------------------------------------------------------------//
    
   function getGlobalDesign () {
        return _GlobalDesign;
    
   };
   
   //-------------------------------------------------------------------------------------------//
   
   // This function is to reset the global design
   function resetGlobalDesign () {
       var nDesignName = "globalDesign";
       var nFigures = [];
       var nSectors = [];
       var nLineFigures = [];
       var nBasicPoints = [];
       var nContourLines = [];
       _GlobalDesign.setDesignName(nDesignName);
       _GlobalDesign.setDesignFigures(nFigures);
       _GlobalDesign.setSectors(nSectors);
       _GlobalDesign.setFigureLines(nLineFigures);
       _GlobalDesign.setBasicPoints(nBasicPoints);
       _GlobalDesign.setBasicLines(nContourLines);
       _GlobalDesign.setAmountOfFigures(0);
   };
   
   //-------------------------------------------------------------------------------------------//
   
   // This function shows status of the global design
   
   
   function statusGlobalDesign () {
       if (_GlobalDesign.getDesignName() === "globalDesign")
           console.log("Empty");
       else {
           console.log(_GlobalDesign.getDesignName());
            var actualFigure = 0;
            var totalFigures = _GlobalDesign.getDesignFigures();
            for (actualFigure; actualFigure < totalFigures.length; actualFigure++) {
                var currentFigure = totalFigures[actualFigure];
                if (currentFigure instanceof Circle)
                    console.log("Circle");
                if (currentFigure instanceof Square)
                    console.log("Square");
                if (currentFigure instanceof Line)
                    console.log("Line");
            }
            console.log("Basic Lines: " + _GlobalDesign.getFigureLines()[0]);
            
            var aContourLine = 0;
            var totalContourLines = _GlobalDesign.getBasicLines();
            for (aContourLine; aContourLine < totalContourLines.length; aContourLine++) {
                console.log("ContourLine#" + aContourLine + " " + totalContourLines[aContourLine].getBorderSize());
            }
            
            
            var actualPoint = 0;
            var totalPoints = _GlobalDesign.getBasicPoints();
            for (actualPoint; actualPoint < totalPoints.length; actualPoint++) {
                console.log("Point#" + actualPoint + " " + totalPoints[actualPoint].getX() + " " + totalPoints[actualPoint].getY());
            }
            console.log("Amount of figures: " + _GlobalDesign.getAmountOfFigures());
            }
       
   };
   //-------------------------------------------------------------------------------------------//
   
   
   // This function converts a circle to json with his properties and add to pArray    
    function addCircleArray (pArray, pCircle) {
        nArrayCircle = {"Type": "Circle", "Color": pCircle.getColor(), "BorderSize": pCircle.getBorderSize(), "InitialPoint": pCircle.getInitialPoint(), "Radius": pCircle.getRadius(), 
        "Fill": pCircle.getFill()};
        pArray.push(nArrayCircle);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a line to json with his properties and add to pArray
    function addLineArray (pArray, pLine) {
        nArrayLine = {"Type": "Line", "Color": pLine.getColor(), "BorderSize": pLine.getBorderSize(), "InitialPoint": pLine.getInitialPoint(), "EndingPoint": pLine.getEndingPoint()};
        pArray.push(nArrayLine);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a square to json with his properties and add to pArray
    function addSquareArray (pArray, pSquare) {
        nArraySquare = {"Type": "Square", "Color": pSquare.getColor(), "BorderSize": pSquare.getBorderSize(), "InitialPoint": pSquare.getInitialPoint(), "Width": pSquare.getWidth(),
        "Height": pSquare.getHeight()};
        pArray.push(nArraySquare);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a arc to json with his properties and add to pArray
    function addArcArray (pArray, pArc) {
        nArrayArc = {"Type": "Arc", "Color": pArc.getColor(), "BorderSize": pArc.getBorderSize(), "InitialPoint": pArc.getInitialPoint(),
        "MiddlePoint": pArc.getMiddlePoint(), "EndingPoint": pArc.getEndingPoint()
        };
         pArray.push(nArrayArc);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a figure to JSON and add it to nArray, return an array of json figures
    function addGeneralFigure(pArrayOfFigures) {
        var nArray = new Array ();
        var currentFigure = 0;
        for (currentFigure; currentFigure < pArrayOfFigures.length; currentFigure++) {
            var actualFigure = pArrayOfFigures[currentFigure];
            if (actualFigure instanceof Circle)
                addCircleArray(nArray, actualFigure);
            if (actualFigure instanceof Line)
                addLineArray(nArray, actualFigure);
            if (actualFigure instanceof Square)
                addSquareArray(nArray, actualFigure);
            if (actualFigure instanceof Arc)
                addArcArray(nArray, actualFigure);
        }
        return nArray;
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a figure to JSON and add it to nArray, return an array of json figures
    function addSectorArray(pSectors) {
        var nArray = new Array ();
        var currentSector = 0;
        for (currentSector; currentSector < pSectors.length; currentSector++) {
            var actualSector = pSectors[currentSector];
            var nSector = {
                "Id": currentSector, "Color": actualSector.getColor(), "BorderSize": actualDector.getBorderSize(), "InitialPoint": actualSector.getInitialPoint()
            };
            nArray.push(nSector);
        }
        return nArray;
    };
    
    //-------------------------------------------------------------------------------------------//
    
    
    // This function converts a points Array to JSON and add it to jsonArray, return an array of json points
    function addBasicPointsArray (pArrayBasicPoints) {
        var jsonArray = new Array ();
        var currentPoint = 0;
        for (currentPoint; currentPoint < pArrayBasicPoints.length; currentPoint++) {
            var actualPoint = pArrayBasicPoints[currentPoint];
            var nPoint = {
                "Position": actualPoint.getPosition(), "PointX": actualPoint.getX(), "PointY": actualPoint.getY()
            };
            jsonArray.push(nPoint);
        }
        return jsonArray;
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function converts a line to JSON and add it to jsonArray, return an array of json lines
    function addContourLinesArray (pArrayContourLines) {
        var jsonArray = new Array ();
        var currentContourLine = 0;
        for (currentContourLine; currentContourLine < pArrayContourLines.length; currentContourLine++) {
            var actuallContourLine = pArrayContourLines[currentContourLine];
            addLineArray(jsonArray, actuallContourLine);
        }
        return jsonArray;
    };
    
     //-------------------------------------------------------------------------------------------//
     
     
     // This function receives an array of json figures, converts these json array in an array of figures
     function loadGlobalFigures (pArrayOfFigures) {
         var actuallFigure = 0;
         for (actuallFigure; actuallFigure < pArrayOfFigures.length; actuallFigure++) {
             var currentFigure = pArrayOfFigures[actuallFigure];
             var nType = currentFigure.Type;
             if (nType === "Circle" && currentFigure.Radius === 7) {
                 
             }
             if (nType === "Circle")
                 _GlobalDesign.addCircle(currentFigure.Color, currentFigure.BorderSize, currentFigure.InitialPoint, currentFigure.Radius, currentFigure.Fill);
             if (nType === "Square")
                 _GlobalDesign.addSquare(currentFigure.Color, currentFigure.BorderSize, currentFigure.InitialPoint, currentFigure.Width, currentFigure.Height);
             if (nType === "Line") {
                 _GlobalDesign.addLine(currentFigure.Color, currentFigure.BorderSize, currentFigure.InitialPoint, currentFigure.EndingPoint);
             }
         }
     };
     
     //-------------------------------------------------------------------------------------------//
     
     
     // This function receives an array of json figures, converts these json array to figures and loads to global design
     function loadGlobalSector (pSectors) {
         var arraySectors = [];
         var actualSector = 0;
         for (actualSector; actualSector < pSectors.length; actualSector++) {
             var currentSector = pSectors[actualSector];
             var nSector = new Figure(currentSector.Id, currentSector.Color, currentSector.BorderSize, currentSector.InitialPoint);
             arraySectors.push(nSector);
         }
         _GlobalDesign.setSectors(arraySectors);
     };
     
     //-------------------------------------------------------------------------------------------//
     
     
     // This function receives an array of json points, converts these json array to points and loads to global design
     function loadGlobalBasicPoints (pBasicPoints) {
         var currentPoint = 0;
         var nBasicPoint = [];
         for (currentPoint; currentPoint < pBasicPoints.length; currentPoint++) {
             var actuallPoint = pBasicPoints[currentPoint];
             var _nPoint = new point(actuallPoint.Position, actuallPoint.PointX, actuallPoint.PointY);
             nBasicPoint.push(_nPoint);
         }
         _GlobalDesign.setBasicPoints(nBasicPoint);
     };
     
     //-------------------------------------------------------------------------------------------//
     
     // This function receives an array of json lines, converts these json array in an lines and loads to global design
     function loadGlobalBasicLines (pContourLines) {
         var currentLine = 0;
         var nContourLines = [];
         for (currentLine; currentLine < pContourLines.length; currentLine++) {
             var actualLine = pContourLines[currentLine];
             var _nLine = new Line (actualLine.Color, actualLine.BorderSize, actualLine.InitialPoint, actualLines.EndingPoint);
             nContourLines.push(_nLine);
         }
         _GlobalDesign.setBasicLines(nContourLines);
     };
     
     //-------------------------------------------------------------------------------------------//


     // This function updates the values of the global design
     function loadGlobalDesign(pDesign) {
       _GlobalDesign.setDesignName(pDesign.get('Name'));
       loadGlobalFigures(pDesign.get('Figures'));
       loadGlobalSector(pDesign.get('Sectors'));
       _GlobalDesign.setFigureLines(pDesign.get('Lines'));
       loadGlobalBasicPoints(pDesign.get('BasicPoints'));
       loadGlobalBasicLines(pDesign.get('ContourLines'));
       _GlobalDesign.setAmountOfFigures(pDesign.get('AmountOfFigures'));
     };
     
      //-------------------------------------------------------------------------------------------//