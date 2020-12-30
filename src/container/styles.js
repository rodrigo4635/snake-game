import { BOARD_SIZE } from '../constants'

export default {
    container: {
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    board: {
        backgroundColor: '#eee',
        position: 'relative',
        width: BOARD_SIZE,
        height: BOARD_SIZE
    }
}