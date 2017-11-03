//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

function validatePhoneNumber() {
            var phnNumber = '(321) 221-4321';
            //validate phone number for parenthesis, spaces, and hyphens dots letters -> remove those things
            phnNumber = phnNumber.replace(/[^\d]/g, '');
      
      //should return null when more than 11 digits
            if (phnNumber.length > 11) {
                alert("Invalid phone number");
                return false;
            }

      var numberS = phnNumber.substr(1);

            //check first number
            var digit = ('' + numberS)[1];

      // check area number
            var area = ('' + numberS)[3];

      //should return null for 11-digit numbers that don't begin with 1
            if (phnNumber.length == 11 && digit != 1) {
                return null;
            }

      //should return null when area code does not start with 2-9
            if (area === 1 || area === 0) {
                return null;
            }
            
            alert(phnNumber);
        }
module.exports = phoneNumber;
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it


/*phoneNumber() Returns a phone number formated for use in a '<a href="tel:" />' link
  1) should remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
  2) should remove dots as in "321.321.4321"
  3) should detect invalid 9-digit numbers
  4) should return null for 11-digit numbers that don't begin with 1
  5) should validate when 11 digits and starting with 1 even with punctuation
  6) should return null when more than 11 digits
  7) should return null when letters and/or punctuation are present
  8) should return null when area code does not start with 2-9
  9) should return null when exchage code does not start with 2-9

  */
