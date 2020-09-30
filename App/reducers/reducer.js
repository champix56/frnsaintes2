import {createStore} from 'redux';
const initialState={produits:[
    {id:1,
        name: 'beurre breton salé',
        prixunitaire: 2.5,
        img: 'https://www.paysanbreton.com/sites/default/files/styles/product_large/public/formats/beurre-doux.png?itok=yJkyVckG'
    },{id: 2,
        name: 'cidre brut breton',
        prixunitaire: 2.2,
        img: 'https://www.kinkiz-terroir.bzh/wp-content/uploads/2017/03/Cidre_Fouesnant_MK_75cl.png'
    },{id: 3,
        name: 'gwenhadu',
        prixunitaire: 8.0,
        img: 'https://borney.com/2262-large_default/drapeau-bretagne.jpg'
    },{id:4,
        name:'huitre n°4',
        prixunitaire: 1.25,
        img: 'huitre.png'
    },{id:5,
        name:'chouchen',
        prixunitaire: 12,
        img: 'https://comptoir-des-abbayes.fr/1193/hydromel.jpg'
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