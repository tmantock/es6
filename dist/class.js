'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = typeof name === 'string' ? Person.capitalize(name) : this.name = 'Anonymous';
  }

  _createClass(Person, [{
    key: 'print',
    value: function print() {
      console.log('Hello I am ' + this.name + '.');
    }
  }, {
    key: 'name',
    set: function set(value) {
      this._name = Person.capitalize(value);
    },
    get: function get() {
      return this._name;
    }
  }], [{
    key: 'capitalize',
    value: function capitalize(word) {
      return word[0].toUpperCase() + word.slice(1);
    }
  }]);

  return Person;
}();

var Employee = function (_Person) {
  _inherits(Employee, _Person);

  function Employee(name) {
    var job = arguments.length <= 1 || arguments[1] === undefined ? "unemployed" : arguments[1];

    _classCallCheck(this, Employee);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Employee).call(this, name));

    _this.job = job;
    return _this;
  }

  _createClass(Employee, [{
    key: 'print',
    value: function print() {
      console.log('Hello I am ' + this.name + ' and I am a ' + this.job + '.');
    }
  }, {
    key: 'printSuper',
    value: function printSuper() {
      _get(Object.getPrototypeOf(Employee.prototype), 'print', this).call(this);
    }
  }]);

  return Employee;
}(Person);

var troy = new Person('troy');
var adam = new Employee('adam', 'driver');
adam.print();
adam.printSuper();
troy.name = 'Harry';
troy.print();

var jane = new Person();

jane.print();

console.log(Person.capitalize('henry'));