import chalk from "chalk";
const error = console.error;
const log = console.log;
const warn = console.warn;
const info = console.info;
function init() {
    console.success = function(...args) {
        log(chalk.bold.green(...args))
    }
    console.error = function(...args) {
        error(chalk.bold.red(...args))
    }
    console.info = function(...args) {
        info(chalk.bold.blue(...args))
    }
    console.warn = function(...args) {
        warn(chalk.hex('#ffa500')(...args))
    }
}
init();
console.info(1111);
console.error(1111);
console.warn(1111);
console.success(1111);


