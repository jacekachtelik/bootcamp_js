const onTimeout = () => console.log('Zapisano!');

const onWriteSuccess = () => setTimeout(onTimeout, 1000);

const onReadSuccess(error, text) => {
  console.log(text);
  fs.writeFile('myfile-copy.txt', text, onWriteSuccess);
}

fs.readFile('myfile.txt', { encoding: 'utf8' }, onReadSuccess);