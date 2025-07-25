import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      greeting: "Hi, I'm {{name}} 👋",
      description: "I'm a full-stack developer, founder of <1>ztreh.ru</1>.<br /> I am interested in low-level programming as a hobby.<br />Experienced in reverse engineering x86 applications, including analysis of packed, obfuscated, and protected binaries. Skilled in <3>C++</3>, <5>C#</5>, <7>PHP</7>, and <9>Lua</9> for tooling, scripting, and patching. Proficient with tools like <11>IDA Pro</11>, <13>Ghidra</13>, <15>x64dbg</15>, and <17>Cheat Engine</17>. Strong understanding of low-level internals, memory manipulation, and binary modification.",
      followers: "followers",
      blog: "Blog",
      contact: "Contact me",
      featured: "Featured Projects 🤗",
      featured_desc: "A collection of some side projects that have shipped recently.",
      stars: "Stars",
      issues: "Issues",
      forks: "Forks"
    }
  },
  ru: {
    translation: {
      greeting: "Привет, я {{name}} 👋",
      description: "Я full-stack разработчик, основатель <1>ztreh.ru</1>.<br /> Увлекаюсь низкоуровневым программированием.<br />Опытен в реверс-инжиниринге x86 приложений, включая анализ упакованных, обфусцированных и защищённых бинарников. Владею <3>C++</3>, <5>C#</5>, <7>PHP</7> и <9>Lua</9> для инструментов, скриптов и патчинга. Использую <11>IDA Pro</11>, <13>Ghidra</13>, <15>x64dbg</15> и <17>Cheat Engine</17>. Хорошо разбираюсь во внутренностях, манипуляциях с памятью и модификации бинарников.",
      followers: "подписчиков",
      blog: "Блог",
      contact: "Связаться",
      featured: "Избранные проекты 🤗",
      featured_desc: "Коллекция некоторых сторонних проектов, выпущенных недавно.",
      stars: "Звёзды",
      issues: "Проблемы",
      forks: "Форки"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 