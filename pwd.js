module.exports = function () {
  // pwd code
    //process.stdout.write(__dirname);
  console.log(`Current directory: ${process.cwd()}`);

  //process.stdout.write('you typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}
