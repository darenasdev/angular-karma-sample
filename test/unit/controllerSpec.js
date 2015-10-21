
describe('Test Student Controler', function(){

 beforeEach(module('myapp'));

var studentCtrl,
scope;

beforeEach(inject(function ($rootScope, $controller) {
scope = $rootScope.$new();
studentCtrl = $controller('studentCtrl', {
$scope: scope
});
}));
it('should create "students" model with 4 students', function() {
       expect(scope.students.length).toBe(4);
  });

});