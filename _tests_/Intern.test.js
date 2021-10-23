const { test, expect } = require("@jest/globals");
const Intern = require("../lib/intern");

test("Can instantiate Intern instance", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});


test ('Intern',()=>{
("Can set 'name', 'id', 'email',  via Intern()", ()=>{
    const name = 'Amar';
    const id = 25;
    const email = 'amar@gmail.com';
    const intern = new Intern(name, id, email, github, school);
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
})
 
});


test ('getId',()=>{
('Can set id via constructor argument', ()=>{
    const name = 'Amar';
    const id = 25;
    const intern = new Intern(name, id, email, github, school);
    expect(intern.getId()).toBe(25)
});
});

test ('getEmail',()=>{
('Can set email via constructor argument', ()=>{
    const name = 'George';
    const email = 'amar@gmail.com';
    const intern = new Intern(name, id, email, school);
    expect(intern.getEmail()).toBe('amar@gmail.com');
});
});
test ('getName',()=>{
("Can get name via getName()", ()=>{
    const name = 'Amar';
    const intern = new Intern(name, id, email, github);
    expect(intern.getName()).toBe('Amar')
});
});
test('getId',()=>{
("Can get Id via getId()", ()=>{
    const name = 'Amar'
    const id = 25;
    const intern = new Intern(name, id, email, github);
    expect(intern.getId()).toBe(25)

});
});

test('getEmail',()=>{
("Can get email via getEmail()", ()=>{
    const name = 'Amar'
    const id = 25;
    const email = 'amar@gmail.com';
    const intern = new Intern(name, id, email, github);
    expect(intern.getEmail()).toBe('amar@gmail.com');
});
})

test('getrole',()=>{
 ('should return intern', ()=>{
    const testValue = "Intern";
    const intern = new Intern(testValue);
    expect(intern.getRole()).toBe(testValue);
});
});
test('getSchool',()=>{
    ('Can get Github via getGithub()', ()=>{
        const name = 'Amar'
        const id = 50;
        const email = 'amar@gmail.com';
        const school = 'UofT';
        const intern = new Intern(name, id, email, school);
        expect(intern.getschool()).toBe('UofT');
   });
   });

