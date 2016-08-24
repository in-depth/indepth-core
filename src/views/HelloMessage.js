import React from 'react'

import styles from './HelloMessage.css'

const HelloMessage = (props) => <div className={styles.message}>Hello {props.name} </div>;

export default HelloMessage
