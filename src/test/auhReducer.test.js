
import {authReducer} from '../auth/authReducer'
import { types } from '../types/types';
// const state = {
//     name:'felipe',
//     logged:true
// }


    describe('Prueba de AuthReducer', () => {


        test('deberia retornar el estado por defecto', () => {
            
            const state = authReducer({logged:false},{});
            expect(state).toEqual({logged:false})

        })
        test('debe autenticar y colocar el name de usuario', () => {
            
            const action ={
                types:types.login,
                payload:{
                    name: 'felipe',
                    
                }
            }

            const state =authReducer({logged:false},action);
            expect(state).toEqual({
                logged:'false',
              
            });
        });
        
    });
    