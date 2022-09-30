// 1) What does the following code return?

new Set([1, 1, 2, 2, 3, 4])

// returns {1,2,3,4}

// 2) What does the following code return?

// [...new Set("referee")].join("")

//returns 'ref'

// 3) What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

// Write a function called hasDuplicate which 
//accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = arr => !(arr.length === new Set(arr).size);

// Write a function called vowelCount which accepts a string and returns a map 
// where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelMap = new Map();
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())) {
            if (vowelMap.has(str[i])) {
                vowelMap.set(str[i], vowelMap.get(str[i]) + 1)
            } else {vowelMap.set(str[i], 1)}
        } 
    }
    return vowelMap;
}
