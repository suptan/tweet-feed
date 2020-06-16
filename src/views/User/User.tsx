import React, { useMemo } from "react"
import logger from "@common/utils/logger"
import { DefaultLayout } from "@components/Layout"

const User = () => {
  return useMemo(() =>
    (
      <React.Profiler id="User" onRender={logger.handleProfileRender}>
        <DefaultLayout
          pageTitle="User"
          title="User"
          desc="Tweeter feed by user"
          selectedMenu={['user']}
        >
          <p>User</p>
        </DefaultLayout>
      </React.Profiler>
    ),
    []
  )
}

export default User;
