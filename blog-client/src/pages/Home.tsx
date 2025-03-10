import { FC } from "react";

import { blogList } from "../mock/blog-list";
import BlogItem from "../components/BlogItem";

const HomePage: FC = () => {
  return (
    <div className="w-[100%] flex">
      <article className="flex-1">
        {blogList.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </article>
      {/* <Aside /> */}
    </div>
  );
};

export default HomePage;
