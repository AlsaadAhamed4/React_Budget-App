import { authReducer } from '../../Reducers/AuthReducer';

let state;

test('should test authReducer for login', () => {
    const uid = 'abcd';
    const action = {
        type: 'LOGIN',
        uid: uid
    };
    const result = authReducer(state = {}, action);
    expect(result).toEqual({ uid: uid })
});


test('should test authReducer for logout', () => {
    const action = {
        type: 'LOGOUT',
    };
    const result = authReducer({ uid: 'abcd' }, action);
    expect(result).toEqual({})
});
