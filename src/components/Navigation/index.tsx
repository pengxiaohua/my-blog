import { FC } from "react";
import { Link } from "react-router-dom";

import { navList } from "../../utils/common";
import "./index.scss";

const Navigation: FC = () => {
  return (
    <div className="navigation-page">
      <ul className="navigation-page__nav-list font-bold dark:text-white text-[#0B1120]">
        {navList.map((nav) => (
          <li className="navigation-page__nav-item" key={nav.key}>
            <Link
              to={nav.route}
              className="hover:text-sky-500 dark:hover:text-sky-400"
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
