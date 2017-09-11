let expect = require('chai').expect;
let Sumator = require('./sumator');

describe('Sorted List Unit Test', function () {
    let mySumator;

    beforeEach(function () {
        mySumator = new Sumator();
    });

    describe('Test initial state', function () {
        it('add exist', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.equal(true)
        });
        it('sumNums exist', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.equal(true)
        });
        it('removeByFilter exist', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.equal(true)
        });
        it('toString exist', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.equal(true)
        });
    });

    describe('Test add element', function () {
        it('add no element', function () {
            expect(mySumator.toString()).to.equal('(empty)')
        });
        it('add single element', function () {
            mySumator.add('gosho');
            expect(mySumator.toString()).to.equal('gosho')
        });
        it('add multiple elements', function () {
            mySumator.add('gosho');
            mySumator.add('pesho');
            mySumator.add('sasho');
            expect(mySumator.toString()).to.equal('gosho, pesho, sasho')
        });
        it('add object', function () {
            mySumator.add({v: 'a'});
            expect(mySumator.toString()).to.equal('[object Object]')
        });
    });

    describe('Test sumNums', function () {
        it('with empty list', function () {
            expect(mySumator.sumNums()).to.equal(0, 'Not correct sum!')
        });
        it('with one number', function () {
            mySumator.add(3);
            expect(mySumator.sumNums()).to.equal(3, 'Not correct sum!')
        });
        it('with two number', function () {
            mySumator.add(3);
            mySumator.add(4)
            expect(mySumator.sumNums()).to.equal(7, 'Not correct sum!')
        });
        it('with one number and one object', function () {
            mySumator.add(3);
            mySumator.add({ime:'tri'})
            expect(mySumator.sumNums()).to.equal(3, 'Not correct sum!')
        });
        it('with two numbers and two objects', function () {
            mySumator.add(3);
            mySumator.add({ime:'tri'});
            mySumator.add(5);
            mySumator.add({test:'triw'});
            expect(mySumator.sumNums()).to.equal(8, 'Not correct sum!')
        });
    });
    
    describe('Test removeByFilter', function () {
        it('remove by type',function () {
            mySumator.add(3);
            mySumator.add('rtert');
            mySumator.add(5);
            mySumator.add('test');

            function checkNumber(item) {
                let result=typeof(item)==='number';
                return result
            }

            mySumator.removeByFilter(checkNumber);
            expect(mySumator.toString()).to.equal('rtert, test');
        });

        it('remove by value',function () {
            mySumator.add(3);
            mySumator.add('rtert');
            mySumator.add(5);
            mySumator.add('test');
            mySumator.removeByFilter(item=>item===3);
            expect(mySumator.toString()).to.equal('rtert, 5, test');
        });
        it('remove by empty should throw TypeError',function () {
            mySumator.add(3);
            mySumator.add('rtert');
            mySumator.add(5);
            mySumator.add('test');
            expect(()=>mySumator.removeByFilter()).throw(TypeError, 'filterFunc is not a function')
        });
        it('remove by no function should throw TypeError',function () {
            mySumator.add(3);
            mySumator.add('rtert');
            mySumator.add(5);
            mySumator.add('test');
            expect(()=>mySumator.removeByFilter('dgdgd')).throw(TypeError, 'filterFunc is not a function')
        });
    });

    describe('Test toString', function () {
        it('with no element', function () {
            expect(mySumator.toString()).to.equal('(empty)')
        });
        it('with one element', function () {
            mySumator.add('300');
            expect(mySumator.toString()).to.equal('300')
        });
        it('with two elements', function () {
            mySumator.add('300');
            mySumator.add('test');
            expect(mySumator.toString()).to.equal('300, test')
        });
        it('with two objects', function () {
            mySumator.add({'sdgsdg':'sdfsdf'});
            mySumator.add({name:'ivan'});
            expect(mySumator.toString()).to.equal('[object Object], [object Object]');
        });
    });
});