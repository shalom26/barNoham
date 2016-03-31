var angular = require('angular');

let subModules = [
	'bn.sideNavCtrl',
	'bn.modules',
	'bn.connections',
	'bn.data',
	'bn.DS',
	'bn.config',
	'bn.costumersDialog',
	'bn.factoriesDialog',
	'bn.usersDialog',
	'bn.langsDialog',
	'bn.coursesDialog',
	"bn.directives",
	"bn.dialog",
	"bn.idbCrud",
	'bn.home',
	'bn.project',
	'bn.edit',
	'bn.validation',
	'bn.table',
	'bn.schedule'
];
subModules.forEach((moduleName) => {
	angular.module(moduleName, []);
});

require('./common/scss/index.scss');
function requireAll(context) {
	return context.keys().map(context);
}
requireAll(require.context('./common', true, /.js$/));
requireAll(require.context('./pages', true, /.js$/));
requireAll(require.context('./dialogBoxes', true, /.js$/));


let thirdParty = [
	'ngRoute',
	'ui.router',
	'treeControl',
	require('angular-ui-bootstrap'),
	'ngAnimate',
	'ngMaterial',
	'mdPickers',
	'js-data',
	'pascalprecht.translate',
	'ngMd5'
];


let dependencies = thirdParty.concat(subModules);
angular.module('bn', dependencies);


