import React from 'react'
import { useCovidQuery } from '../../redux/Apitests/Apitest2'

const Api2 = () => {

  const { data, isLoading, isError, error } = useCovidQuery()
  // console.log(data)

  if (isLoading) return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
      <div className="spinner-border" role="status">
      </div>
    </div>
  )
  // if (isError) return <p>{error}</p>

  return (
    <div>
      <h4>Error on this page</h4>
      {/* <h4>{data ? (
        <div>{data}</div>
      ) : (
        <div>Error on this page</div>
      )}</h4> */}
    </div>
  )
}

export default Api2