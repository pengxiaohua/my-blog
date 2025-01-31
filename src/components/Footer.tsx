import { FC } from "react";
import { Link } from "react-router";

const footer: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="footer__years">
        {`2022-${new Date().getFullYear()}`}
        <Link to="/back-stage" style={{ marginLeft: 10, fontSize: 14 }}>
          back-stage
        </Link>
      </div>
      <div className="footer__domain-name">www.xiaohua.run</div>
    </div>
  );
};

export default footer;
