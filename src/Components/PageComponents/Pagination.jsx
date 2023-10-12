import React from 'react'

function Pagination({publickAuctions,PageHandlerData}) {
  const pagination = []
  for (let i = 1; i < Math.ceil(publickAuctions.length/2)+1; i++){
    pagination.push(i)
  }
  return (
    <div>
      {pagination.map((page,i)=><button key={i} onClick={()=>PageHandlerData(page)}>{page}</button>)}
    </div>
  )
}

export default Pagination