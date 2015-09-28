var fs = require('fs'),
    extend = require('util')._extend,
    glob = require("glob"),
    sizeof = require('object-sizeof'),
    path = require('path');

function translationPlugin(options) {
    this.options = options || {};
}

translationPlugin.prototype.apply = function (compiler) {
    var self = this;
    compiler.plugin('emit', function (compiler, callback) {
        if (!self.options.output) {
            compiler.errors.push(new Error('Need an output for translations'));
            callback();
        }
        var languages = self.options.languages || [];
        var assets = {};

        languages.forEach(function(locale){
            var json = {};
            var outputFilename = path.join(self.options.output, locale + '.json');
            var files = glob.sync('./lib/**/*/translation/' + locale + '.json', {});
            for (j = 0; j < files.length; j++) {
                try{
                    newFile = JSON.parse(fs.readFileSync(files[j], 'utf-8'));
                    extend(json, newFile);
                }catch(err){
                    console.error('An error occurred while parsing ' + files[j]);
                }
            }

            assets[outputFilename] = {
                source: function () {
                    return JSON.stringify(json);
                },
                size: function () {
                    return sizeof(json);
                }
            };
        });

        extend(compiler.assets, assets);
        callback();

    });
};
module.exports = translationPlugin;
