import { useEffect } from 'react'
import router from 'next/router'
import Skeleton from 'antd/lib/skeleton'

/**
 * Homepage
 */
const HomePage = () => {
  useEffect(() => {
    router.push('/hash-tag')
  }, [])
  return (
    <main>
      <Skeleton />
    </main>
  )
}

export default HomePage
