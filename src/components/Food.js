import React from 'react'
import styles from './styles'

const Food = ({ position }) => position ? (
    <div style={{ ...styles.food, top: position.y, left: position.x }}/>
) : null

export default Food
