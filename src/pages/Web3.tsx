import { FC } from "react";

import { blogList } from "../mock/blog-list";
import BlogItem from "../components/BlogItem";
import { BlogType } from "../types/enums";

const Web3: FC = () => {
  return (
    <div className="w-[100%] flex">
      <article className="flex-1">
        {blogList
          .filter((item) => item.type === BlogType.Web3)
          .map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
      </article>
    </div>
  );
};

export default Web3;
