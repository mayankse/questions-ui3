export const appReducer=(state,action)=>
{
    switch(action.type)
    {
        case 'LOADER':
            return {
                ...state,
                isShowLoader:action.payload
            }
    }
    return state;
}