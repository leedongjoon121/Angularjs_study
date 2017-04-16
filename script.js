(function(){
    var app = angular.module('todo', []); 
    app.controller('TodoCtrl',['$scope',function($scope){
        $scope.hobby = 'soccer';
        $scope.todos = [
        { 
            title : 'todo 컨트롤러 1',
            completed : false,
            createdAt: Date.now()
        },
        { 
            title : 'todo 컨트롤러 2',
            completed : false,
            createdAt: Date.now()
        },
        { 
            title : 'todo 컨트롤러 3',
            completed : true,
            createdAt: Date.now()
        }
        ];
        // todo 여러개를 출력할시 => 배열로 todos를 배열로 감싼다.
        
        $scope.remove  = function(todo){
            // 버튼을 클릭할 경우 todos 중에 하나를 삭제할 건데,
            // 그럴려면 index를 찾고 삭제 해야 한다.
            
           // find todo index int todos,  findIndex는 javascript 문법 이다.
         var idx = $scope.todos.findIndex(function(item){
             return item.id == todo.id;   // item의 id와 todo의 id가 같으면 idx를 리턴 한다.
         })
         
         if(idx > -1){ // 현재 todos의 인덱스는 0~2 
             $scope.todos.splice(idx,1) // splice는 제거 함수임 , todo를 1개씩 삭제 한다는 뜻
         }
            
            // remove from todos
        }
        
    }]); 

})();