import React, { useEffect } from 'react'
import { useAppDispatch,useAppSelector } from './redux/hooks'
import { getUsers } from './redux/userSlices'

const App = () => {
  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.user.data)

  useEffect(()=>{
    dispatch(getUsers())
  },[])

  console.log(user)

  return (
    <div>
      <h1>Users data</h1>
      {user?.map((data:any)=>(
        <>
        <h1>{data.id}</h1>
        <p>{data.title}</p>
        <p>{data.userId}</p>
        </>
      ))}
    </div>
  )
}

export default App
