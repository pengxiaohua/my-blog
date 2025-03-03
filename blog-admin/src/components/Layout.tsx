import { ReactNode, FC } from 'react';
import { Layout as LayoutAntd, Menu, theme } from 'antd';

import { navListForAdmin } from '@/utils/constant';

const { Header, Content, Footer } = LayoutAntd;

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = (props: IProps) => {
    const { children } = props;
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <LayoutAntd className='absolute top-0 left-0 w-[100vw]'>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className='text-white w-[120px] text-lg'>博客后台管理</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['articles']}
                    items={navListForAdmin}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        height: 'calc(100vh - 160px)',
                        background: colorBgContainer,
                        marginTop: 24,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                xiaohua.run! ©{new Date().getFullYear()} Created by Xiaohua
            </Footer>
        </LayoutAntd>
    );
};

export default Layout;
