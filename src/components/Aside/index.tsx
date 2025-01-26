import { FC } from "react";

import "./index.scss";

const Aside: FC = () => {
  return (
    <div className="aside-part border border-slate-900 dark:border-white">
      博客日历
      <br />
      词云分类
      <br />
      数据统计
    </div>
  );
};

export default Aside;
