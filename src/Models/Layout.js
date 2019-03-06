export default {
    namespace:"layout",
    state:{
        menuFold:true
    },
    reducers:{
        'sideMenuFold'(state,{payload:menuFold}){
            return Object.assign({}, state, {
                menuFold:!state.menuFold,
            });
        }
    },
}