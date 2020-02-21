/**
 * Isogram
 * 
 * @param {String} str String for checking
 * @return {Boolean} If TRUE is a isogram. Otherwise FALSE.
 */
function isIsogram(str){
    return !/(.)(?=.*\1)/gi.test(str);
}

/**
 * Count vowels in str
 * 
 * @param {String} str String for checking
 * @return {Int} Count vowels in str
 */
function getCount(str) {
    var vowelsCount = 0;
    
    // enter your majic here
    vowelsCount = str.replace(/[^aeiou]/gi,'').length
    
    return vowelsCount;
}