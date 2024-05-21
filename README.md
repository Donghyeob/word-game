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