angular.module('pq-clone', ['ui.router'])

.config(function config($stateProvider){
	console.log('State Provider is called');
	$stateProvider.state('index', {
		url: '',
		controller: 'GameController as gc',
		templateUrl: 'game.template.html'
	});
})

.controller('GameController', function GameController() {

	console.log('Controller is called');
	var game = this;

	game.vars = {};
	game.methods = {};

	game.vars.stuff = 42;*/

	/*this.vars.barSettings = {
        min: 0,
        max: 100
    };

	this.vars.progressBars = {
        bar1: {
            currentValue: 0,
            updateValue: 25,
            updateBar: 'bar2'
        },
        bar2: {
            currentValue: 0,
            updateValue: 20,
            updateBar: 'bar3'
        },
        bar3: {
            currentValue: 0,
            updateValue: 10
        }
    };

	this.methods.click = function (_name) {
        main.methods.updateProgressBar('bar1');
    };

    this.methods.updateProgressBar = function (_name) {
        var currentBar = main.vars.progressBars[_name];
        if ((currentBar.currentValue + currentBar.updateValue) < main.vars.barSettings.max) {
            currentBar.currentValue += currentBar.updateValue;
        } else {
            var carryOver = (currentBar.currentValue + currentBar.updateValue) - main.vars.barSettings.max;
            currentBar.currentValue = main.vars.barSettings.min + carryOver;

            if (currentBar.updateBar) {
                main.methods.updateProgressBar(currentBar.updateBar);
            }
        }
    };*/

});