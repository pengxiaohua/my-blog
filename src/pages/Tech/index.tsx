import React, { FC } from "react"

import ContentWrap from "../../components/ContentWrap"
import { blogList } from "../../mock/blog-list"
import BlogItem from "../../components/BlogItem"
import Aside from "../../components/Aside"
import { BlogType } from "../../types/enums"
import './index.scss'

interface IProps { }

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Tech: FC<Props> = (props) => {
  return (
    <div className="tech-page">
      <ContentWrap flex>
        <article className="home__blog-list">
          {
            blogList.filter(item => item.type === BlogType.Tech).map(blog => <BlogItem blog={blog} key={blog.id} />)
          }
        </article>
        <Aside />
      </ContentWrap>
    </div>
  )
}

Tech.defaultProps = defaultProps

export default Tech
