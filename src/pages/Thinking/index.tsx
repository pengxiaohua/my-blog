import { FC } from "react";

import ContentWrap from "../../components/ContentWrap";
import { blogList } from "../../mock/blog-list";
import BlogItem from "../../components/BlogItem";
import Aside from "../../components/Aside";
import { BlogType } from "../../types/enums";
import "./index.scss";

const Thinking: FC = () => {
  return (
    <div className="thinking-page">
      <ContentWrap flex>
        <article className="home__blog-list">
          {blogList
            .filter((item) => item.type === BlogType.Thinking)
            .map((blog) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
        </article>
        <Aside />
      </ContentWrap>
    </div>
  );
};

export default Thinking;
