# League Of Legends ⚜️

Next.js를 사용한 프로젝트로, 리그 오브 레전드의 아이템과 챔피언 정보, 금주의 로테이션 정보를 얻을 수 있는 웹 사이트 입니다.<br>
[프로젝트 URL 바로가기 💻](https://lol-champions-site.vercel.app/champions)
<br><br>

## 프로젝트 미리보기🧚

- Home

- Item

- Champion

- Champion Detail

- Rotation

- 반응형
  <table>
    <tr>
      <td align="center">
        <img src="./public/images/반응형마이페이지.png" width="200px"><br>
        <strong>반응형 Home</strong>
      </td>
      <td align="center">
        <img src="./public/images/반응형마이페이지.png" width="200px"><br>
        <strong>반응형 Champion</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="./public/images/반응형테스트.png" width="200px"><br>
        <strong>반응형 Item</strong>
      </td>
      <td align="center">
        <img src="./public/images/반응형결과.png" width="200px"><br>
        <strong>반응형 Rotation</strong>
      </td>
    </tr>
  </table>

  <br><br>

## 프로젝트 소개📄

**📆 프로젝트 기간 : 2025.03.11 ~ 2025.03.18**

Next.js 기반으로 개발된 리그 오브 레전드 정보 제공 플랫폼으로, TypeScript를 활용해 타입 안정성을 보장하며 한국어 지원을 제공합니다. Tailwind CSS로 반응형 디자인을 적용하여 PC와 모바일 환경에서 최적화된 UI를 제공하며, TanStack Query를 활용해 서버 상태를 효율적으로 관리합니다.<br/>
주요 페이지로는 ISR 방식으로 챔피언 목록을 제공하는 `/champions`, 동적 렌더링 및 메타데이터 생성을 적용한 `/champions/[id]`, 클라이언트 사이드 렌더링으로 최신 정보를 조회할 수 있는 `/rotation`, SSG 방식으로 성능을 최적화한 `/items` 페이지가 있으며, 이를 통해 사용자들은 리그 오브 레전드 챔피언, 아이템, 로테이션 정보를 손쉽게 확인할 수 있습니다.

반응형 디자인이 적용되어, PC와 모바일 환경 모두에서 최적화된 화면을 제공합니다.
<br><br>

## 프로젝트 기술 스택💻

#### 📌 프로그래밍 언어 및 프레임워크

<img src="https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

#### 🎨 UI 스타일링

<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">

#### ✅ 코드 품질 및 포맷팅

<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">

#### 🗃️ 상태 관리

<img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=for-the-badge&logo=TanstackQuery&logoColor=white">

#### 🌐 배포

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<br><br>

## 프로젝트 주요 기능⚙️

- Next.js를 기반으로 개발되었습니다.
- TypeScript로 구성되어 타입 안정성을 제공합니다.
- 한국어 지원을 제공합니다.
- ISR, SSR, CSR, SSG를 적절히 활용해 최적화된 성능으로 리그 오브 레전드의 챔피언, 아이템, 로테이션 정보를 제공합니다.
- `tailwind CSS`를 사용해 반응형 디자인을 적용하였습니다.
- `TanStack Query (react query)`를 사용해 서버 상태를 효율적으로 관리합니다.
  <br><br>

## 트러블 슈팅🧑‍💻

[TroubleShooting 1 : Next.js의 next/image 컴포넌트](https://velog.io/@miiing_gaeng/LOL-%EC%B1%94%ED%94%BC%EC%96%B8-%EC%82%AC%EC%9D%B4%ED%8A%B8-TroubleShooting-1-Next.js%EC%9D%98-nextimage-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)

[요약]<br>
문제 ▶️ Next/Image 컴포넌트에 대한 이해 부족, 이벤트 버블링 발생
<br>해결 ▶️ Next/Image 컴포넌트 개념 정리, 필수 props와 `next.config.js` 파일 수정
<br>교훈 ▶️ 공식 문서를 꼼꼼히 읽고, Next/Image에 대한 복습 필요

## 프로젝트 후기✍️

이번 프로젝트의 목표는 Next.js와 TypeScript에 익숙해지는 것이었다. TypeScript는 여전히 헷갈리고 어렵지만, 협업을 위해 꼭 필요한 문법이므로 반복적인 연습이 필요하다. 또한, Next.js의 서버 컴포넌트에 대한 이해가 부족하다고 느꼈다. 앞으로 클라이언트 컴포넌트와 서버 컴포넌트의 차이를 명확히 익히고, 네 가지 렌더링 기법을 적절히 활용할 수 있도록 꾸준히 실습해보자.
