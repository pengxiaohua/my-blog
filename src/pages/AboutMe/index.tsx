import React, { FC } from "react"

import ContentWrap from "../../components/ContentWrap"
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const AboutMe: FC<Props> = (props) => {
  return (
    <div className="about-me">
      <ContentWrap>
        <h3>小米(武汉)</h3>
        <h3>高德地图</h3>
        <h3>小米(北京)</h3>
        <h3>金风科技</h3>
        <h3>搜房网</h3>
        <h3>武汉科技大学-信息管理与信息系统</h3>
      </ContentWrap>
    </div>
  )
}

AboutMe.defaultProps = defaultProps

export default AboutMe
