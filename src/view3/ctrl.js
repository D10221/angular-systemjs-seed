export class ViewCtrl{
	constructor($scope,version){
		$scope.scopedAppVersion = version;
	}
}
export var injectableViewCtrl = ['$scope','version', ViewCtrl] ;
