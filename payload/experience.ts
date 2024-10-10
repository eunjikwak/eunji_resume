import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '알아이디',
      position: '웹개발자',
      startedAt: '2023-07',
      endedAt: '2024-08',
      descriptions: [
        '메타버스 플랫폼 ZEP 개발: ZEP에서 자체 언어인 ZEPscript(자바스크립트 기반)를 사용하여 다양한 기능과 위젯을 개발하고, 메타버스 환경 구축 업무를 담당했습니다.',
        '자바스크립트 및 리액트 기반 웹 개발: 자바스크립트와 React를 기반으로 웹사이트를 제작하며, 다양한 프로젝트를 수행했습니다.',
        'Next.js와 Firebase를 사용한 프로젝트: Next.js를 활용하여 웹사이트를 개발하고 Firebase와 데이터베이스를 연결하는 작업을 했습니다.',
        '배포 및 서버 관리: AWS와 Vercel을 사용하여 프로젝트를 배포하고, Lambda 함수를 사용한 서버리스 기능 구현을 했습니다.',
        'API 통합: 카카오 및 네이버 로그인 API와 구글 API를 통해 메일 기능을 구현하는 등, 다양한 서드파티 API를 연동했습니다.',
        'AI 챗봇 개발: OpenAI API를 사용하여 자동화된 AI 채팅 시스템을 구축했습니다.'
      ],
      skillKeywords: [
        'JavaScript',
        'React',
        'Next.js',
        'HTML',
        'CSS',
        'Firebase',
        'AWS',
        'Lambda',
        'Vercel',
        'TypeScript',
        'ZEPscript'
      ],
    },
  ],
};

export default experience;
