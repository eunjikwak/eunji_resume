import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'TypeScript',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'Java',
      level: 2,
    },

  ],
};

const fameworks: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'Next.js',
      level: 3,
    },
    {
      title: 'React.js',
      level: 3,
    },
    {
      title: 'Firebase',
      level: 3,
    },

  ],
};
const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'VS Code'
    },
    {
      title: 'Git'
    },
    {
      title: 'Github'
    }, {
      title: 'AWS'
    },
    {
      title: 'Vercel'
    }
  ]
}



const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    fameworks,
    tools,

  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
