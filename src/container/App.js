import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Food, SnakeSlice } from '../components' 
import { between, getNewPosition, getTickDuration } from '../functions'
import { BOARD_SIZE, TICK_DURATION, SNAKE_SIZE } from '../constants'

const App = () => {
    const [tick, setTick] = useState(0)
    const [key, setKey] = useState('ArrowDown')
    const [snakeBody, setSnakeBody] = useState([{ x: 0, y: 0 }])
    const [foodPosition, setFoodPosition] = useState(null)
    const [points, setPoints] = useState(200)

    useEffect(() => {
        const listener = e => {
            if (e.defaultPrevented) return
            setKey(e.key)
        }
        window.addEventListener('keydown', listener, true)
        return () => {
            window.removeEventListener('keydown', listener, true)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => setTick(tick + 1), getTickDuration(points))
        moveSnake(getNewPosition(key))
        generateRandomFood()
    }, [tick])


    function moveSnake({ x, y }) {
        const headX = snakeBody[0].x + x
        const headY = snakeBody[0].y + y
        const newHeadX = headX < 0 ? BOARD_SIZE - SNAKE_SIZE : headX === BOARD_SIZE ? 0 : headX
        const newHeadY = headY < 0 ? BOARD_SIZE - SNAKE_SIZE : headY === BOARD_SIZE ? 0 : headY

        setSnakeBody(snakeBody.map((_, i, arr) => i === 0 ? ({ x: newHeadX, y: newHeadY }) : ({ x: arr[i - 1].x, y: arr[i - 1].y }) ))
        canEatFood(newHeadX, newHeadY)
    }

    function generateRandomFood() {
        if (!foodPosition) {
            setFoodPosition({ x: between(0, BOARD_SIZE / 10) * 10, y: between(0, BOARD_SIZE / 10) * 10 })
        }
    }
    
    function canEatFood(x, y) {
        if (foodPosition?.x === x && foodPosition?.y === y) {
            setFoodPosition(null)
            setPoints(points + 1)
            setSnakeBody([...snakeBody, snakeBody[snakeBody.length - 1]])
        }
    }

    return (
        <div style={ styles.container }>
            <div style={ styles.board }>
                { snakeBody.map(part => <SnakeSlice position={ part }/> )}
                <Food position={ foodPosition }/>
            </div>
            <h4>{ points } pontos</h4>
        </div>
    )
}
export default App
