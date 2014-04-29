/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    /* document.write("<script type='text/javascript' src = '../Model/CircleClass.js'></script>");
    * document.write("<script type='text/javascript' src = '../Model/ArcClass.js'></script>");
    * document.write("<script type='text/javascript' src = '../Model/LineClass.js'></script> ");
    * document.write("<script type='text/javascript' src = '../Model/SquareClass.js'></script>");
    * document.write("<script type='text/javascript' src = '../Model/LineClass.js'></script>");
    */
    document.write("<script type='text/javascript' src = '../Model/Design.js'></script>");
    
    // This variable is to get a design
    var _GlobalDesign = new Design("globalDesign");
    //-------------------------------------------------------------------------------------------//
    
    // This function is to reset the value of the global variable
    function resetGlobalDesign () {
        _GlobalDesign.setDesignName("globalDesign");
        var arrayGlobalFigure = _GlobalDesign.getFigures();
        var currentFigure = 0;
        for (currentFigure; currentFigure < _GlobalDesign.getAmountOfFigures(); currentFigure++) {
            arrayGlobalFigure.pop();
        }
        _GlobalDesign.setAmountOfFigures(0);
    };
    //-------------------------------------------------------------------------------------------//
 

    // This function is to get the status of the global variable
    function statusGlobalDesign () {
        alert(_GlobalDesign.getDesignName());
        var arrayOfFigures = _GlobalDesign.getFigures();
        var currentFigure = 0;
        for (currentFigure; currentFigure < arrayOfFigures.length; currentFigure++) {
            alert(arrayOfFigures[currentFigure].getType());
        }
        alert(_GlobalDesign.getAmountOfFigures());
    };
    //-------------------------------------------------------------------------------------------//
    
    
    
    function saveObject(pDesign) {
        var tempDesign = new Design("Nike Mercurial");
        tempDesign.addCircle("testCircle", "Circle", 123, 12, 2, 4, 32, false); 
        tempDesign.addSquare("testSquare", "Square", 344, 12, 5, 8, 9, 56, true);
        tempDesign.addLine("testLine", "Line", 123, 54, 76, 4, 7, 9);
        pDesign = tempDesign;
        
        var jsonDesign = {
            "Name": pDesign.getDesignName(),
            "Figures": addGeneralFigure(pDesign.getFigures())
        };
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Designs = Parse.Object.extend("Designs");
        var newDesign = new Designs();
        newDesign.set(jsonDesign);
        // Save
        newDesign.save(null, {
              success: function(object) {
                alert("The Design " + pDesign.getDesignName() + " was saved");
              },
              error: function(newDesign, error) {
                alert("Error to save design: " + pDesign.getDesignName() + " Error code" + error.code + "Error message" + error.message);
              }
        });
    };
    
    
    //-------------------------------------------------------------------------------------------//
    
    function addGeneralFigure(pArrayOfFigures) {
        var pArray = new Array ();
        var currentFigure = 0;
        for (currentFigure; currentFigure < pArrayOfFigures.length; currentFigure++) {
            alert(pArrayOfFigures[currentFigure].getType());
            if (pArrayOfFigures[currentFigure].getType() === "Circle")
                addCircleArray(pArray, pArrayOfFigures[currentFigure]);
            if (pArrayOfFigures[currentFigure].getType() === "Square")
                addSquareArray(pArray, pArrayOfFigures[currentFigure]);
            if (pArrayOfFigures[currentFigure].getType() === "Line")
                addLineArray(pArray, pArrayOfFigures[currentFigure]);
        }
        return pArray;
    };
    
    //-------------------------------------------------------------------------------------------//
    
    function addCircleArray (pArray, pCircle) {
        nArrayCircle = {"Id": pCircle.getId(), "Label": pCircle.getLabel(), "Type": "Circle", "Color": pCircle.getColor(),
        "BorderSize": pCircle.getBorderSize(), "X": pCircle.getX(), "Y": pCircle.getY(), "Radius": pCircle.getRadius(), "Fill": pCircle.getFill()};
        pArray.push(nArrayCircle);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    function addLineArray (pArray, pLine) {
        nArrayLine = {"Id": pLine.getId(), "Label": pLine.getLabel(), "Type": "Line", "Color": pLine.getColor(),
        "BorderSize": pLine.getBorderSize(), "X1": pLine.getX(), "Y1": pLine.getY(), "X2": pLine.getX2(), "Y2": pLine.getY2()};
        pArray.push(nArrayLine);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    function addSquareArray (pArray, pSquare) {
        nArraySquare = {"Id": pSquare.getId(), "Label": pSquare.getLabel(), "Type": "Square", "Color": pSquare.getColor(),
        "BorderSize": pSquare.getBorderSize(), "X": pSquare.getX(), "Y": pSquare.getY(), "Width": pSquare.getWidth(), "Height": pSquare.getHeight(), "Fill": pSquare.getFill()};
        pArray.push(nArraySquare);
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function retrieves a design in the cloud and replaces the values of the global design
    // with the values of the design retrieved.
    function loadDesign (pDesignName) {
            Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
            
            // Reset the gobal variable
            resetGlobalDesign();
            
            var Designs = Parse.Object.extend("Designs");
            var designQuery = new Parse.Query(Designs);
            designQuery.equalTo("Name", pDesignName);
            designQuery.find({
            success: function (results) {
                // Here, we can do something with the design retrieved
                if (results.length === 1) {
                    _GlobalDesign.setDesignName(pDesignName);
                    loadGlobalDesign(results[0].get('Figures'));
                    alert("The design " + pDesignName + " was retrieved succesfull ");
                }
                else {
                    alert("This name is incorrect");
                }
            },
            error: function (object, error) {
                alert("Error to load design: " + pDesignName + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    
    //-------------------------------------------------------------------------------------------//
    
    // This function receives figures and verifies the type of the figures and modifies the array of the global design 
    function loadGlobalDesign (pArray) {
        var currentFigure = 0;
        for (currentFigure; currentFigure < pArray.length; currentFigure++) {
            var actuallFigure = pArray[currentFigure];
            var typeOfFigure = actuallFigure.Type;
            if (typeOfFigure === "Circle")
                _GlobalDesign.addCircle(actuallFigure.Label, actuallFigure.Color, actuallFigure.BorderSize, actuallFigure.X, actuallFigure.Y, actuallFigure.Radius, actuallFigure.Fill);
            if (typeOfFigure === "Square")
                _GlobalDesign.addSquare(actuallFigure.Label, actuallFigure.Color, actuallFigure.BorderSize, actuallFigure.X, actuallFigure.Y, actuallFigure.Width, actuallFigure.Height, actuallFigure.Fill);
            if (typeOfFigure === "Line")
                _GlobalDesign.addLine(actuallFigure.Label, actuallFigure.Color, actuallFigure.BorderSize, actuallFigure.X1, actuallFigure.Y1, actuallFigure.X2, actuallFigure.Y2);
        }
        alert("Figures are loaded");
    };
    
    //-------------------------------------------------------------------------------------------//