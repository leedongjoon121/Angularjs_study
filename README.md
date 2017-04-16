# 스터디내용
## 작성자 : 이동준
## 일자 : 2017-04-16

<br/>

### 1. 앵귤러에서의 여러가지 옵션은 아래에서 확인한다. 사용하고자 하는 내장함수를 찾아서 규격대로 사용한다
### https://docs.angularjs.org/api 
## ![사진](https://github.com/leedongjoon121/Angularjs_study/blob/AnLec2/img/angular_api.png?raw=true)

<br/>

### 2_1.todo모듈을 여러개 출력 해보자 : 이때 앵귤러의 ng-repeat이라는 디렉티브를 사용한다.
> ng-repeat은 반복문처럼 사용되며 for문 처럼 값이 들어간다.
>  <div ng-repeat="todo in todos"> ->  빠른 for문처럼 todos의 값이 todo로 

### 2_2. 이벤트를 이용하여 콜백함수를 정의해보자.  =>  버튼을 클릭해서 해당 todo를 지워보자
> 이때 핸들러기능으로 사용되는 것이 ng-click 이라는 디렉티브가 있다. 
> 당연히 콜백함수는 script.js 에서 구현한다.

## index.html - part1
## ![사진](https://github.com/leedongjoon121/Angularjs_study/blob/AnLec2/img/indexhtml1.JPG?raw=true)

<br/>

### script.js
> 컨트롤러 내부의 todos를 [] 배열로묶어주고, JSON 구조처럼 사용하며 접근할땐 인덱스로 접근
> index.html에서 호출했던 remove의 콜백함수를 정의해준다. (버튼 클릭하면 해당 todo 삭제)
## ![사진](https://github.com/leedongjoon121/Angularjs_study/blob/AnLec2/img/script.JPG?raw=true)

<br/>

### Result1
> 해당 todo의 삭제버튼을 누르면 삭제된다.
## ![사진](https://github.com/leedongjoon121/Angularjs_study/blob/AnLec2/img/result1.JPG?raw=true)

<br/>

### Result2
> Completed(체크된거), Active(체크안된거), All(전체) 에 따라 todo를 보여준다.  
## ![사진](https://github.com/leedongjoon121/Angularjs_study/blob/AnLec2/img/result2.JPG?raw=true)
