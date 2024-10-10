import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '서경대학교',
      subTitle: '경영학과 전공 (졸업)',
      startedAt: '2016-03',
      endedAt: '2020-02',
    },
    {
      title: '경복비즈니스고등학교',
      subTitle: 'IT비즈니스과 전공(졸업)',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
