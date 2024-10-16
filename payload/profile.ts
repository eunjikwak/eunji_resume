import { faEnvelope, faFolder, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBlogger, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '곽은지 포트폴리오',
    small: '(Kwak Eun Ji)',
  },
  contact: [
    {
      title: 'eje11@naver.com',
      link: 'mailto:eje11@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/eunjikwak',
      icon: faGithub,
    },
    {
      link: 'https://eundev.tistory.com',
      icon: faBlogger,
    },
    {
      title: '포트폴리오 (React,Next.js)',
      link:
        'https://changeable-swing-c6c.notion.site/React-Next-js-11899d9af4c2806f9643f1e1f843a766',
      icon: faFolder,
    },
  ],
  notice: {
    title: '더 자세한 포트폴리오는 포트폴리오 (React,Next.js)를 클릭해주세요.',
    icon: faBell,
  },
};

export default profile;
