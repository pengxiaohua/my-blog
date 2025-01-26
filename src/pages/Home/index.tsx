import { FC } from "react";

import ContentWrap from "../../components/ContentWrap";
import Aside from "../../components/Aside";
import { blogList } from "../../mock/blog-list";
import BlogItem from "../../components/BlogItem";
import "./index.scss";

const HomePage: FC = () => {
  return (
    <div className="home">
      <ContentWrap flex>
        <article className="home__blog-list">
          {blogList.map((blog) => (
            <BlogItem blog={blog} key={blog.id} />
          ))}
        </article>
        <Aside />
      </ContentWrap>
    </div>
  );
};

export default HomePage;
