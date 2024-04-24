/**
 * This recursion process reverses a string.
 *
 * By:      Troy Appleby
 * Version: 1.0
 * Since:   2024-04-23
 */

/**
 * @param {string} userString parameter
 * @returns {string} return reversedString
 */
function reversedString (userString: string): string {
    // process
    if (userString === '') {
      return userString
    } else {
      return reversedString(userString.slice(1)) + userString.slice(0, 1)
    }
  }
  
  // input
  const tempString = 'recursion'
  
  // output
  console.log(`\nThe original string was: ${tempString}`)
  console.log(`The reversed string is: ${reversedString(tempString)}`)
  
  console.log('\nDone.')