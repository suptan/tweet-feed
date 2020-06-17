import Col from 'antd/lib/col'
import { DefaultLayout } from '@components/Layout'

/**
 * Homepage
 */
const HomePage = () => {
  return (
    <DefaultLayout pageTitle="Home" title="Home" desc="Home" selectedMenu={[]}>
      <Col span={24}>
        <h2>Welcome! Please select any menu above to search for Feed.</h2>
      </Col>
    </DefaultLayout>
  )
}

export default HomePage
