import { FC } from "react";
import { useParams } from "react-router";
import ContentWrap from "../components/ContentWrap";

const BlogDetail: FC = () => {
  const { id } = useParams();
  console.log({ id });

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
