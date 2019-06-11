import React from 'react';
import Message from './Message';

const ChatLog = (props) => {
  const singleMessage = props.allmessages.map((indivMessage, i) => {
    return (
      <Message
      key={i}
      sender={indivMessage.sender}
      body={indivMessage.body}
      timeStamp={indivMessage.timeStamp}
      />
    )
  });

  return (
    <section>
      <ul>
        {singleMessage}
      </ul>
    </section>
  )
 
}

export default ChatLog;