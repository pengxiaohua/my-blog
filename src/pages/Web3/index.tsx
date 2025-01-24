import React, {FC} from "react"

import ContentWrap from "../../components/ContentWrap"
import { blogList } from "../../mock/blog-list"
import BlogItem from "../../components/BlogItem"
import Aside from "../../components/Aside"
import { BlogType } from "../../types/enums"
import './index.scss'

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Web3: FC<Props> = (props) => {
  return (
    <div className="web3-page">
      <ContentWrap flex>
        <article className="home__blog-list">
          {
            blogList.filter(item => item.type === BlogType.Web3).map(blog => <BlogItem blog={blog} key={blog.id} />)
          }
        </article>
        <Aside />
      </ContentWrap>
    </div>
  )
}

Web3.defaultProps = defaultProps

export default Web3
