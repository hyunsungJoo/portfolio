# portfolio

## Project setup
# 개인 포트폴리오 웹사이트

이 리포지토리는 개인 포트폴리오 웹사이트 소스 코드입니다. Vue.js로 작성된 SPA이며, 본 레포지토리의 목적은 개인 프로젝트, 기술 스택, 연락처 등을 소개하기 위함입니다.

## 주요 기능
- 프로젝트 카드(앞/뒤 뒤집기)로 프로젝트 상세 정보 표시
- 기술 스택 아이콘 및 경험 소개
- 반응형 레이아웃(기본적인 그리드/플렉스 사용)

## 기술 스택
- Vue.js
- JavaScript
- HTML / CSS

## 개발 환경 설정 및 실행
로컬에서 개발 서버를 실행하려면 프로젝트 루트에서 다음 명령을 실행하세요.

```
npm install
npm run serve
```

프로덕션 빌드는 다음으로 생성합니다.

```
npm run build
```

코드 린트 및 자동 수정을 실행하려면:

```
npm run lint
```

## 프로젝트 구조 (요약)
- `src/` : 애플리케이션 소스 코드
	- `components/` : 뷰 컴포넌트들 (`MyProjects.vue`, `MySkills.vue` 등)
	- `assets/` : 이미지 및 정적 자원
	- `App.vue`, `main.js` : 엔트리 포인트

## 커스터마이징 팁
- 프로젝트 목록 수정: `src/components/MyProjects.vue`의 `projects` 배열을 편집하세요.
- 기술 아이콘 변경: `src/components/MySkills.vue`의 `skills` 배열과 `src/assets/skills/` 폴더 내 이미지를 변경하세요.

## 배포
- 빌드된 정적 파일은 `dist/`에 생성됩니다. Netlify, Vercel, GitHub Pages 등 정적 호스팅 서비스에 업로드하여 배포할 수 있습니다.


