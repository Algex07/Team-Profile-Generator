const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
})

test("Can set name via constructor arguments", ()=>{
    const name = "George";
    const e = new Employee(name);
    expect(e.name).toBe(name)
})

test('Can set id via constructor argument', ()=>{
    const testId = 50;
    const e = new Employee("Name", testId);
    expect(e.id).toBe('testId')
})

test('Can set email via constructor argument', ()=>{
    const testEmail = "test@gmail.com";
    const e = new Employee("Name", 3, testEmail);
    expect(e.email).toBe(testEmail)
})

test("Can get name via getName()", ()=>{
    const testName = "George";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName)
})

test("Can get Id via getId()", ()=>{
    const testId = 50;
    const e = new Employee(testId);
    expect(e.getId()).toBe(testId)
})

test("Can get email via getEmail()", ()=>{
    const testEmail = "test@gmail.com";
    const e = new Employee(testEmail);
    expect(e.getEmail()).toBe('testEmail')
})

test("getrole() should return 'employee'", ()=>{
    const testvalue = "Employee";
    const e = new Employee("George", 5, "test@gmail.com");
    expect(e.getRole()).toBe(testvalue);
})