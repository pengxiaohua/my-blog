import { FC, ReactNode } from "react";
import { useLocation } from "react-router";

import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;
  const { pathname } = useLocation();
  // 当前页面是否是about-me页面
  const isAboutMe = pathname === "/about-me";

  return (
    <>
      <Header />
      <div className="flex p-4 max-w-[1080px] m-auto min-h-calc">
        <main className="flex-1">
          {children}
        </main>
        {!isAboutMe && <Aside />}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
