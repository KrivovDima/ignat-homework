import {UserType} from "../HW8";

type ActionType = {
    type: 'sortUp' | 'sortDown' | 'check'
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            const copyState = [...state]

            return copyState.sort((a, b) => a.name < b.name ? -1 : 1)
        }
        case 'sortDown': {
            const copyState = [...state]
            return copyState.sort((a, b) => a.name > b.name ? -1 : 1)
        }
        case 'check': {
            return state.filter(u => u.age >= 18)
        }
        default: return state
    }
}