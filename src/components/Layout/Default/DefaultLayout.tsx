import { ReactNode } from 'react';
import Layout from 'antd/lib/layout'
import Head from 'next/head';

import './DefaultLayout.scss';

type DefaultLayoutProps = {
  children: ReactNode
  title: string;
  desc: string;
}

const { Header, Footer, Content } = Layout;
const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, title, desc } = props;
  return (
    <Layout className="DefaultLayout">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Head>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Tweet ©2020 Created by suptan</Footer>
    </Layout>
  )
}

export default DefaultLayout;
