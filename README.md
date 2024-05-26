# Word Game

## Domain
- randomWords
    - Array
- targetWord
    - String


- inputWord
    - String


- correctAnswers
    - Array
- correctCount
    - String
- wrongAnswers
    - Array
- wrongCount
    - String
- remainingCount
    - String


- timeLimit
    - String

## Layouts

- Header
    - Reset button
    - Remaining count
- Body
    - Target word || Game over
    - Time limit
    - input box
- Footer
    - Correct answer box
    - Wrong answer box

## Process
- 무작위 단어군
    - https://random-word-api.herokuapp.com/word?number=50
    - 상기 api로 50개의 랜덤 단어 추출
- 시간 제한
    - setTimeout & setInterval을 이용한 시간 제한 표현 및 기능 구현
    - 제한 시간 도달 시 input disabled 처리
- 정답
    - 정답 배열에 추가하여 관리
- 오답
    - 오답 배열에 추가하여 관리
- 초기화
    - 모든 Domain 초기화 진행

## 수정사항
- Layout, children 만들기 &rarr; 이건 예시를 한 번 봐야 감이 잡힐듯 지금 규모에서는 모르겠음
- ~~slice 줄이기~~ &rarr; isStart 상태 관리 삭제
- ~~useEffect 불필요 코드 개선~~ &rarr; 초기 useEffect 개선 및 timer 불필요 부분 삭제
- ~~promise 상태 활용~~ &rarr; input에 대한 state 추가
- ~~timer 박살남~~ &rarr; game state 삭제 setTimeout으로 변경