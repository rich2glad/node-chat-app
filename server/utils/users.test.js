var expect = require ('expect');
var {Users} = require('./users');

describe('Users',()=>{
    var users;
    beforeEach(()=>{
        users = new Users();
        users.users=[{
            id:'1',
            name:'Rich',
            room:'Node Course'
        },{
            id:'2',
            name:'Glad',
            room:'React Course'
        },{
            id:'3',
            name:'Ryan',
            room:'Node Course'
        }];
    });

    it('should add new User',()=>{
        var users= new Users();
        var user={
            id:'123',
            name:'Richerd',
            room:'the office room'
        }

        var resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
        
    });

    it('should return user for Node course',()=>{
        var userList= users.getUserList('Node Course');
        expect(userList).toEqual(['Rich','Ryan']);
    });

    it('should return user for React course',()=>{
        var userList= users.getUserList('React Course');
        expect(userList).toEqual(['Glad']);
    });

    it('should remove a user',()=>{
        var userId= '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user',()=>{
        var userId= '4';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find a user',()=>{
        var userId= '1';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find a user',()=>{
        var userId= '4';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });
});