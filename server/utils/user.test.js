const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'JS Course'
    },
    {
      id: '3',
      name: 'Ralph',
      room: 'React Course'
    },
    {
      id: '4',
      name: 'Leo',
      room: 'Ruby Course'
    },
    ,
    {
      id: '5',
      name: 'Juile',
      room: 'Ruby Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user ={
      id: '123',
      name: 'Leo',
      room: 'The Office'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);

  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId='100';
    var user = users.getUser(userId);

    expect(user).toNotExist();    
  });

  it('should remove user', () => {
    var userId = '5';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(4);
  });

  it('should remove user', () => {
    var userId = '100';
    var user = users.removeUser(userId);

    expect(user).toNotExist();  
    expect(users.users.length).toBe(6);
  });

  it('should return name for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike']);
  });

  it('should return name for node course', () => {
    var userList = users.getUserList('Ruby Course');
    expect(userList).toEqual(['Leo','Juile']);
  });

});