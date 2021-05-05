import {INPUT_NAME} from './actionType'

export function inputName(inputname) {
    return {
        type: INPUT_NAME,
        payload: {
            inputname
        }
    }
}