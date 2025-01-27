import { FC } from "react";

import { blogList } from "../mock/blog-list";
import BlogItem from "../components/BlogItem";
import Aside from "../components/Aside";
import { BlogType } from "../types/enums";

const Thinking: FC = () => {
  return (
    <div className="w-[100%] flex">
      <article className="flex-1">
        {blogList
          .filter((item) => item.type === BlogType.Thinking)
          .map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
      </article>
      <Aside />
    </div>
  );
};

export default Thinking;
