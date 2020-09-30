import {createStore} from 'redux';
const initialState={produits:[
    {id:1,
        name: 'beurre breton salé',
        prixunitaire: 2.5,
        img: 'beurre.png'
    },{id: 2,
        name: 'cidre brut breton',
        prixunitaire: 2.2,
        img: 'cidre.png'
    },{id: 3,
        name: 'gwenhadu',
        prixunitaire: 8.0,
        img: 'gwenhadu.jpg'
    },{id:4,
        name:'huitre n°4',
        prixunitaire: 1.25,
        img: 'huitre.png'
    },{id:5,
        name:'chouchen',
        prixunitaire: 12,
        img: 'hydromel.png'
    }
], whoiam: undefined}
function reducer(state=initialState,action){
    switch (action.type) {
        case 'LOGIN':
            if(action.value.login==='Alex' && action.value.password==='alex')
            {
                return {...state, whoiam: action.value.login};
            }
            else return state;
        case 'LOGOUT': return {...initialState, whoami: undefined}
        case 'ADD_PRODUCT': return {...state, produits:[...state.produits, action.value]}
        default:
            return state
    }

}

const store = createStore(reducer);
export default store;