const { test, expect } = require("@jest/globals");
const Manager = require("../lib/manager");

test("Can instantiate Manager instance", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});


test ('Manager',()=>{
("Can set 'name', 'id', 'email',  via Manager()", ()=>{
    const name = 'Brian';
    const id = 45;
    const email = 'brian@gmail.com';
    const manager = new Manager(name, id, email);
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.school).toBe(officeNumber);
})
 
});


test ('getId',()=>{
('Can set id via constructor argument', ()=>{
    const name = 'Brian';
    const id = 45;
    const Manager = new Manager(name, id, email, officeNumber);
    expect(Manager.getId()).toBe(45)
});
});

test ('getEmail',()=>{
('Can set email via constructor argument', ()=>{
    const name = 'George';
    const email = 'brian@gmail.com';
    const Manager = new Manager(name, id, email, officeNumber);
    expect(Manager.getEmail()).toBe('brian@gmail.com');
});
});
test ('getName',()=>{
("Can get name via getName()", ()=>{
    const name = 'Brian';
    const Manager = new Manager(name, id,email, officeNumber);
    expect(Manager.getName()).toBe('Brian')
});
});
test('getId',()=>{
("Can get Id via getId()", ()=>{
    const name = 'Brian'
    const id = 45;
    const Manager = new Manager(name, id,email, officeNumber);
    expect(Manager.getId()).toBe(25)

});
});

test('getEmail',()=>{
("Can get email via getEmail()", ()=>{
    const name = 'Brian'
    const id = 45;
    const email = 'brian@gmail.com';
    const Manager = new Manager(name, id, email, officeNumber);
    expect(Manager.getEmail()).toBe('brian@gmail.com');
});
})

test('getrole',()=>{
 ('should return Manager', ()=>{
    const testValue = "Manager";
    const Manager = new Manager(testValue);
    expect(Manager.getRole()).toBe(testValue);
});
});
test('getofficeNumber',()=>{
    ('Can get officenumber via getofficeNumber()', ()=>{
        const name = 'Brian'
        const id = 45;
        const email = 'brian@gmail.com';
        const officeNumber = '416-254-4612';
        const Manager = new Manager(name, id, email, officeNumber);
        expect(Manager.getschool()).toBe('416-254-4612');
   });
   });

