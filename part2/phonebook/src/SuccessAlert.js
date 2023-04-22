export const SuccessAlert = ({message}) => {
  const alertStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    border: '2px solid green' 
  }

  if(message === null) return null

  return(
    <div className='successAlert' style={alertStyle}>
      {message}
    </div>
  )
}