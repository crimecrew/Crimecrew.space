import { useEffect, useState, useRef } from "react";
import {
  FaGithub,
  FaStar,
  FaUserAlt,
  FaComments,
  FaUserFriends,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { useTranslation, Trans } from 'react-i18next';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [user, setUser] = useState({});
  const [userRepo, setUserRepo] = useState([]);
  const githubUsername = "0xd5f";
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fetchData = async () => {
    const userResponse = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );
    const userData = await userResponse.json();
    setUser(userData);

    const repoResponse = await fetch(
      `https://api.github.com/users/${githubUsername}/repos`
    );
    const repoData = await repoResponse.json();
    const sortedRepos = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    setUserRepo(sortedRepos);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    fetchData();
    AOS.init({
      once: true,
    });

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="App text-white"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="py-4 m-auto max-w-4xl">
        <nav className="flex items-center justify-between">
          <h1 className="text-3xl text-[#e2ebf8] font-medium font-['Fonarto']">
            <span className="text-[#05BFDB]">Personal</span>.card
          </h1>
          <div className="flex gap-x-3 items-center">
            <div className="relative mr-2" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-white hover:bg-[#182b42]/60 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1 opacity-80">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 18.75V21M4.219 4.219l1.591 1.591M18.19 18.19l1.591 1.591M3 12h2.25M18.75 12H21M4.219 19.781l1.591-1.591M18.19 5.81l1.591-1.591M7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
                </svg>
                <span className="font-medium select-none">
                  {i18n.language === 'ru' ? 'Русский' : 'English'}
                </span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-[#16263c] border border-[#182b42] rounded-md shadow-lg z-50">
                  <button
                    onClick={() => { changeLanguage('ru'); setDropdownOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-white hover:bg-[#182b42]/80 rounded-t-md ${i18n.language === 'ru' ? 'font-bold' : ''}`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => { changeLanguage('en'); setDropdownOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-white hover:bg-[#182b42]/80 rounded-b-md ${i18n.language === 'en' ? 'font-bold' : ''}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
            <a href="https://Soon/">
              <button className="w-32 h-10 rounded-md text-sm text-[#fff] transition duration-300 hover:text-[#05BFDB]  font-semibold ">
                {t('blog')}
              </button>
            </a>
            <a href="mailto:shanaider989@gmail.com">
              <button className="w-32 h-10 rounded-md text-sm border-2 border-[#05BFDB] text-[#05BFDB] bg-transparent transition duration-300 hover:text-[#fff] hover:bg-[#05BFDB] font-semibold">
                {t('contact')}
              </button>
            </a>
          </div>
        </nav>
        <main className="py-36">
          <div className="flex flex-row gap-x-5">
            <div className="flex-none w-40 h-40">
              <img
                src={user.avatar_url}
                className="w-40 h-40 rounded-full border-4 backdrop-blur-md transition duration-300 border-[#182b42]/30"
                alt="Profile"
              />
              <span className="flex font-semibold items-center justify-center mt-2">
                <FaUserFriends className="text-[#05BFDB] mr-2" />
                {user.followers} {t('followers')}
              </span>
            </div>
            <div className="flex-col">
              <div>
                <h1 className="text-3xl text-[#ffffff] font-medium font-['Fonarto']">
                  {t('greeting', { name: user.name })}
                </h1>
              </div>

              <p className="text-lg font-medium">
                <Trans i18nKey="description"
                  components={{
                    1: <a href="https://ztreh.ru" className="decoration-2 decoration-wavy underline hover:text-[#05BFDB] hover:decoration-[#e2ebf8] decoration-[#05BFDB] font-bold transition duration-150" />,
                    3: <span className="text-[#05BFDB]" />,
                    5: <span className="text-[#05BFDB]" />,
                    7: <span className="text-[#05BFDB]" />,
                    9: <span className="text-[#05BFDB]" />,
                    11: <span className="text-[#05BFDB]" />,
                    13: <span className="text-[#05BFDB]" />,
                    15: <span className="text-[#05BFDB]" />,
                    17: <span className="text-[#05BFDB]" />,
                  }}
                />
              </p>
              <div className="flex py-8 font-bold">
              <a href="https://t.me/OxD5F">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0088cc] text-[#fff] hover:text-[#0088cc] hover:bg-[#fff] m-2 p-2">
                    <FaTelegram /> Telegram
                  </button>
                </a>
                <a href="https://github.com/0xd5f">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                    <FaGithub /> GitHub
                  </button>
                </a>
                <a href="https://www.youtube.com/@oxd5f">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#FF0000] text-[#fff] hover:text-[#FF0000] hover:bg-[#fff] m-2 p-2">
                    <FaYoutube /> YouTube
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white font-semibold mt-9">
              {t('featured')}
            </h1>
            <p className="fp-paragraph">
              {t('featured_desc')}
            </p>
            <ul className="py-6 flex flex-col items-center justify-center">
              {userRepo.map((repo) => (
                <div
                  className="rounded-lg mt-2 max-h-md px-6 py-6 w-full backdrop-blur-md transition duration-300 bg-[#182b42]/30 hover:bg-[#182b42]/80"
                  key={repo.id}
                >
                  <a
                    href={repo.html_url}
                    className="relative block overflow-hidden rounded-lg p-4 sm:p-4 lg:py-px"
                    key={repo.id}
                  >
                    <div className="sm:flex sm:justify-between sm:gap-2 ">
                      <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                          {repo.name.replaceAll("-", " ")}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-400">
                          By {repo.owner.login}
                        </p>
                      </div>
                      <div className="hidden sm:block sm:shrink-0">
                        <img
                          src={repo.owner.avatar_url}
                          className="h-16 w-16 rounded-lg object-cover shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-1">
                      <p className="max-w-[90ch] font-semibold text-sm text-gray-200">
                        {repo.description}
                      </p>
                    </div>
                    <dl className="mt-6 flex gap-4 sm:gap-6">
                      <div className="flex flex-col">
                        <dt className="text-sm font-semibold text-gray-400 flex items-center">
                          <FaStar className="mr-1 text-[#ffffff]" />
                          {repo.stargazers_count} {t('stars')}
                        </dt>
                        <dd className="text-sm mt-2 text-gray-400 font-semibold flex justify-center items-center">
                          <FaComments className="mr-1 text-[#ffffff]" />
                          {repo.open_issues_count} {t('issues')}
                        </dd>
                      </div>
                      <div className="flex flex-col">
                        <dt className="text-sm font-semibold text-gray-400 flex items-center">
                          <FaUserAlt className="mr-1 text-[#ffffff]" />
                          {repo.forks_count} {t('forks')}
                        </dt>
                      </div>
                    </dl>
                    {repo.language && (
                      <div className="absolute bottom-0 right-0 text-sm mt-2 px-4 text-white font-semibold p-1 bg-[#05BFDB]/20 border border-[#05BFDB] rounded-xl flex justify-center items-center">
                        {repo.language}
                      </div>
                    )}
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
