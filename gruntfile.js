'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: { // Output Style
                    style: 'expanded',
                    /*    style: 'compressed',
                        style: 'compact',
                        style: 'nested'*/
                },
                files: {
                    'style.css': 'scss/allExmple.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('dev', [
        'sass',
        'watch:css',
    ]);
};
