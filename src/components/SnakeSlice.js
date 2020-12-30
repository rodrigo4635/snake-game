import React from 'react'
import styles from './styles'

const SnakeSlice = ({ position }) => (
    <div style={{ ...styles.snake, top: position.y, left: position.x }}/>
)

export default SnakeSlice
