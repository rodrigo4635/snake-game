import { SNAKE_SIZE, TICK_DURATION } from './constants'

export function between(min, max) {  
    return Math.floor(Math.random() * (max - min) + min)
}

export function getNewPosition(key) {
    switch (key) {
        case "ArrowDown": return { x: 0, y: SNAKE_SIZE }
        case "ArrowUp": return { x: 0, y: -SNAKE_SIZE }
        case "ArrowLeft": return { x: -SNAKE_SIZE, y: 0 }
        case "ArrowRight": return { x: SNAKE_SIZE, y: 0 }
        default: return { x: 0, y: 0 }
    }
}

export function getTickDuration(points) {
    const op = points * 5
    const maxValue = TICK_DURATION * 0.95

    return TICK_DURATION - (op > maxValue ? maxValue : op)
}