import { reactive } from 'vue';

type IState = {
    clickedSquares: string[]
}

const State = reactive({
    clickedSquares: []
} as IState)

export default State;