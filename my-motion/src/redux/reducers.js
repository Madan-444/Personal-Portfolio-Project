import { INPUT_NAME } from "./actionType"

const initialState = {
    myName: ''

}
const projectReducer = (state = initialState,action)=> {
    if(action.type === INPUT_NAME) {
        return {...state,myName: action.payload.inputname}
    }
    return state
}
export default projectReducer;