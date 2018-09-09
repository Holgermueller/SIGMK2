module.exports = grunt => {
    grunt.initConfig({
        watch: {
            files: ['assets/**/*.less'],
            tasks: ['less'],
            options: {
                livereload: true
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    './assets/css/style.css': './assets/css/style.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
}