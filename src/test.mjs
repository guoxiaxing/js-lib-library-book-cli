import inquirer from 'inquirer';
// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'name',
//         message: '仓库的名字',
//         default: 'myLib',
//     }, {
//         type: 'confirm',
//         name: 'test',
//         message: 'Are you test?',
//         default: true
//     }
// ])
//     .then((answers) => {
//         console.log('结果为: ');
//         console.log(answers)
//     })

// inquirer.prompt([{
//     type: 'list',
//     message: '选择一种水果',
//     name: 'fruit',
//     choices: ['🍎', '🍌', '🍐'],
//     filter: function (val) {
//         const map = {
//             '🍎': 'apple',
//             '🍌': 'banana',
//             '🍐': 'pear'
//         }
//         return map[val]
//     }
// }])
//     .then((answers) => {
//         console.log('结果为: ');
//         console.log(answers)
//     })

// inquirer.prompt([{
//     type: 'checkbox',
//     message: '选择喜欢的水果',
//     name: 'fruits',
//     choices: ['🍎', '🍌', '🍐'],
//     default: ['🍎'],
//     filter: function (vals) {
//         const map = {
//             '🍎': 'apple',
//             '🍌': 'banana',
//             '🍐': 'pear'
//         }
//         return vals.map(val => map[val]); 
//     }
// }])
//     .then((answers) => {
//         console.log('结果为: ');
//         console.log(answers)
//     })

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: '仓库的名字',
        default: 'myLib',
        validate: function (input) {
            if (/\s+/g.test(input)) {
                return '仓库的名字不能包含空格'
            }
            return true;
        }
    }
])
    .then((answers) => {
        console.log('结果为: ');
        console.log(answers)
    })