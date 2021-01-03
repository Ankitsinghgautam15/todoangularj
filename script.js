angular.module("toDoList", [])

  .controller("toDoListCtrl", ['$scope',
    function($scope) {
      
      $scope.taskList = [
        {done: true,
        task: 'Do nothing'
      },
       
        {
        done: false,
        task: 'Walk the dog'
      }
      ];

    
      $scope.addTask = function(task) {
        
       
        $scope.taskList.push({
          done: false,
          task: task
        });
      };
 
    }
  ]);