import React from 'react'
import { useQuoteQuery } from '../../redux/Apitests/Apitest1'

const Api1 = () => {

  const { data, isLoading, isError, error } = useQuoteQuery()
  console.log("mydata", data)

  if (isLoading) return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
      <div className="spinner-border" role="status">
      </div>
    </div>
  )
  if (isError) return <p>{error}</p>

  // console.log(data)

  return (
    <div className='py-4'>
      {data && data?.results.map((quote) => (
        <div className="container">
          <div className="row">
            <div key={quote?._id} className='col'>
              <div className="">
                <p><strong>Content: </strong>{quote?.content}</p>
                <p><strong>User:  </strong>{quote?.author}</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Api1