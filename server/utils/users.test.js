const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id:'1',
            name: 'Mike',
            room: 'Node Course'
        },
        {
            id:'2',
            name: 'Jen',
            room: 'React Course'
        },
        {
            id:'3',
            name: 'Julie',
            room: 'Node Course'
        }]
    })

    it('should add new user', () =>{
        var users = new Users();
        var user = {
            id:123,
            name:'Carl',
            room: 'The Office Fans'
        }
        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    })

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Mike','Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');
        expect(users.users.length).toBe(2);
        console.log(user)
    });

    it('should not remove a user ', () => {
        var user = users.removeUser('123');
        expect(user).toBe(undefined)
        expect(users.users.length).toBe(3);

    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId)
    });

    it('should not find user', () => {
        var userId = '23';
        var user = users.getUser(userId);
        expect(user).toBe(undefined);
    })


})
