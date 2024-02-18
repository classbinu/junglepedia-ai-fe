# 정글피디아 AI 
개발자 면접 준비는 정글피다아 AI  
[https://junglepedia.vercel.app/](https://junglepedia.vercel.app/)

1,189개의 기술 면접 질문이 준비되어 있어요  
AI 튜터에게 피드백을 받아 보세요

개발인원: 1인
개발기간: 2023/12/28 ~ 2024/01/10

## 백엔드 저장소
- [https://github.com/classbinu/junglepedia-ai-be]https://github.com/classbinu/junglepedia-ai-be

## 기획 의도
- 크래프톤 정글에서 매주 기술 쪽지 시험을 보면서 문답을 통한 학습의 효과를 느낌
- 적절한 기술 면접을 찾는 것이 번거롭고 답변 피드백을 받기 어려움
- CS학습에 도움을 받을 수 있는 AI 기반 기술 면접 피드백 서비스 필요


## 주요 기능
- 1,200여 개의 기술 면접 질문 랜덤 선택
- 기술 면접 질문 답변 작성 시 AI가 답변 평가
- 다른 사람이 작성한 기술 면접 답변 모아보기

## 기술 스택

### 백엔드
- Nest.js

### 프론트 엔드
- Next.js
- Tailwind CSS

### 데이터베이스
- PostgreSQL

### 배포
- Docker
- GitHub Actions
- AWS EC2

> 최초 배포 시에는 EC2 기반으로 배포하였으나,  
서버와 DB를 분리 및 프로젝트의 관리를 위해  
Paas기반으로 배포 환경을 변경하였습니다.

## 기술적 챌린지
### 1. 답변 클릭 후 뒤로 가기 시 답변 목록 스크롤 초기화
- 답변 목록 상태(State) 저장 후 필요한 경우에만 Fetch API로 데이터 요청

### 2. AI 답변 형식 일관성 없음
- 프롬프트 엔지니어링(Few Shot)으로 일관된 형식의 답변 생성

### 3. 컨테이너 이미지에 환경변수 파일 포함 시 보안 취약
- SSH로 인스턴스에 .env 파일 생성 후 컨테이너 생성 시 마운트

## 이전 프로젝트
[정글피디아 v1](https://github.com/classbinu/jungle-pedia)

## 관련 포스팅
[[크래프톤 정글 3기] 1/10(수) TIL](https://velog.io/@classbinu/%ED%81%AC%EB%9E%98%ED%94%84%ED%86%A4-%EC%A0%95%EA%B8%80-3%EA%B8%B0-110%EC%88%98-TIL)

## Contact
> 서비스와 코드는 누구든지 편하게 쓰셔도 됩니다.  
> 출처를 남겨주시면 감사하겠지만, 남기지 않으셔도 괜찮습니다.🙇‍♂️  
> 서비스에 대한 피드백, 질문은 언제든지 환영합니다.🥳
> classbinu@gmail.com
