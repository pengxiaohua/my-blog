import React, { FC } from "react"

import { customHistory } from "../../utils"
import './index.scss'

interface IBlog {
  id: number;
  title: string;
  content: string;
  tags: string;
  author: string;
  readTimes?: number;
  createTime: string;
}

interface IProps {
  blog: IBlog
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const BlogItem: FC<Props> = (props) => {
  const { blog } = props

  const viewBlogDetail = (id) => {
    customHistory.push(`/blog-detail/${id}`)
  }

  return (
    <div
      className="blog-item border border-slate-900 dark:border-white"
      key={blog.id}
      onClick={() => viewBlogDetail(blog.id)}
    >
      <div className="blog-item__title dark:text-white">{blog.title}</div>
      <div className="blog-item__time-and-author dark:text-slate-400">
        <div className="blog-item__time">{blog.createTime}</div>
        <div className="blog-item__author">{blog.author}</div>
      </div>
      <div className="blog-item__content dark:text-white">{blog.content}</div>
      <div className="blog-item__bottom-info">
        <div className="blog-item__read-times dark:text-white">
          阅读次数：{blog.readTimes}
        </div>
        <div className="blog-item__tags dark:text-white">{blog.tags}</div>
      </div>
    </div>
  )
}

BlogItem.defaultProps = defaultProps

export default BlogItem
