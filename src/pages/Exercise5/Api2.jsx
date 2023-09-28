import React from 'react'
import { useCovidQuery } from '../../redux/Apitests/Apitest2'

const Api2 = () => {

  const { data, isLoading, isError, error } = useCovidQuery()
  // console.log(data)

  // if(isLoading) return <p>loading...</p>
  // if (isError) return <p>{error}</p>

  return (
    <div>
      <h4>Error on this page</h4>
    </div>
  )
}

export default Api2