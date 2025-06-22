import type{ FC } from 'react'

interface InputInterface {
  name: string
  type?: string
  placeholder?: string
  defaultValue?: string       
  readOnly?: boolean 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?:string
}

const Input: FC<InputInterface> = ({name, placeholder, type="text", defaultValue,readOnly,onChange,value}) => {
  return (
    <input 
        className='border border-gray-300 rounded px-3 py-2 w-full'
        placeholder={placeholder}
        name={name}
        type={type}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onChange={onChange}
        value={value}
    />
  )
}

export default Input