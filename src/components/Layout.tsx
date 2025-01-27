import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className="max-w-[1080px] mx-auto flex justify-center">{children}</div>
  );
};

export default Layout;
