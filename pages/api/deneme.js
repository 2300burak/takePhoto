// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
export default function handler(req, res) {
  fs.appendFile(`c:\Users\PC\Desktop\mynewfile1.txt`, 'Hello content! deneme ', function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.status(200).end();
  });
}
