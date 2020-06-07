import { login, Logout } from '../../Actions/auth';


test('should test login action', () => {
    const uid = 'abcd';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: uid
    });
}); 

test('should test logout action', () => {
    const action = Logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});
