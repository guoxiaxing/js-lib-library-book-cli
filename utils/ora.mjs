import ora from 'ora'
const spinner = ora('Loading 1').start();
setTimeout(()=>{
    spinner.color = 'yellow';
    spinner.text = 'Loading 2'
}, 1000)

setTimeout(()=>{
    spinner.succeed('Loading Success')
}, 2000)