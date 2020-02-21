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

/**
 * Count same ocurrencies quantity between x and o
 * 
 * @param {String} str String for checking
 * @return {Boolean} If TRUE has same quantity. Otherwise FALSE.
 */
function XO(str) {
    //code here
    var qX = 0;
    var qO = 0;
    
    str = str.replace(/[^xo]/gi, '');
    
    qX = str.match(/x/gi) || [];
    qO = str.match(/o/gi) || [];
    
    return qX && qO && qX.length === qO.length;
}