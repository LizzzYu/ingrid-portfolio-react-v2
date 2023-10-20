export enum NAV {
  MAIN = '首頁',
  ABOUT_ME = '關於我',
  EXPERIENCE = '經歷',
  WORKS = '作品集',
  CONTACT_ME = '聯絡我',
}

export enum NAV_EN {
  MAIN = 'main',
  ABOUT_ME = 'about_me',
  EXPERIENCE = 'experience',
  WORKS = 'works',
  CONTACT_ME = 'contact_me',
}

export const NAV_DATA = [
  { name: NAV.MAIN, link: NAV_EN.MAIN },
  { name: NAV.ABOUT_ME, link: NAV_EN.ABOUT_ME },
  { name: NAV.EXPERIENCE, link: NAV_EN.EXPERIENCE },
  { name: NAV.WORKS, link: NAV_EN.WORKS },
  { name: NAV.CONTACT_ME, link: NAV_EN.CONTACT_ME },
];
