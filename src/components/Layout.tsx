import { FC, ReactNode } from "react";
import { useLocation } from "react-router";

import Aside from "./Aside";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;

  // 当前页面是否是about-me页面
  const isAboutMe = useLocation().pathname === "/about-me";

  return (
    <div className="flex p-4 max-w-[1080px] m-auto min-h-calc">
      <main className="flex-1">
        {children}
      </main>
      {!isAboutMe && <Aside />}
    </div>
  );
};

export default Layout;
