import React from 'react'

import PageDefault from '../../components/pageDefault'
import Error from '../../components/error'

const page404 = () => (
  <PageDefault>
    <Error code={404} />
  </PageDefault>
)

export default page404
