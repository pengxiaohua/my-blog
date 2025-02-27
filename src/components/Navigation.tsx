import { FC, useState } from "react";
import { Link, useLocation } from "react-router";

import { IoClose, IoMenu } from "react-icons/io5";

import { navList } from "../utils/common";

const Navigation: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制导航栏是否展开

  const location = useLocation();

  return (
    <nav className="relative">
      {/* 大屏幕横向导航 */}
      <ul className="hidden md:flex w-[400px] justify-between items-center font-bold dark:text-white text-[#0B1120]">
        {navList.map((nav) => (
          <li className="cursor-pointer" key={nav.key}>
            <Link
              to={nav.route}
              className={`cursor-pointer ${location.pathname === nav.route
                ? "text-sky-500 dark:text-sky-400" // 高亮样式
                : "hover:text-sky-500 dark:hover:text-sky-400"
                }`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* 小屏幕菜单按钮，右侧显示 */}
      <div className="md:hidden flex justify-end items-center absolute top-0 left-0 w-full h-full">
        <div
          className="cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <IoClose size={26} className="text-black dark:text-white" />
          ) : (
            <IoMenu size={26} className="text-black dark:text-white" />
          )}
        </div>

        {/* 移动端-纵向导航 */}
        {isMenuOpen && (
          <ul className="absolute top-[10px] text-center bg-white text-black dark:bg-black dark:text-white custom-shadow right-0 w-[120px] p-4 space-y-4">
            {navList.map((nav) => (
              <li className="cursor-pointer" key={nav.key}>
                <Link
                  to={nav.route}
                  className={`cursor-pointer ${location.pathname === nav.route
                    ? "text-sky-500 dark:text-sky-400" // 高亮样式
                    : "hover:text-sky-500 dark:hover:text-sky-400"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
