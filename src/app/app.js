angular.module( 'myWishes', [
  'templates-app',
  'templates-common',
  'myWishes.home',
  'myWishes.about',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | myWishes' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

