import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu';
import Skeleton from 'antd/lib/skeleton';
import Head from 'next/head';
import { DefaultLayoutProps, useDefaultLayoutElement } from './DefaultLayoutHook';

import './DefaultLayout.scss';


const { Header, Footer, Content } = Layout;
const { Item } = Menu;
const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, pageTitle, title, desc } = props;
  const { selectedKey, switchMenu, handleOnClick } = useDefaultLayoutElement(props);

  return (
    <Layout className="DefaultLayout">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <Header>
        <h1 data-testid="page-title">{pageTitle}</h1>
      </Header>
      <div className="DefaultLayout__menu">
        <Menu
          onClick={handleOnClick}
          selectedKeys={selectedKey}
          mode="horizontal"
        >
          <Item key="hash-tag">Hashtag Search</Item>
          <Item key="user">User Search</Item>
        </Menu>
      </div>
      <Content>
        <div className="DefaultLayout__content">
          {switchMenu
          ? (<Skeleton
              active
            />)
          : (<>{children}</>)
          }
        </div>
      </Content>
      <Footer className="DefaultLayout__footer">
        <span>Tweet ©2020 Created by suptan</span>
      </Footer>
    </Layout>
  )
}

export default DefaultLayout;
