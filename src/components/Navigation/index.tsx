import React, { FC } from "react"
import { Link } from "react-router-dom";

import { navList } from "../../utils/common";
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Navigation: FC<Props> = (props) => {
  return (
    <div className="navigation-page">
      <ul className="navigation-page__nav-list font-bold dark:text-white text-[#0B1120]">
        {
          navList.map(nav => (
            <li className="navigation-page__nav-item" key={nav.key}>
              <Link to={nav.route} className="hover:text-sky-500 dark:hover:text-sky-400">{nav.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Navigation.defaultProps = defaultProps

export default Navigation
