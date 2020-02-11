// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


//Unit tests for the sayHello function
describe("sayHello", function(){
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should not be a null value' , function() {
        expect(sayHello()).not.toBe(null);
    });
    it('should not be an empty string ""' , function() {
        expect(sayHello()).not.toBe("");
    });
    it('should not be a numeric value' , function() {
        expect(sayHello()).not.toBe(!NaN);
    });
    it('should not be a numeric string' , function() {
        expect(sayHello()).not.toBe('number');
    });
    it('should not be an array' , function() {
        expect(sayHello()).not.toBe(!"array");
    });
    it('should not be an object' , function() {
        expect(sayHello()).not.toBe(!"object");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});

// Unit tests for the isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return the boolean value, true if the number is 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return the boolean value, true if the number is "5"', function() {
        expect(isFive("5")).toBe(true);
    });
    it("should never return 'undefined' when called", function() {
        expect(isFive()).not.toBe(undefined);
    });

});

// Unit tests for the isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return true if input is 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return true if input is -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false if input is 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false if input is "banana"', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false if input is Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false if input is a boolean value', function() {
        expect(typeof isEven()).not.toBe(true);
    });
    it("should never return 'undefined' when called", function() {
        expect(isEven()).not.toBe(undefined);
    });
    it("should return false if called without an argument", function() {
        expect(isEven( undefined)).toBe(false);
    });
});