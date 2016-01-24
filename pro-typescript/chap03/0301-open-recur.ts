/// <reference path="../typings/node/node.d.ts" />

import fs = require('fs');

module Listing0301OpenRecursion {
  interface FileItem {
    path: string;
    contents: FileItem [];
  }
  
  class FileReader {
    getFiles(path: string, depth: number = 0): FileItem[] {
      var fileTree: FileItem[] = [];
      var files = fs.readdirSync(path);
      for (var i = 0; i < files.length; i++) {
        var file = path + '/' + files[i];
        var stats = fs.statSync(file);
        var fileItem: FileItem;
        if (stats.isDirectory()) {
          // If file is a directory, add the FileItems in this directory.
          fileItem = {
            path: file,
            contents: this.getFiles(file, (depth + 1))
          };
        } else {
          // If this is a regular file, leave the contents empty.
          fileItem = {
            path: file,
            contents: []
          };
        }
        fileTree.push(fileItem);
      }
      return fileTree;
    }
  }
  
  class LimitedFileReader extends FileReader {
    constructor(public maxDepth: number) { super(); }
    
    getFiles(path: string, depth = 0) {
      // Add a checker before really calling super.getFiles.
      if (depth > this.maxDepth) {
        return [];
      }
      return super.getFiles(path, depth);
    }
  }
  
  var fileReader = new LimitedFileReader(1);
  var files = fileReader.getFiles('path');
  for (var i = 0; i < files.length; i++)
    console.log(files[i]);
}