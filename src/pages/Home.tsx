import { FC } from "react";

import Aside from "../components/Aside";
import { blogList } from "../mock/blog-list";
import BlogItem from "../components/BlogItem";

const HomePage: FC = () => {
  return (
    <div className="w-[100vw] flex p-4">
      <article className="flex-1">
        {blogList.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </article>
      <Aside />
    </div>
  );
};

export default HomePage;
