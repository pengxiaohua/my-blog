import { FC } from "react";

const Aside: FC = () => {
  return (
    <aside className="p-4 box-border rounded-lg ml-4 w-[300px] border border-slate-900 dark:border-white hidden md:block">
      博客日历
      <br />
      词云分类
      <br />
      数据统计
    </aside>
  );
};

export default Aside;
