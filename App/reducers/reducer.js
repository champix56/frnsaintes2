import {createStore} from 'redux';
const initialState={produits:[], whoiam: undefined}
function reducer(state=initialState,action){
    switch (action.type) {
        case 'LOGIN':
            if(action.value.login==='Alex' && action.value.password==='alex')
            {
                return {...state, whoiam: action.value.login};
            }
            else return state;
        case 'LOGOUT': return {...state, whoami: undefined}
        case 'ADD_PRODUCT': return {...state, produits:[...state.produits, action.value]}
        default:
            return state
    }

}

const store = createStore(reducer);
export default store;