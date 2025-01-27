import { FC } from "react";

import ContentWrap from "../components/ContentWrap";
import { blogList } from "../mock/blog-list";
import BlogItem from "../components/BlogItem";
import Aside from "../components/Aside";
import { BlogType } from "../types/enums";

const Thinking: FC = () => {
  return (
    <div className="w-[100vw]">
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
