function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = 0;
}

Person.prototype.growOlder = function(years) {
    if(typeof years === 'number')
        this.age += years
}

var me = new Person('John', 'Doe');

me.growOlder(5);


