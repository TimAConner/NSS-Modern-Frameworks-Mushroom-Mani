module.exports = function(grunt){
    
    grunt.initConfig({
        browserify: {
            'dist/bundle.js': ['js/main.js']
        },
        jshint: {
            files: ['js/**/*.js'],
            options: {
                predef: ["document", "console", "EventSource"],//Ignore these even though we haven't defined them
                esnext: true, //Telling to use latest version of javascript
                globalstrict: true,
                globals: {},
                browserify: true
            }
        },
        sass: {
            dist: {
                files: {
                    'css/main.css': 'sass/sass.scss'
                }
            }
        }, 
        watch: {
            options: {
                reload: true
            },
            javascripts: {
                files: ['js/**/*.js'],
                tasks: ['jshint', 'browserify']
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ['jshint', 'sass', 'browserify', 'watch']);//Will do by default when you excecute grunt.

}