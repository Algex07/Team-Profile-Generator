const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});


test("Can set 'name', 'id', 'email' via constructor arguments", ()=>{
    const name = 'George';
    const id = 50;
    const email = 'test@gmail.com';
    const employee = new Employee(name, id, email);
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
 
});


test ('getId',()=>{
('Can set id via constructor argument', ()=>{
    const name = 'George';
    const id = 50;
    const employee = new Employee(name, id, email);
    expect(employee.getId()).toBe(50)
});
});

test ('getEmail',()=>{
('Can set email via constructor argument', ()=>{
    const name = 'George';
    const email = 'test@gmail.com';
    const employee = new Employee(name, id, email);
    expect(employee.getEmail()).toBe('test@gmail.com');
});
});
test ('getName',()=>{
("Can get name via getName()", ()=>{
    const name = 'George';
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toBe('George')
});
});
test('getId',()=>{
("Can get Id via getId()", ()=>{
    const name = 'George'
    const id = 50;
    const employee = new Employee(name, id, email);
    expect(employee.getId()).toBe(50)

});
});

test('getEmail',()=>{
("Can get email via getEmail()", ()=>{
    const name = 'George'
    const id = 50;
    const email = 'test@gmail.com';
    const employee = new Employee(name, id, email);
    expect(employee.getEmail()).toBe('test@gmail.com');
});
})

test('getrole',()=>{
 ('should return employee', ()=>{
    const testValue = "Employee";
    const employee = new Employee(testValue);
    expect(employee.getRole()).toBe(testValue);
});
});




