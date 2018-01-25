const path = require('path'),
    child_process = require('child_process')

// todo modified
const resolve = dir => path.resolve(__dirname, '../..', dir)

const exec = cmd => child_process.execSync(cmd)

const execR = cmd => child_process.execSync(cmd).toString().trim()

const child_build = (dir, callback) => {
    const targetDir = resolve('src/' + dir)

    const targetBuildJs = resolve('src/' + dir + '/build/build.js')
    const opt = {
        cwd: targetDir
    }
    const child = child_process.spawn('node', [targetBuildJs], opt);

    child.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });

    child.stderr.on('data', function (data) {
        console.log('stderr: ' + data);
    });

    child.on('close', function (code) {
        console.log('child process exited with code ' + code);
        callback && callback()
    });
}

module.exports = {
    resolve,
    exec,
    execR,
    child_build
} 
