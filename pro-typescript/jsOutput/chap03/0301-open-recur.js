/// <reference path="../typings/node/node.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fs = require('fs');
var Listing0301OpenRecursion;
(function (Listing0301OpenRecursion) {
    var FileReader = (function () {
        function FileReader() {
        }
        FileReader.prototype.getFiles = function (path, depth) {
            if (depth === void 0) { depth = 0; }
            var fileTree = [];
            var files = fs.readdirSync(path);
            for (var i = 0; i < files.length; i++) {
                var file = path + '/' + files[i];
                var stats = fs.statSync(file);
                var fileItem;
                if (stats.isDirectory()) {
                    // If file is a directory, add the FileItems in this directory.
                    fileItem = {
                        path: file,
                        contents: this.getFiles(file, (depth + 1))
                    };
                }
                else {
                    // If this is a regular file, leave the contents empty.
                    fileItem = {
                        path: file,
                        contents: []
                    };
                }
                fileTree.push(fileItem);
            }
            return fileTree;
        };
        return FileReader;
    })();
    var LimitedFileReader = (function (_super) {
        __extends(LimitedFileReader, _super);
        function LimitedFileReader(maxDepth) {
            _super.call(this);
            this.maxDepth = maxDepth;
        }
        LimitedFileReader.prototype.getFiles = function (path, depth) {
            if (depth === void 0) { depth = 0; }
            // Add a checker before really calling super.getFiles.
            if (depth > this.maxDepth) {
                return [];
            }
            return _super.prototype.getFiles.call(this, path, depth);
        };
        return LimitedFileReader;
    })(FileReader);
    var fileReader = new LimitedFileReader(1);
    var files = fileReader.getFiles('path');
    for (var i = 0; i < files.length; i++)
        console.log(files[i]);
})(Listing0301OpenRecursion || (Listing0301OpenRecursion = {}));
