import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '대한장애인일자리센터 홈페이지 개발',
      startedAt: '2024-07',
      endedAt: '2024-09',
      where: '알아이디',
      descriptions: [
        {
          content: '모바일 반응형 웹 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존의 데스크톱 중심 웹사이트를 다양한 기기에서 최적화된 사용자 경험을 제공하도록 개발',
            },
            { content: 'HTML, CSS, JavaScript, React 사용하여 반응형 웹 디자인 구현' },
          ],
        },
        {
          content: '문의 메일 송수신 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '고객이 웹사이트에서 직접 문의 메일을 보낼 수 있도록 메일 송수신 기능 개발',
            },
            { content: '고객 문의 건수 N% 증가, 실시간 문의 처리 시간 단축' },
            {
              content:
                'Nodemailer를 사용해 안정적이고 빠른 이메일 전송을 구현하고, 서버의 성능에 영향을 주지 않도록 비동기 처리로 최적화',
            },
          ],
        },
        {
          content: '웹사이트 배포 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Vercel 사용해 웹사이트 배포' },
            { content: '배포 후 서버 안정성과 성능 최적화를 달성' },
            { content: '기존에 cafe24를 사용했다가 vercel로 변경하여 비용을 절감' },
          ],
        },
      ],
    },
    {
      title: 'Reformer 홈페이지 개발',
      startedAt: '2024-02',
      endedAt: '2024-04',
      where: '알아이디',
      descriptions: [
        {
          content: '브랜딩 및 캐릭터 디자인 신규 서비스 홈페이지 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '사용자가 웹사이트를 통해 직접 문의를 보낼 수 있도록 Nodemailer를 사용해 이메일 송신 기능 개발',
            },
            { content: '포트폴리오 관리자 페이지 개발' },
            { content: 'Firebase를 사용해 이미지 등록 및 최적화 수행' },
            {
              content: 'SEO 최적화를 진행하여 메타태그 및 키워드 최적화로 사용자 유입 증대에 기여',
            },
            { content: 'Vercel로 배포하여 회사 비용절감' },
          ],
        },
      ],
    },
    {
      title: '자사 홈페이지 개편 및 유지보수',
      startedAt: '2023-09',
      endedAt: '2023-10',
      where: '알아이디',
      descriptions: [
        {
          content: '모바일 반응형 웹 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존의 데스크톱 중심 웹사이트를 다양한 기기에서 최적화된 사용자 경험을 제공하도록 리뉴얼',
            },
            { content: 'HTML, CSS, JavaScript, React 사용하여 반응형 웹 디자인 구현' },
          ],
        },
        {
          content: '포트폴리오 페이지 추가 및 관리 기능 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: '포트폴리오 페이지를 통해 잠재 고객의 관심을 유도' }],
        },
        {
          content: '문의 메일 송수신 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '고객이 웹사이트에서 직접 문의 메일을 보낼 수 있도록 메일 송수신 기능 개발',
            },
            { content: '고객 문의 건수 N% 증가, 실시간 문의 처리 시간 단축' },
            {
              content:
                'Nodemailer를 사용해 안정적이고 빠른 이메일 전송을 구현하고, 서버의 성능에 영향을 주지 않도록 비동기 처리로 최적화',
            },
          ],
        },
        {
          content: '웹사이트 배포 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '초기에는 Naver Cloud Console을 사용해 배포했으나, 서비스 확장성과 유지보수 효율성을 고려하여 Vercel로 전환',
            },
            {
              content:
                '전환 후 서버 안정성을 크게 개선하고, 다운타임을 최소화하여 사용자 경험을 향상',
            },
            { content: '배포 환경 변경으로 인해 N% 비용 절감 및 성능 최적화 달성' },
          ],
        },
      ],
    },
    {
      title: 'Cheang 홈페이지 개발',
      startedAt: '2023-10',
      endedAt: '2023-11',
      where: '알아이디',
      descriptions: [
        {
          content: 'HTML, CSS, JavaScript, Next.js 사용하여 반응형 웹 디자인 구현',
        },
        {
          content: '로그인 API 연동 및 회원가입 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Naver, KakaoTalk 로그인 API를 사용해 사용자 인증 시스템 구축' },
            { content: '로그인 기능을 통해 사용자 접근성 및 편의성 향상' },
          ],
        },
        {
          content: '회원가입 및 DB 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Firebase를 사용해 DB를 구축하고 회원가입 시스템 개발' },
            { content: '사용자 정보를 안전하게 관리하고 회원 데이터베이스 최적화' },
          ],
        },
        {
          content: '마이페이지 및 수강신청 폼 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '사용자 맞춤형 정보를 제공하는 마이페이지 기능 개발' },
            { content: '사용자가 쉽게 강좌를 신청할 수 있도록 수강신청 폼 구현' },
            { content: 'Firebase와의 연동을 통해 사용자 데이터와 신청 내역을 효율적으로 관리' },
          ],
        },

        {
          content: '웹사이트 배포 및 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'AWS Amplify를 사용해 웹사이트 배포' },
            { content: '배포 후 서버 안정성과 성능 최적화를 달성' },
          ],
        },
      ],
    },
    {
      title: '웰벤버스 NFT 정보 제공 웹사이트 개발',
      startedAt: '2023-07',
      endedAt: '2023-09',
      where: '알아이디',
      descriptions: [
        {
          content: '모바일 반응형 웹 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '협업회사에서 제공한 디자인을 기반으로 다양한 기기에서 최적화된 반응형 웹사이트 구현',
            },
            { content: 'HTML, CSS, JavaScript, React를 사용하여 반응형 디자인 개발' },
          ],
        },
        {
          content: 'NFT 기능 정보 제공',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'NFT 관련 정보를 제공하는 웹사이트 구축' },
            { content: '사용자에게 NFT 구매 및 이용 방법에 대한 정보를 효과적으로 전달' },
            {
              content: '정확하고 신뢰성 있는 정보를 제공하여 사용자 참여와 NFT 거래 활성화에 기여',
            },
          ],
        },
        {
          content: '웹사이트 배포',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'AWS를 사용해 웹사이트 배포 및 유지보수' },
            { content: '서버 안정성 확보 및 성능 최적화를 달성' },
          ],
        },
      ],
    },
    {
      title: '메타버스 ZepScript 기능 구현',
      startedAt: '2023-07',
      endedAt: '2024-10',
      where: '알아이디',
      descriptions: [
        {
          content: '메타버스 UI 제작 및 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'AI디지털 윤리스쿨 프로젝트 (NIA) - 퀴즈 해설 UI제작' },
            { content: '세렝게티 프로젝트 (후엠아이) - 캐릭터변경 및 자동차 탑승 기능 개발' },
            { content: '글빛초등학교 메타버스 (글빛초) - 엘리베이터 기능개발' },
            { content: '전남보건고등학교 메타버스 (전남보건고) - 세면대 개발' },
            { content: '삼호서중학교 메타버스 (삼호서중) - 킥보드 탑승 개발' },
            { content: '아동돌봄센터 메타버스 (시흥시) - 인벤토리, 투표 기능 개발' },
            { content: '봉화초등학교 메타버스 (봉화초) - 질문왕 UI개발' },
          ],
        },
        {
          content: '방탈출 제작',
          weight: 'MEDIUM',
          descriptions: [
            { content: '직업능력심사평가원 메타버스 (한국기술교육대학) - 교육 방탈출 제작' },
            {
              content:
                '서울여자간호대학교 메타버스 (서울여자간호대) - 응급실 시뮬레이션 방탈출 제작',
            },
          ],
        },
        {
          content: '교육 및 행사 게임 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '정신건강의날 프로젝트 (블루터치) - 로봇공격게임' },
            {
              content:
                '탄소중립센터메타버스 (포항시탄소중립지원센터) - 나무심기, 자전거게임, 분리수거게임',
            },
            { content: '영어교육메타버스 (CHEANG) - 영어주제찾기게임 , 단어찾기게임' },
            { content: '벅스리움 (시흥시) - 곤충잡기 게임' },
            { content: 'NURSphere (경희대학교) - 교육 시뮬레이션' },
            { content: '숨바꼭질(RID) - 자사 서비스 숨바꼭질 게임 개발' },
            { content: '헤지스 메타버스 (헤지스) - 옷 획득 기능 및 인벤토리 질문 게임 제작' },
            { content: '어진중학교 메타버스 (어진중) - 연도별 주식게임 개발' },
          ],
        },
        {
          content: '챗봇 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '포항제철초등학교 메타버스 (포항제철초) - 학교 소개 챗봇 개발' },
            { content: '선덕여고 메타버스 (선덕여고) - 학교소개 챗봇 UI, 기능 개발' },
          ],
        },
      ],
    },
  ],
};

export default project;
