import { FC } from "react";

const footer: FC = () => {
  return (
    <div className="flex justify-center items-center h-[30px]">
      <div className="mr-4">
        {`2022-${new Date().getFullYear()}`}
      </div>
      <div>www.xiaohua.run</div>
    </div>
  );
};

export default footer;
