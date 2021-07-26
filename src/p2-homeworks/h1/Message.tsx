import React from 'react';
import styles from './Message.module.css';

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={styles.message}>
      <div className={styles.avatar}>
        <img src={props.avatar} alt="avatar"/>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.name}>
            {props.name}
          </div>
          <div className={styles.text}>
            {props.message}
          </div>
        </div>
        <div className={styles.time}>
          {props.time}
        </div>
      </div>
    </div>
  )
}

export default Message;
