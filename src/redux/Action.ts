export const TodoAction = {
    todoGet:{
        fulfill:(data:any)=>({
            type:'GET_TODO_LIST',
            payload:data
        })
    },
    todoCreate:{
        fulfill:(data:any)=>({
            type:'CREATE_TODO',
            payload:data
        })
    }
}