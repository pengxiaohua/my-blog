import React, { FC } from "react"

import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Aside: FC<Props> = (props) => {
  return (
    <div className="aside-part border border-slate-900 dark:border-white">
      博客日历
      <br />
      词云分类
      <br />
      数据统计
    </div>
  )
}

Aside.defaultProps = defaultProps

export default Aside
