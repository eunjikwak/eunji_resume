import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저는 스스로 목표를 설정하고 이를 꾸준히 실천해 나가는 책임감 있는 개발자입니다. 학창 시절, 프로그래밍 수업에서 처음 코딩을 접한 후, 코딩에 매력을 느껴 개발자로서의 꿈을 키우기 시작했습니다. 특성화고의 전공 제한으로 컴퓨터공학을 전공하지는 못했지만, 그 열정을 놓지 않고 대학 졸업 후 독학으로 정보처리기사 자격증을 취득하며 개발자로서의 첫걸음을 내디뎠습니다.',
    '하지만 자격증만으로는 실무에 부족함을 느껴 국비지원 IT 과정을 통해 실전 경험을 쌓았습니다. 이 과정에서 JAVA, Oracle, JDBC, Thymeleaf, HTML, CSS, JavaScript, Git, React, SpringBoot 등 다양한 기술을 배웠고, 이를 활용해 팀 프로젝트와 클론 코딩을 통해 실무 능력을 익혔습니다. 그중에서도 팀 프로젝트로 진행한 키오스크 시스템과 예약 시스템 홈페이지 제작은 저에게 많은 도전과 성장을 선사했습니다.',
    '이후, 메타버스 플랫폼 ZEP에서 개발 업무를 맡으며 자바스크립트를 기반으로 한 ZEPscript를 빠르게 습득했고, 이를 활용해 다양한 위젯과 기능을 개발하며 실무 경험을 넓혔습니다. 저는 항상 새로운 기술을 배우는 것에 흥미를 느끼며, 자바스크립트와 React를 사용한 웹 개발뿐만 아니라 Next.js, Firebase, AWS, Lambda 함수, OpenAI API와 같은 최신 기술들을 프로젝트에 적용해 왔습니다. 특히, 자동화된 AI 채팅 시스템을 구축하거나 카카오 및 네이버 로그인 API를 연동한 경험은 제 기술적 역량을 한층 더 발전시켰습니다.',
    '저는 1년 동안 혼자서 개발 업무를 도맡으며 문제 해결 능력과 자기 주도 학습의 중요성을 몸소 느꼈습니다. 새로운 도전에 주저하지 않고 빠르게 적응하며 성과를 낼 수 있는 점이 저의 강점입니다. 이러한 성장 기반을 바탕으로 귀사에서 더 넓은 범위의 프로젝트에 참여하며, 저의 역량을 발휘하고 싶습니다. 기초가 탄탄한 개발자로서 더 나은 성과를 이루기 위해 끊임없이 노력하겠습니다.',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
