import { FC } from "react";

import ContentWrap from "../../components/ContentWrap";
import { blogList } from "../../mock/blog-list";
import BlogItem from "../../components/BlogItem";
import Aside from "../../components/Aside";
import { BlogType } from "../../types/enums";
import "./index.scss";

const EssayAndReading: FC = () => {
  return (
    <div className="essay-and-reading">
      <ContentWrap flex>
        <article className="home__blog-list">
          {blogList
            .filter((item) => item.type === BlogType.EssayAndReading)
            .map((blog) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
        </article>
        <Aside />
      </ContentWrap>
    </div>
  );
};

export default EssayAndReading;
