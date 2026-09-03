# 학부모 상담 예약 시스템

학부모가 편리하게 학교의 선생님과 상담을 예약할 수 있는 웹 애플리케이션입니다.

## 🎯 주요 기능

### 1. 상담 신청
- 학생 정보 (학생명, 학부모명, 연락처) 입력
- 상담 대상 선택:
  - 담임교사
  - 교과교사 (과목별 선택)
  - 전문상담교사(Wee클래스)
- 상담 날짜 및 시간 선택
- 특이사항 입력
- 폼 유효성 검사 및 에러 메시지

### 2. 예약 현황 조회
- 신청한 상담 목록 확인
- 예약 상세 정보 조회
- 예약 취소 기능

### 3. 반응형 디자인
- 데스크톱, 태블릿, 모바일 모두 최적화
- 사용자 친화적 UI/UX

## 🚀 시작하기

### 필수 요구사항
- Node.js 14.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/kdasom5252/parent-consultation-app.git
cd parent-consultation-app

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm start
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

## 📁 프로젝트 구조

```
parent-consultation-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ConsultationForm.js       # 상담 신청 폼
│   │   ├── ConsultationForm.css
│   │   ├── BookingList.js            # 예약 현황 리스트
│   │   ├── BookingList.css
│   │   ├── BookingCard.js            # 예약 카드 컴포넌트
│   │   └── BookingCard.css
│   ├── data/
│   │   └── teacherData.js            # 교사 데이터
│   ├── App.js                        # 메인 앱 컴포넌트
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 주요 컴포넌트

### ConsultationForm
- 상담 신청 폼
- 동적 필드 표시 (교과 선택 시 과목 드롭다운 노출)
- 폼 유효성 검사
- 에러 메시지 표시

### BookingList & BookingCard
- 예약한 상담 목록 표시
- 각 상담의 상세 정보 카드
- 예약 취소 기능

## 📝 교사 데이터 커스터마이징

`src/data/teacherData.js` 파일에서 학교의 실제 교사 정보로 수정할 수 있습니다:

```javascript
export const teacherData = {
  homeroom: [
    "1학년 1반 담임 (김철수)",
    // ...
  ],
  subject: {
    "국어": ["국어 A (정지원)", "국어 B (강민경)"],
    // ...
  },
  counselor: [
    "전문상담교사 (Wee클래스 오지은)",
    // ...
  ]
};
```

## 🔄 향후 개선사항

- [ ] 백엔드 연동 (Node.js/Express 또는 Python/Django)
- [ ] 데이터베이스 통합 (MongoDB, PostgreSQL)
- [ ] 이메일/SMS 알림 기능
- [ ] 관리자 대시보드
- [ ] 선생님 일정 관리 시스템
- [ ] 상담 후기 시스템
- [ ] 구글/네이버 로그인 연동

## 📱 기술 스택

- **Frontend**: React 18.2.0
- **Styling**: CSS3
- **상태 관리**: React Hooks (useState)
- **라우팅**: React Router (향후)

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 👨‍💻 개발자

- GitHub: [@kdasom5252](https://github.com/kdasom5252)

## 📞 문의

버그 리포트나 기능 제안은 [Issues](https://github.com/kdasom5252/parent-consultation-app/issues)에서 등록해주세요.
