const { readFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => { 
    if (err) {
        console.error(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        const second = result;

        // Do something with both file contents
        console.log(`First File: ${first}`);
        console.log(`Second File: ${second}`);
    });
});
