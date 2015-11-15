angular.module('pq-clone', ['ui.router', 'ngMaterial'])

.config(function config($stateProvider){
	$stateProvider.state('index', {
		url: '',
		controller: 'GameController as gc',
		templateUrl: 'templates/game.template.html'
	});
})

.controller('GameController', ['Names', 'Tasks', 'Character', function GameController(Names, Tasks, Character) {
	var game = this;

	game.vars = {};
	game.methods = {};
	game.services = {};

	game.vars.character = '';
	game.vars.currentTask = '';

	game.vars.barSettings = {
        min: 0,
        max: 100
    };

	game.vars.progressBars = {
        taskDisplay: {
            currentValue: 0,
            displayValue: 0,
            updateValue: 20,
            updateBar: 'bar2'
        }
    };

    game.methods.init = function () {
        game.vars.character = new Character();
		game.vars.currentTask = Tasks.getRandomTask();
    };
    
	game.methods.click = function () {
        game.methods.updateProgressBar('taskDisplay');
    };

    game.methods.updateProgressBar = function (_name) {
        var currentBar = game.vars.progressBars[_name];
        if ((currentBar.currentValue + currentBar.updateValue) < game.vars.barSettings.max) {
            currentBar.currentValue += currentBar.updateValue;
            currentBar.displayValue = (currentBar.currentValue / game.vars.barSettings.max) * 100;
        } else {
            var carryOver = (currentBar.currentValue + currentBar.updateValue) - game.vars.barSettings.max;
            currentBar.currentValue = game.vars.barSettings.min + carryOver;
            currentBar.displayValue = (currentBar.currentValue / game.vars.barSettings.max) * 100;
            game.vars.currentTask = Tasks.getTask();

           /* if (currentBar.updateBar) {
                game.methods.updateProgressBar(currentBar.updateBar);
            }*/
        }
    };

    game.methods.init();

}]);