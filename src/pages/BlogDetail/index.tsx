import React, { FC } from "react"

import ContentWrap from "../../components/ContentWrap"

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BlogDetail: FC<Props> = (props) => {
  return (
    <div className="blog-detail">
      <ContentWrap>
        <div className="blog-detail__title">这是一个标题</div>
        <div className="blog-detail__content">这是内容区域</div>
      </ContentWrap>
    </div>
  )
}

BlogDetail.defaultProps = defaultProps

export default BlogDetail
