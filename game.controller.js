angular.module('pq-clone', ['ui.router', 'ngMaterial'])

.config(function config($stateProvider){
	$stateProvider.state('index', {
		url: '',
		controller: 'GameController as gc',
		templateUrl: 'game.template.html'
	});
})

.controller('GameController', ['Assets', 'Names', function GameController(Assets, Names) {
	var game = this;

	game.vars = {};
	game.methods = {};
	game.services = {};

	game.vars.stuff = 42;
	game.vars.currentTask = '';
    game.vars.currentName1 = '';
    game.vars.currentName2 = '';

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
		game.vars.currentTask = Assets.getTask();
        game.vars.currentName1 = Names.GenerateName();
        game.vars.currentName2 = Names.getName();
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
            game.vars.currentTask = Assets.getTask();

           /* if (currentBar.updateBar) {
                game.methods.updateProgressBar(currentBar.updateBar);
            }*/
        }
    };

    game.methods.init();

}]);