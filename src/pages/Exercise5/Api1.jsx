import React from 'react'
import { useQuoteQuery } from '../../redux/Apitests/Apitest1'

const Api1 = () => {

  const { data, isLoading, isError, error } = useQuoteQuery()
  console.log("mydata", data)

  if (isLoading) return (
    <div className='d-flex align-items-center justify-content-center' style={{height: "100vh"}}>
      <div class="spinner-border" role="status">
      </div>
    </div>
  )
  if (isError) return <p>{error}</p>

  // console.log(data)

  return (
    <div>
      {data && data?.results.map((quote) => (
        <div key={quote?._id}>
          <p>{quote?.content}</p>
          <p>{quote?.author}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Api1