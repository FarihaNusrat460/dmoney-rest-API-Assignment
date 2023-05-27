const newman = require('newman');
 
newman.run({
    //collection:"https://api.postman.com/collections/27409344-36f2e69b-5bbf-493c-ad56-03940d80f09b?access_key=PMAT-01H16F7MSAXXA8M07RDG4H4HJB",

    collection:'https://api.postman.com/collections/27409344-0930d3fb-eab4-4848-aa1f-8532a62321b1?access_key=PMAT-01H1CKSVQ12Z7D4VMFV4T6BBGF',
    //environment:require('./collection/env.json'),
    reporters: ["cli", "htmlextra"],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});