# Debugging grunt task in Cloud9 #
* I would show how could I debug "grunt jasmine" on Cloud9
* Create file "run-test.js"
* Add this to file: 
process.chdir('grunt_dir');
require('grunt-cli/bin/grunt');
* Configure the Run&Debug:
    * Name: jasmine
    * File Path: grunt_dir/run-test.js
    * Runtime: Default
    * Cmd Line Args: jasmine

# Debugging grunt task in WebStorm #
* I would show how could I debug "grunt jasmine" in WebStorm
* Create a Node.js run config:
    * Working directory: ...grunt_dir
    * Path to Node App JS File: C:/Users/.../AppData/Roaming/npm/node_modules/grunt-cli/bin/grunt
    * Application Parameter: jasmine
