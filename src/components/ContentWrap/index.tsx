import { FC } from "react";

import Header from "../Header";
import Footer from "../Footer";
import "./index.scss";

interface IProps {
  children: any;
  flex?: boolean;
}

const ContentWrap: FC<IProps> = (props) => {
  const { children, flex = false } = props;

  return (
    <div className="content-wrap">
      <Header />
      <div
        className="content-wrap__content"
        style={{ display: flex ? "flex" : "block" }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default ContentWrap;
