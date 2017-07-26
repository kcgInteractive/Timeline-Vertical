// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  "use strict";
  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed',
          sourcemap: 'none',
          //loadPath: require('node-bourbon').includePaths
        },
        files: {                         // Dictionary of files
          'dist/assets/css/app.css': 'src/assets/css/app.scss'
        }
      }
    },

    bake: {
        build: {
            options: {},
            files: {
              "dist/index.html": "src/index.html"
            }
        }
    },

    uglify: {
      options: {
        sourceMap: false
      },
      my_target: {
        files: {
          'dist/assets/js/app.js': 'src/assets/js/app.js'
        }
      }
    },


    copy: {
      images: {
        cwd: 'src/assets/img',  // set working folder / root to copy
        src: '**/*',           // copy all files and subfolders
        dest: 'dist/assets/img/',    // destination folder
        expand: true           // required when using cwd
      },
      html: {
        cwd: 'src/',  // set working folder / root to copy
        src: '**/*.html',           // copy all files and subfolders
        dest: 'dist/',    // destination folder
        expand: true           // required when using cwd        
      },
      transformations: {
        cwd: 'src/transformations/',  // set working folder / root to copy
        src: '**/*.html',           // copy all files and subfolders
        dest: 'dist/transformations/',    // destination folder
        expand: true           // required when using cwd 
      }
    },

    watch: { 
      sass: {
        files: ['src/assets/css/*.scss'],
        tasks: ['sass'],
        options : { nospawn : true, relative:true }
      },
      bake: {
        files: ['src/**/*.html', 'src/*.html', 'includes/*.html'],
        tasks: ['bake']
      },
      copy: {
        files: ['src/assets/img/**/*.jpg','src/assets/img/*.jpg','src/assets/img/*.svg', 'src/*.html', 'src/transformations/*.html'],
        tasks: ['copy']
      },
      uglify: {
        files: ['src/assets/js/*.js'],
        tasks: ['uglify']
      }
    },

    touch: {
      target: ['*.html']
    }



     

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bake');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-touch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
