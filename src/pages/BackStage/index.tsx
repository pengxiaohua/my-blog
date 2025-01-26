import { FC } from "react";
import ContentWrap from "../../components/ContentWrap";

import "./index.scss";

const BackStage: FC = () => {
  return (
    <div className="back-stage">
      <ContentWrap>后台管理系统</ContentWrap>
    </div>
  );
};

export default BackStage;
