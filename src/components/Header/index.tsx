import React, { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Navigation from '../Navigation'
import githubLightIcon from '../../assets/github-light-icon.png'
import githubDarkIcon from '../../assets/github-dark-icon.png'
import wechatLightIcon from '../../assets/wechat-light-icon.png'
import wechatDarkIcon from '../../assets/wechat-dark-icon.png'
import darkModeIcon from '../../assets/dark-mode-icon.png'
import lightModeIcon from '../../assets/light-mode-icon.png'
import wechatQcCode from '../../assets/wechat-qc-code.jpg'
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Header: FC<Props> = (props) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  const [showQcCode, setShowQcCode] = useState(false)

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    if (theme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleMouseEnter = () => {
    setShowQcCode(true)
  }

  const handleMouseLeave = () => {
    setShowQcCode(false)
  }

  return (
    <div className="header bg-white dark:bg-slate-900">
      <div className="header__content">
        <Link to="/" className="header__logo font-bold dark:text-white text-grey-800">
          xiaohua.run!
        </Link>
        <Navigation />
        <div className="header__social-links">
          <img
          className="header__social-links__qc-code"
          style={{ display: showQcCode ? 'block' : 'none' }}
          src={wechatQcCode}
          alt="wechat-qc-code" />
          <div
            className="header__mode cursor-pointer w-5"
            onClick={() => {
              setIsDark(!isDark)
              window.__setPreferredTheme(isDark ? 'light' : 'dark')
            }}
          >
            <img src={isDark ? lightModeIcon : darkModeIcon} alt="mode" />
          </div>
          <div
            className="header__wechat-link cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={isDark ? wechatDarkIcon : wechatLightIcon} alt="wechat" />
          </div>
          <a
            href="https://github.com/pengxiaohua"
            target="__blank"
            className="header__github-link cursor-pointer"
          >
            <img src={isDark ? githubDarkIcon : githubLightIcon} alt="github" />
          </a>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = defaultProps

export default Header
