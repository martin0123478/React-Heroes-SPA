import {types} from '../../../src/auth/types/types'
describe('Test es types',()=>{
    test('Debe de regresar estos types',()=>{
       expect(types).toEqual( { login: '[Auth] Login', logout: '[Auth] Logout' })
    })
})