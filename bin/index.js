#!/usr/bin/env node
const yargs = require('yargs');
const { runInitPrompts } = require('./run-prompts.js');
// const { init } = require('./init');

yargs
    .command(['new', 'n'], '新建一个项目', function (argv) {
        runInitPrompts(argv._[1], yargs.argv).then(answers => {
            console.log(answers)
            // 注意这里
            // init(argv, answers)
        })
    })

// yargs
//     .usage('usage: cli [options]')
//     .usage('usage: cli <command> [options]')
//     .example('cli new myLib', '新建一个项目')
//     .alias('h', 'help')
//     .alias('v', 'version')
//     .command(['new', 'n'], '新建一个项目', function (yargs) {
//         return yargs.option('name', {
//             alias: 'n',
//             demand: false,
//             default: 'myLib',
//             describe: 'your library name',
//             type: 'string'
//         })
//     }, function (argv) {
//         console.log(argv);
//         // 初始化逻辑
//     })
//     .epilog('copyright 2023')
//     .demandCommand().argv;

//    demandCommand() 可以在执行 cli  命令时默认输出帮信息