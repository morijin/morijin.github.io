---
title: Git Bash 명령어
description: git bash 명령어 이것저것
image: 
---

**<span style="color:blue">git init</span>**
 : git 저장소 생성 (폴더안에..)

**<span style="color:blue">git status</span>**
 : 이것은 파일들의 상태를 확인한다. 관리대상(untraked files) 인지 아닌지 변경된 파일이 있는지  
git status -s : 간소한 확인

**<span style="color:blue">git add <파일명></span>**
 : 파일을 일단 관리 대상파일로 만든다. <파일명>부분에는 별을 입력하면 관리대상이 아닌 파일 모두가 add 된다.  
참고 : 1.**git add**로 대상파일 추가시 각 폴더에 들어가서 하나하나 넣어줘야 한다.  
*아, 그러고보니 폴더에서 **별**로 넣을 수 있구나..*
2.**git add**를 하고 파일 수정을 하면 수정하기 전 상태의 것이 남아있기 때문에 새롭게 **git add**를 해야 한다.

**<span style="color:blue">git clone</span>**
 : 파일을 복사해온다.
~~~
*예 : git clone http://github.com/깃허브주소주소 *
~~~
 뒤에 "/깃허브주소주소" - 깃허브주소주소 폴더안으로 들어간다.
 뒤에 "공란폴더명"을 붙이면 만들어준 폴더명으로 들어간다. 
~~~
예 : git clone http://github.com/add/add plus 이러면 plus 폴더로 clone 된다
~~~

**<span style="color:blue">.gitignore</span>**
 : 파일 무시하기
  폴더 내의 파일을 무시하고 add 할 때
  .gitignore 을 생성하여 내부에 무시할 파일명을 넣으면 무시된다.  
  **vi .gitignore** 입력하면 Vim 편집기화면으로 바뀌는데 *당황하지 말고*
  **i**를 입력하고 제외시킬 "파일명.확장자"를 작성, ESC 그리고 :wq 를 입력하면 잘 생성된거다.
  추후에 .gitinore를 add 시키면 되는데 얘만 따로 하는 방법은... 모르겠다??
  폴더에서 전체 add를 하면 되긴한데.. 찾아봐야겠음.

**<span style="color:blue">git rm</span>**
 : 파일 삭제하기
~~~
 git rm '파일명.확장자'
~~~
  여러개 지우는 방법은 모르겠고..
  폴더내의 파일 전체를 지우는 방법 
~~~
  git rm 폴더이름/\*.log
~~~


**<span style="color:blue">git diff</span>**
 : 변경된 내용 확인하기
 add 했던 파일과 그 후 수정한 파일의 변경된 부분을 확인해서 알려준다.
 --staged 를 추가하면 Staging Area와 비교해서 알랴준다.
 이것도 Vim 편집기로 넘어가기 때문에 :wq 입력하면 밖으로 나온다.

**<span style="color:blue">git commit</span>**
 : 작업의 작업이력을 저장소로 보낸다
~~~
git commit -m "커밋메시지 입력"
~~~
위처럼 넣면 커밋메시지를 인라인으로 넣을 수 있는데 
다른 방법
git commit 만 입력한다.
Vim 편집기에서 i를 입력
엔터치면 화면에 입력이 가능한 상태가 된다.
입력하고 ESC입력하고 ":" "wq"를 입력하면 밖으로 나온다.

[참조:회복맨블로그](http://recoveryman.tistory.com/268)  