const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});


test ('Engineer',()=>{
("Can set 'name', 'id', 'email',  via Engineer()", ()=>{
    const name = 'George';
    const id = 50;
    const email = 'test@gmail.com';
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    
})
 
});


test ('getId',()=>{
('Can set id via constructor argument', ()=>{
    const name = 'George';
    const id = 50;
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.getId()).toBe(50)
});
});

test ('getEmail',()=>{
('Can set email via constructor argument', ()=>{
    const name = 'George';
    const email = 'test@gmail.com';
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.getEmail()).toBe('test@gmail.com');
});
});
test ('getName',()=>{
("Can get name via getName()", ()=>{
    const name = 'George';
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.getName()).toBe('George')
});
});
test('getId',()=>{
("Can get Id via getId()", ()=>{
    const name = 'George'
    const id = 50;
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.getId()).toBe(50)

});
});

test('getEmail',()=>{
("Can get email via getEmail()", ()=>{
    const name = 'George'
    const id = 50;
    const email = 'test@gmail.com';
    const engineer = new Engineer(name, id, email, github);
    expect(engineer.getEmail()).toBe('test@gmail.com');
});
})

test('getrole',()=>{
 ('should return engineer', ()=>{
    const testValue = "Engineer";
    const engineer = new Engineer(testValue);
    expect(engineer.getRole()).toBe(testValue);
});
});
test('getGithub',()=>{
    ('Can get Github via getGithub()', ()=>{
        const name = 'George'
        const id = 50;
        const email = 'test@gmail.com';
        const github = 'George@github.com';
        const engineer = new Engineer(name, id, email, github);
        expect(engineer.getGithub()).toBe('George@github.com');
   });
   });

