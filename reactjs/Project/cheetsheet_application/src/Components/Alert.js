import React from 'react'

const Alert = (props) => {
  return (
    <div>
      <div class="alert alert-primary text-center text-white" role="alert">
{props.message}
</div>
    </div>
  )
}

export default Alert
