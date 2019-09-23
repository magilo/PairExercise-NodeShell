process.stdout.write('type > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    pwd();
  }

  //process.stdout.write('you typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})

const pwd = require('./pwd.js');


