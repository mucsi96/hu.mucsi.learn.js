# Running grunt task in Cloud9 (debug is not working:( ) #
* I would show how could I run "grunt jasmine" on Cloud9
* Create file "run-test.js"
* Add this to file: 
process.chdir('grunt_dir');
require('grunt-cli/bin/grunt');
* Configure the Run&Debug:
    * Name: jasmine
    * File Path: grunt_dir/run-test.js
    * Runtime: Default
    * Cmd Line Args: jasmine

# Running grunt task in WebStorm (debug is not working:( ) #
* I would show how could I run "grunt jasmine" in WebStorm
* Create a Node.js run config:
    * Working directory: ...grunt_dir
    * Path to Node App JS File: C:/Users/.../AppData/Roaming/npm/node_modules/grunt-cli/bin/grunt
    * Application Parameter: jasmine

# Debugging jasmine tests in WebStorm (without grunt) #
* Using npm install jasmine-node
* Create file "run-tests.js" with the following content:
```
#!javascript
var fs = require('fs');
var vm = require('vm');
var includeInThisContext = function(path) {
    var code = fs.readFileSync(path);
    vm.runInThisContext(code, path);
}.bind(this);

includeInThisContext(__dirname+"/modules/eventPublisher.js");

require('jasmine-node/lib/jasmine-node/cli');
```
* Configure the Run&Debug:
    * Working directory: ...this_dir
    * Path to Node App JS File: run-tests.js
    * Application Parameter: specs <- Specs folder (Specs files should end with "*Spec.js")

