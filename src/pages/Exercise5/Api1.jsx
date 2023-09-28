import React from 'react'
import { useQuoteQuery } from '../../redux/Apitests/Apitest1'

const Api1 = () => {

  const { data, isLoading, isError, error } = useQuoteQuery()
  console.log(data)

  if(isLoading) return <p>loading...</p>
  if (isError) return <p>{error}</p>

  return (
    <div>
      {data && data.results.map((quote) => (
        <div key={quote._id}>
          <p>{quote.content}</p>
          <p>{quote.author}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Api1