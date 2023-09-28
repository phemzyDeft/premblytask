import { useState } from 'react'
import { useGetSingleDataQuery, useGetAllDataQuery } from '../store/data'

function Exercise1() {
  const [input, setInput] = useState("")

  const { data: singleData, error, isError, isLoading } = useGetSingleDataQuery(input)
  // console.log(singleData)

  const { data } = useGetAllDataQuery()
  console.log(data)

  if (isLoading) return <p>loading...</p>
  if (isError) return <p>{error}</p>

  const filteredproduct = singleData ? singleData.products.filter(item =>
    item.title.toLowerCase().includes(input.toLowerCase()) ||
    item.category.toLowerCase().includes(input.toLowerCase())
  )
    : []
  
  // const dispatch = useDispatch()
  // const selector = useSelector((state)=> state.user)

  return (
    <>
      <div>hello world</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{width: "100%", textAlign: "center"}}>
          <h3>Search for item: </h3>
          <input type="text" placeholder='Search item...' onChange={(e) => setInput(e.target.value)} style={{ padding: '1rem', borderRadius: "20px", width: "50%" }} />
          <h2>Result</h2>
        </div>
      </div>

      {singleData && filteredproduct.map((item) => (
        <div key={item.id} style={{ float: "left", width: "25%" }}>
          <p>{item.title}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </>
  )
}

export default Exercise1
