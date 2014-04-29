/* 
                                                                        ____                     
                                                                       / __ \____ ______________ 
                                                                      / /_/ / __ `/ ___/ ___/ _ \
                                                                     / ____/ /_/ / /  (__  )  __/
                                                                    /_/    \__,_/_/  /____/\___/ 

 */


// This function verify if a design already exists, if already exists shows alert, if not exists call to save Design
   function verifyExistenceOfDesign (pDesignName) {         
       Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Designs = Parse.Object.extend("Designs");
        var designQuery = new Parse.Query(Designs);
        designQuery.equalTo("Name", pDesignName);
        designQuery.find({
            success: function (results) {
                if (results.length === 1){
                    alert("Existe");
                }
                else {
                    alert("No existe");
                }
            },
            error: function (object, error) {
                alert("Error unexpected " + "Error code" + error.code + "Error message" + error.message);
            }
        });
    };
    
    //-------------------------------------------------------------------------------------------//
    
    
    // This function save a design in parse.com
    function saveDesign (pDesign) {
        var actualDesign = pDesign;
        
        var jsonDesign = {
            "Name": actualDesign.getDesignName(),
            "Figures": addGeneralFigure(actualDesign.getDesignFigures()),
            "Sectors": addGeneralFigure(actualDesign.getSectors()),
            "Lines": actualDesign.getFigureLines(),
            "BasicPoints": addBasicPointsArray(actualDesign.getBasicPoints()),
            "ContourLines": addContourLinesArray(actualDesign.getBasicLines()),
            "AmountOfFigures": actualDesign.getAmountOfFigures()
        };
 
        Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
        var Designs = Parse.Object.extend("Designs");
        var newDesign = new Designs();
        newDesign.set(jsonDesign);
        newDesign.save({
              success: function(object) {
                alert("The Design " + actualDesign.getDesignName() + " was saved");
              },
              error: function(newDesign, error) {
                alert("ERROR TO SAVE DESIGN: " + actualDesign.getDesignName() + " ERROR CODE: " + error.code + " ERROR MESSAGE: " + error.message);
              }
        });   
    };
    
    //-------------------------------------------------------------------------------------------//
    
    
    // This function retrieves a design, if it exists
     function retrieveDesign (pDesignName){
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
                        loadGlobalDesign(results[0]);
                        alert("The design " + pDesignName + " was retrieved");
                    }
                    else
                        alert("This design dosnÂ´t exist");
                },
                error: function (object, error) {
                    alert("Error to load design: " + "Error code" + error.code + "Error message" + error.message);
                }
            });
     };
     
     //-------------------------------------------------------------------------------------------//
     
     function updateDesign (pDesign) {
         Parse.initialize("pEK69HNgWf7MHx3Kh0kbfeJqwoxNcqgqN9Km2l7Z", "G6h36n6USeXs4C8pX66pJUH09hV0sZryo63xRYHE");
         var Designs = Parse.Object.extend("Designs");
        var designQuery = new Parse.Query(Designs);
        designQuery.equalTo("Name", pDesign.getDesignName());
        designQuery.find({
            success: function (results) {
                var nDesign = results[0];
                var jsonDesign = {
                    "Name": pDesign.getDesignName(),
                    "Figures": addGeneralFigure(pDesign.getDesignFigures()),
                    "Lines": pDesign.getFigureLines(),
                    "BasicPoints": addBasicPointsArray(pDesign.getBasicPoints()),
                    // Falta guardar contour lines
                    // Modificar addContourLinesArray
                    "AmountOfFigures": pDesign.getAmountOfFigures()
                };
                nDesign.set(jsonDesign);
                nDesign.save({
                      success: function(object) {
                        alert("Update");
                      },
                      error: function(newDesign, error) {
                        alert("ERROR TO SAVE DESIGN: " + pDesign.getDesignName() + " ERROR CODE: " + error.code + " ERROR MESSAGE: " + error.message);
                      }
                }); 

            },
            error: function (object, error) {
                alert("Error to load design: " + "Error code" + error.code + "Error message" + error.message);
            }
        });
     };
     
     //-------------------------------------------------------------------------------------------//