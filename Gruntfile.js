module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("webui-popover.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			js: {
				src: ["src/jquery.webui-popover.js"],
				dest: "dist/jquery.webui-popover.js"
			},
			css:{
				src:["src/jquery.webui-popover.css"],
				dest:"dist/jquery.webui-popover.css"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.webui-popover.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.webui-popover.js"],
				dest: "dist/jquery.webui-popover.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		cssmin: {
         options: {
             keepSpecialComments: 0
         },
         compress: {
             files: {
                 'dist/jquery.webui-popover.min.css': ["dist/jquery.webui-popover.css"]
             }
         }
     	},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"dist/jquery.webui-popover.js": "src/jquery.webui-popover.coffee"
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	// grunt.loadNpmTasks("grunt-contrib-coffee");

	grunt.registerTask("default", ["jshint", "concat", "uglify","cssmin"]);
	grunt.registerTask("travis", ["jshint"]);

};
