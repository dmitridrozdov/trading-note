// var exec = require('child_process').exec;
import { exec } from 'child_process'

export function puts(error, stdout, stderr) { 
    exec('sh test.sh', function(error, stdout, stderr) {
    if (!error) {
        console.log('exec success!')
    } else {
        console.log(error)
    }
})}