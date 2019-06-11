import React from 'react';
import Timestamp from './Timestamp'

//map through JSON with prop and display sender, body and timeStamp. 
const Message = (props) => {
  return (
    <section>
      <h3>{props.sender}</h3>
      <h3>{props.body}</h3>
      <p><Timestamp time={props.timeStamp}/></p>
    </section>
  );
}

export default Message;