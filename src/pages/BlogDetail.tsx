import { FC } from "react";

import ContentWrap from "../components/ContentWrap";

const BlogDetail: FC = () => {
  return (
    <div className="blog-detail">
      <ContentWrap>
        <div className="blog-detail__title">这是一个标题</div>
        <div className="blog-detail__content">这是内容区域</div>
      </ContentWrap>
    </div>
  );
};

export default BlogDetail;
