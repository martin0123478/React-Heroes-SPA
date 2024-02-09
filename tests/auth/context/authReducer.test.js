import { authReducer } from "../../../src/auth/context/authReducer"

describe('Pruebas en authReducer',()=>{
    const initialState = {
    logged: false
}

    test('Should return initial state',()=>{
        const newState = authReducer(initialState,{})
        expect(newState).toBe(initialState)
    })
    test('Debe de hacer login',()=>{
        const action ={
            type:'[Auth] Login',
            payload: { id: 'ABC', name:'Martin' }
        }
     const newState = authReducer(initialState,action)
     expect(newState).toEqual({ 
                logged : true,
                user:action.payload})
    })

    test('should do logout', () => { 
        const state ={
            logged:true,
            user:{ id: 'ABC', name:'Martin' }
        }
        const action ={
            type:'[Auth] Logout'
            
            
        }
       
    
                const newState = authReducer(state,action)
            expect(newState).toEqual({logged:false})
    })
     })