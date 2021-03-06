module.exports = function(grunt) {

    grunt.initConfig({
        foreman: {
            dev: {
                env: [ "development.env"],
                procfile: "Procfile.dev",
                port: 7000
            },
            production: {
                env: [ "application.env" ],
                procfile: "Procfile.dev",
                port: 9000
            }
        }
    });

    grunt.loadTasks("../../tasks");
    grunt.registerTask("default", "foreman");   // should default to dev
    grunt.registerTask("pro", "foreman:production");
};
