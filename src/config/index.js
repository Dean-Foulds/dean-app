module.exports = {
  siteTitle: 'Dean Foulds | Software Engineer',
  siteDescription: 'Dean Foulds is a full stack web developer and machine learning expert.',
  siteKeywords:
    'Dean Foulds, Machine Learning, Dean-Foulds, software engineer, front-end engineer, web developer, javascript, London',
  siteUrl: 'http://deanfoulds.xyz',
  siteLanguage: 'en_UK',
  googleAnalyticsID: 'UA-101606749-1',
  googleVerification: 'pbojwV5h5PPnFZCLt2EG6TBfpsabiCikVl4j-ht_ITQ',
  name: 'Dean Foulds',
  location: 'London, UK',
  email: 'deanfoulds@gmail.com',
  github: 'https://github.com/Dean-Foulds',
  twitterHandle: '@Dean-Foulds',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Dean-Foulds',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dean-foulds/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Dean-Foulds',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
