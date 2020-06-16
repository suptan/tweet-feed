import React, { useMemo } from "react"
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import logger from "@common/utils/logger"
import { DefaultLayout } from "@components/Layout"
import { UrlProps } from "types";
import { useUserElement } from "./UserHook";
import TweetTable from "@components/TweetTable";

export interface UserProps {
  q?: string;
  offset?: string;
}

interface UserInitialProps {
  query: UrlProps;
}

const User = (props: UserProps) => {
  const {
    q,
    tweet,
    loading,
    search,
    handleOnPageChange,
  } = useUserElement(props);

  return useMemo(() =>
    (
      <React.Profiler id="User" onRender={logger.handleProfileRender}>
        <DefaultLayout
          pageTitle="User"
          title="User"
          desc="Tweeter feed by user"
          selectedMenu={['user']}
        >
          <Row>
            <Col flex="auto">
              <TweetTable
                data={tweet}
                loading={loading}
                search={search}
                onPageChange={handleOnPageChange}
              />
            </Col>
          </Row>
        </DefaultLayout>
      </React.Profiler>
    ),
    [q, tweet, loading]
  )
}

User.getInitialProps = ({ query }: UserInitialProps) => {
  logger.debug('user init', query);
  const { q, offset } = query;
  return {
    q,
    offset,
  };
}

export default User;
