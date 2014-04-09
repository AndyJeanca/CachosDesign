
module.exports=function(grunt){
  // Configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    add: {
        src: "js/main/*.js",
        dest: "main.min.js"
        
    },
    // Watch for changes on the CSS, JS and HTML files
    watch: {
      // Main JS files
      mainScripts: {
        files: [BASE_URL + 'js/main/**/*.js', BASE_URL + 'js/main/*.js'],
        tasks: add,
        options: {
          spawn: false
        }
      }}
   
      
      // HTML Files
    });
       grunt.registerTask('default',[
           'watch'   
      ]);
};
