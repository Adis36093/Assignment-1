'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    // jit-grunt makes sure to load any other node modules that are reuired in the project
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    // all configuration related to grunt is done here
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },

        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                }
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: './'
                }
            }
        }
});

grunt.registerTask('css', ['sass']);
grunt.registerTask('default', ['browserSync', 'watch']);


}
        