(function(){
	var updatePath = "D:\\hcom_readonly\\hcom\\Assets\\CommonAssetPack\\Main",
	updateCommand = "update-ui.bat",
	chokidar = require('chokidar'),
	watcher,
	change = $("#change"),
	terminal = require('child_process').spawn('cmd');

	terminal.stdout.on('data', function (data) {
	    //println(data);
	});

	terminal.stderr.on('data', function (data) {
	    //println(data);
	});

	var println = function (data) {
		change.append(data+"<br/>");
	};

	var startWatcher = function() {
		watcher = chokidar.watch('D:/hcom_readonly', {ignored: /^\./,ignoreInitial:true});

		watcher
	  .on('add', function(path) {println('File '+ path + ' has been added ');update();})
	  .on('change', function(path) {println('File '+ path+ ' has been changed ');update();})
	  .on('unlink', function(path) {println('File '+ path+ ' has been removed ');})
	  .on('error', function(error) {println('Error happened '+ error);});
	}

	var stopWatcher = function() {
		watcher.close();
	}

	var update = function() {
		stopWatcher();
		clear();
		terminal.stdin.write('D:\n');
	    terminal.stdin.write('cd '+updatePath+ '\n');
	    terminal.stdin.write(updateCommand+ '\n');
	    startWatcher()
	};

	

	var clear = function () {
		change.html("");
	};

	startWatcher();
}());