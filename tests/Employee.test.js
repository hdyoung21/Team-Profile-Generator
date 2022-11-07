const Employee = require('../lib/employee');

describe('Employee suite of tests', () => {
    // Test #1 
    it('test to create a new Employee object and check properties name, id, and email', () => {
        const newEmployee = new Employee(null, 'id', 'email@yah.com');
        expect(newEmployee.name).toBeNull()
        expect(newEmployee.id).toEqual(expect.any(String))
        expect(newEmployee.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    })

    // Test #2
    it('test to return an employee\'s name', () => {
        const newEmployee = new Employee('Hunter', 'id', 'email@yah.com');
        expect(newEmployee.getName()).toEqual('Hunter');
    })
})

