import { FC } from "react";

import "./index.scss";

interface IProps {
  children: any;
  flex?: boolean;
}

const ContentWrap: FC<IProps> = (props) => {
  const { children, flex = false } = props;

  return (
    <div className="content-wrap">
      <div
        className="flex justify-center"
        style={{ display: flex ? "flex" : "block" }}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentWrap;
