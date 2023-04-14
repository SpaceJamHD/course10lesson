/*const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];
// [5, 4, 4, 4 ];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
}

console.log(newArr);

let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
}

console.log(newArr2);*/

const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) {
    // console.log(el);
    return el;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

const results = mapArray(names, nameLength);
const results2 = mapArray(names, nameToUpperCase);

// console.log(result2);

function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}

// const testGreeting = greeting('Denis');
// const fullName = testGreeting('Pulo');

const fullName = greeting('Denis')('Pulo');
// console.log(fullName);


function question(job) {
    const jobDictionary = {
        developer: 'что такое JS ?',
        teacher: ' Какой предмет ы ведете?',
    };

    return function (name) {
        return `${name}, ${jobDictionary[job]}?`;
    };

    /*if(job === 'developer') {
        return function (name) {
            return `${name}, что такое JS ?`;
        };
    } else if (job === 'teacher') {
        return function (name) {
            return `${name}, Какой предмет ы ведете?`;
        };
    }*/
}

const developerQuestion = question('developer');
console.log(developerQuestion('Den'));
const teacherQuestion = question('teacher');
console.log(teacherQuestion('Denis'));