let expect = require('chai').expect;
let createList = require('./Add-Swap-Shift-Left-Right-in-List').createList;

describe('Test list Add-Swap-Shift-Left-Right-in-List', function () {
    let myList;

    beforeEach(function () {
        myList = createList();
    });

    describe('Test adding elements', function () {
        it('add no element', function () {
            expect(myList.toString()).to.equal('')
        });
        it('add single element', function () {
            myList.add('gosho');
            expect(myList.toString()).to.equal('gosho')
        });
        it('add multiple elements', function () {
            myList.add('gosho');
            myList.add('pesho');
            myList.add('sasho');
            expect(myList.toString()).to.equal('gosho, pesho, sasho')
        });
        it('add object', function () {
            myList.add({v: 'a'});
            expect(myList.toString()).to.equal('[object Object]')
        });
    });

    describe('Test shift left elements', function () {
        it('shift left with no elements', function () {
            myList.shiftLeft();
            expect(myList.toString()).to.equal('');
        });
        it('shift left with one elements', function () {
            myList.add('1');
            myList.shiftLeft();
            expect(myList.toString()).to.equal('1');
        });
        it('shift left with many elements', function () {
            myList.add('1');
            myList.add('2');
            myList.add('3');
            myList.add('4');
            myList.shiftLeft();
            expect(myList.toString()).to.equal('2, 3, 4, 1');
        });
        it('shift left with many elements many times', function () {
            myList.add('1');
            myList.add('2');
            myList.add('3');
            myList.add('4');
            myList.shiftLeft();
            myList.shiftLeft();
            myList.shiftLeft();
            expect(myList.toString()).to.equal('4, 1, 2, 3');
        });
    });

    describe('Test shift right elements', function () {
        it('shift right with no elements', function () {
            myList.shiftRight();
            expect(myList.toString()).to.equal('');
        });
        it('shift right with one elements', function () {
            myList.add('1');
            myList.shiftRight();
            expect(myList.toString()).to.equal('1');
        });
        it('shift right with many elements', function () {
            myList.add('1');
            myList.add('2');
            myList.add('3');
            myList.add('4');
            myList.shiftRight();
            expect(myList.toString()).to.equal('4, 1, 2, 3');
        });
        it('shift right with many elements many times', function () {
            myList.add('1');
            myList.add('2');
            myList.add('3');
            myList.add('4');
            myList.shiftRight();
            myList.shiftRight();
            myList.shiftRight();
            expect(myList.toString()).to.equal('2, 3, 4, 1');
        });
    });

    describe('Test swap elements', function () {
        it('index1 string return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap('pesho', 1);
            expect(result).to.equal(false)
        });

        it('index1 string not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap('pesho', 1);
            expect(myList.toString()).to.equal('1, 2')
        });
        it('index1 < 0 return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(-3, 1);
            expect(result).to.equal(false)
        });

        it('index1 < 0 not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(-3, 1);
            expect(myList.toString()).to.equal('1, 2')
        });
        it('index1 == list.length return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(myList.length, 1);
            expect(result).to.equal(false)
        });

        it('index1 == list.length not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(myList.length, 1);
            expect(myList.toString()).to.equal('1, 2')
        });
        it('index1 > list.length return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(myList.length + 1, 1);
            expect(result).to.equal(false)
        });

        it('index1 > list.length not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(myList.length + 1, 1);
            expect(myList.toString()).to.equal('1, 2')
        });

        it('index1 == index2 return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, 1);
            expect(result).to.equal(false)
        });

        it('index1 == index2 not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(1, 1);
            expect(myList.toString()).to.equal('1, 2')
        });

        it('correct indexes return true', function () {
            myList.add('pesho');
            myList.add('gosho');
            myList.add('sasho');
            let result = myList.swap(0, 2);
            expect(result).to.equal(true)
        });
        it('correct indexes modify', function () {
            myList.add('pesho');
            myList.add('gosho');
            myList.add('sasho');
            myList.swap(0, 2);
            expect(myList.toString()).to.equal('sasho, gosho, pesho')
        });

        it('index2 string return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, 'pesho');
            expect(result).to.equal(false)
        });

        it('index2 string not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(1, 'pesho');
            expect(myList.toString()).to.equal('1, 2')
        });
        it('index2 < 0 return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, -3);
            expect(result).to.equal(false)
        });

        it('index2 < 0 not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(1, -3);
            expect(myList.toString()).to.equal('1, 2')
        });
        it('index2 == list.length return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, myList.length);
            expect(result).to.equal(false)
        });

        it('index2 == list.length not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(1, myList.length);
            expect(myList.toString()).to.equal('1, 2')
        });
        it('index2 > list.length return false', function () {
            myList.add(1);
            myList.add(2);
            let result = myList.swap(1, myList.length + 1);
            expect(result).to.equal(false)
        });

        it('index2 > list.length not modify', function () {
            myList.add(1);
            myList.add(2);
            myList.swap(1, myList.length + 1);
            expect(myList.toString()).to.equal('1, 2')
        });
    })
});