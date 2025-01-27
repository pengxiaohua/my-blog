import { FC, useEffect, useState } from "react";

import SwitchMode from "./SwitchMode";
import Navigation from "./Navigation";
import githubLightIcon from "@/assets/github-light-icon.png";
import githubDarkIcon from "@/assets/github-dark-icon.png";
import wechatLightIcon from "@/assets/wechat-light-icon.png";
import wechatDarkIcon from "@/assets/wechat-dark-icon.png";
import wechatQcCode from "@/assets/wechat-qc-code.jpg";

const Header: FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const [showQcCode, setShowQcCode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const defaultTheme = "dark";

    if (!theme) {
      // theme初始化不存在时，根据系统主题设置
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      localStorage.setItem("theme", systemTheme || defaultTheme);

      if (systemTheme === "dark") {
        document.documentElement.classList.add(systemTheme);
      }

      setIsDark(systemTheme === "dark");
    } else {
      setIsDark(theme === "dark");
      // 此时html的class已经存在了dark或者light，不需要用add再次添加，需要用replace替换
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (isDark) {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleMouseEnter = () => {
    setShowQcCode(true);
  };

  const handleMouseLeave = () => {
    setShowQcCode(false);
  };

  return (
    <div className="custom-shadow w-[100vw] bg-white h-[60px] dark:bg-slate-900 sticky top-0 z-2">
      <div className="max-w-5xl m-auto h-[60px] flex justify-between items-center px-4">
        <div className="text-[#333] text-xl lg:text-3xl md:text-2xl sm:text-xl dark:text-white font-bold text-grey-800">
          xiaohua.run!
        </div>
        <Navigation />
        <div className="flex items-center relative">
          <img
            className="absolute top-[30px]"
            style={{ display: showQcCode ? "block" : "none" }}
            src={wechatQcCode}
            alt="wechat-qc-code"
          />
          <SwitchMode onChange={toggleDarkMode} initialChecked={isDark} />
          <div
            className="w-[22px] h-[22px] cursor-pointer ml-[10px] hidden md:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={isDark ? wechatDarkIcon : wechatLightIcon} alt="wechat" />
          </div>
          <a
            href="https://github.com/pengxiaohua"
            target="__blank"
            className="w-[20px] h-[20px] ml-[10px] cursor-pointer"
          >
            <img src={isDark ? githubDarkIcon : githubLightIcon} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
