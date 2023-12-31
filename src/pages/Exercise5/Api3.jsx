import React from 'react'
import { useUserQuery } from '../../redux/Apitests/Apitest3'

const Api3 = () => {

  const { data, isLoading, isError, error } = useUserQuery()
  console.log(data)

  if(isLoading) return(
    <div className='d-flex align-items-center justify-content-center' style={{height: "100vh"}}>
    <div class="spinner-border" role="status">
    </div>
  </div>
    )
  if (isError) return <p>{error}</p>

  return (
    <div className='d-flex align-items-center vh-100 justify-content-center'>
      {data && data?.results?.map((result) => (
        <div key={result?.id?.value} className='d-flex align-items-center justify-content-center flex-column'>
          <img src={result?.picture?.large} style={{borderRadius: "50%"}}/>
          <h3>Full Name: {result?.name?.title} {result?.name?.first} {result?.name?.last}</h3>
          <span>email: {result?.email}</span>
          <p>DOB: {result?.dob.age} -- {result?.dob?.date}</p>
          <p>gender: {result?.gender}</p>
          <p>Location: {result?.location?.city} - {result?.location?.country}({result?.location?.postcode})</p>
        </div>
      ))}
    </div>
  )
}

export default Api3