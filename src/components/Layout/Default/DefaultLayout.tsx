import { ReactNode } from 'react';
import Layout from 'antd/lib/layout'
import Menu, { ClickParam } from 'antd/lib/menu';
import Head from 'next/head';

import './DefaultLayout.scss';
import { useRouter } from 'next/router';

type DefaultLayoutProps = {
  children: ReactNode
  pageTitle: string;
  title: string;
  desc: string;
  selectedMenu: string[];
}

const { Header, Footer, Content } = Layout;
const { Item } = Menu;
const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, pageTitle, title, desc, selectedMenu } = props;
  const router = useRouter();
  const handleOnClick = (e: ClickParam) => {
    router.push('/' + e.key);
  }
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
          selectedKeys={selectedMenu}
          mode="horizontal"
        >
          <Item key="hash-tag">Hashtag Search</Item>
          <Item key="user">User Search</Item>
        </Menu>
      </div>
      <Content>{children}</Content>
      <Footer className="DefaultLayout__footer">
        <span>Tweet ©2020 Created by suptan</span>
      </Footer>
    </Layout>
  )
}

export default DefaultLayout;
