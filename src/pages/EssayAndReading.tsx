import { FC } from "react";

import { blogList } from "../mock/blog-list";
import BlogItem from "../components/BlogItem";
import Aside from "../components/Aside";
import { BlogType } from "../types/enums";

const EssayAndReading: FC = () => {
  return (
    <div className="w-[100vw]">
      <article className="home__blog-list">
        {blogList
          .filter((item) => item.type === BlogType.EssayAndReading)
          .map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
      </article>
      <Aside />
    </div>
  );
};

export default EssayAndReading;
