export const Alert = ({message, successfull}) => {
  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    border: '2px solid green' 
  }

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    border: '2px solid red' 
  }

  if(message === null) return null

  return(
    <div className='alert' style={successfull ? successStyle : errorStyle}>
      {message}
    </div>
  )
}