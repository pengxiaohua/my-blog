import { FC, ReactNode } from "react";
import Aside from "./Aside";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex p-4 max-w-[1080px] m-auto">
      <main className="flex-1">
        {children}
      </main>
      <Aside />
    </div>
  );
};

export default Layout;
