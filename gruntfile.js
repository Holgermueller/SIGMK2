'use strict';
module.exports = grunt => {

  grunt.initConfig({

    watch: {
      less: {
        files: ['public/assets/less/*.less'],
        tasks: ['less', 'cssmin'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['public/js/**/*.js'],
        tasks: ['browserify','uglify'],
        options: {
          livereload: true
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['public/assets/less']
        },
        files: {
          'public/assets/css/style.css': 'public/assets/less/style.less'
        }
      }
    },

    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'public/assets/css',
          src: ["*.css", '!*.min.css'],
          dest: 'public/assets/css',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      my_target: {
        files: {
          'public/js/build/ugly.min.js': ['public/js/build/build.js']
        }
      }
    },

    browserify: {
      build: {
        src: [
          'public/js/**/*.js'
        ],
        dest: 'public/js/build/build.js',
        watch: true,
        keepAlive: true
      }
    },

    browserSync: {
      bsFiles: {
        src: [
          'public/assets/css/*.min.css',
          'public/js/**/*.min.js'
        ]
      },
      options: {
        livereload: true,
        watchTask: true,
        watchEvents: ['add', 'change', 'unlink', 'addDir', 'unlinkDir'],
        server: {
          baseDir: './public'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.task.registerTask('default', ['browserSync', 'watch']);
};
