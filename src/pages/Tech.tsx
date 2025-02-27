import { FC } from "react";

import { blogList } from "../mock/blog-list";
import BlogItem from "../components/BlogItem";
import { BlogType } from "../types/enums";

const Tech: FC = () => {
  return (
    <div className="w-[100%] m-auto flex">
      <article className="flex-1">
        {blogList
          .filter((item) => item.type === BlogType.Tech)
          .map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
      </article>
    </div>
  );
};

export default Tech;
