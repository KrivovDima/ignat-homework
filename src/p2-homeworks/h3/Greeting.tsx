import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = s.error // need to fix with (?:)

  return (
    <div>
      <input value={name} onChange={setNameCallback} className={inputClass}/>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
      <div>{error}</div>
    </div>
  )
}

export default Greeting
