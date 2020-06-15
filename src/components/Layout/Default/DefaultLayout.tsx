import { ReactNode } from 'react';
import Layout from 'antd/lib/layout'

import './DefaultLayout.scss';

type DefaultLayoutProps = {
  children: ReactNode
}

const { Header, Footer, Content } = Layout;
const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;
  return (
    <Layout className="DefaultLayout">
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Tweet ©2020 Created by suptan</Footer>
    </Layout>
  )
}

export default DefaultLayout;
