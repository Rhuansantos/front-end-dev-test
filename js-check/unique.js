// Make Unique
// Finish the rest of 'unique()' function to remove all
// duplicate entries from a given array and satisfy the test
//
// To pass the test, unique should accept an array and
// handle strings:
// ['hello', 'hello', 'world'] -> ['hello', 'world']
// handle numbers:
// [1,1,2,2,2,3,4,4,5] => [1,2,3,4,5]
// handle nested arrays:
// [[1], [1], [2]] => [[1], [2]]
// handle nested objects:
// [{foo: 'bar'}, {foo: 'bar'}] => [{foo: 'bar'}]

const unique = (arr) => {
    // Initial dataset with duplicated values
    var arrList = ['All', 'All', {the: 'things'}, [4], 0, [4]];

    // Empty Array that will be populated with de-duplicated values
    var cleanList = [];

    // Define removeDuplicate function
    function removeDuplicates(items) {
        // loop through list
        for(var i=0;i<items.length;i++) {
            // if item doesn't already exist in cleanList then push it
            var check = cleanList.indexOf(items[i]);

            if(check === -1) {
                cleanList.push(items[i]);
            }

        }
    }

    removeDuplicates(arrList);
};

module.exports = unique
// Note: It's not neccessary to have all code into the 'unique'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave unique as an exported
// method as you found it
