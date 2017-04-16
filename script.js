(function(){
    var app = angular.module('todo', []); // cdn으로 엥귤러 라이브러리 로드 해야 사용 가능, 모듈을 정의하는 함수이다.
             /*
               angular.module('모듈이름', [])  
               이렇게하면 todo라는 엥귤러 모듈이 만들어 진다.
               두번째 파라미터는 배열이다. 
               
               html파일에서  ng-app="todo" 이렇게 할당해주면 사용 가능해진다.
               
               모듈이라는 것은 큰 컨테이너 이고 그 안에 컨트롤러, 서비스 등등이 있다.
               
             */
    app.controller('TodoCtrl',['$scope',function($scope){
        $scope.hobby = 'soccer';
        $scope.todo = { // 위에서 정의한 모듈을 구현한다.
            title : '모듈 정의하기 테스트',
            completed : false,
            createdAt: Date.now()
        }
    }]); 
       /*
         보통 컨트롤러 첫글자는 대문자로 => 두번째 파라미터는 배열로
         
         $scope을 주입 한다.  => 컨트롤러 안에서 $scope 변수를 사용 가능하다.
         
         $scope => 컨트롤러와 뷰, 즉 컨트롤러와 html 파일간의 연결 고리 역할을 한다.
       */
})();