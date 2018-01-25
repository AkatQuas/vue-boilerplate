// todo change the folder path
const fs = require('fs'),
    readline = require('readline')
const { resolve, exec, child_build } = require('./utils')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const paths = [
    { name: 'carrier', path: resolve('carrier') },
    { name: 'project', path: resolve('src') }
].map(v => ({
    name: v.name,
    list: fs.readdirSync(v.path)
}))

paths.forEach(o => {
    console.log(o.name)
    o.list.forEach((v, i) => {
        console.log(`    ${i} -> ${v}`)
    })
})

console.log(`
How to use:
* the input contains 2 part: "[carrier config] ; [project] "
- choose the carrier number, and then the project number; then the building flag, for example: 0 ; 1 2
`)

rl.on('line', line => {
    line = line.split(';')
    if (line.length !== 2) {
        return console.log('wrong input')
    }
    const x = line.map((a, i) => {
        a = a.split(' ').filter(v => !!v)
        return a.map(v => paths[i].list[v])
    })
    if (x[0].length > 1) {
        return console.log('don not support mutiple-carriers-copying task')
    }
    console.log('start coping files')
    x[0].forEach(c => {
        x[1].forEach(p => {
            exec('cp ' + resolve('carrier/' + c) + '/config.js ' + resolve('src/' + p + '/src/config/carrier.js'))
            exec('cp ' + resolve('carrier/' + c) + '/img/* ' + resolve('src/' + p + '/static/carrier'))
        })
    })
    rl.question('copying done, continue to build? (Y/n) \n', (answer = y) => {
        answer = answer || 'y';
        answer = answer.toLowerCase().trim();
        if (answer !== 'y') {
            console.log('choose not to build, process done. exit!')
            return rl.close()
        }

        console.log('start buiding\n');

        const final_dist = resolve('dist')
        exec('rm -rf ' + final_dist)
        exec('mkdir ' + final_dist)
        let tasks = x[1].length

        x[1].forEach(p => {
            child_build(p, _ => {
                console.log('build done: ' + p)
                exec('mv ' + resolve('src/' + p + '/dist') + ' ' + resolve('dist/' + p))
                tasks--
                if (tasks <= 0) {
                    console.log('all done')
                    return rl.close()
                }
            })
        })
    }) 
}).on('close', _ => {
    console.log('process done')
    process.exit(0)
});

