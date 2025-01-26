import { FC } from "react";

import ContentWrap from "../../components/ContentWrap";
import { blogList } from "../../mock/blog-list";
import BlogItem from "../../components/BlogItem";
import Aside from "../../components/Aside";
import { BlogType } from "../../types/enums";
import "./index.scss";

const Web3: FC = () => {
  return (
    <div className="web3-page">
      <ContentWrap flex>
        <article className="home__blog-list">
          {blogList
            .filter((item) => item.type === BlogType.Web3)
            .map((blog) => (
              <BlogItem blog={blog} key={blog.id} />
            ))}
        </article>
        <Aside />
      </ContentWrap>
    </div>
  );
};

export default Web3;
