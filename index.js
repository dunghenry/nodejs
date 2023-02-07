const http = require('http');
const ejs = require('ejs');
// const fs = require('fs');
const colors = require('colors');
const port = 4000;
const myBlogs = [
    {
        title: 'My first blog',
        author: 'John',
    },
    {
        title: 'My second blog',
        author: 'Mike',
    },
];
const server = http.createServer(function (req, res) {
    // fs.readFile('index.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     var age = 22;
    // console.log(data.toString());
    //     res.write(`${data + `<h1>${myBlogs[0].title}</h1>`}`);
    //     return res.end();
    // });
    const user = {
        fullName: 'DungHenry',
        age: 21,
    };
    ejs.renderFile('index.ejs', { user }, function (err, str) {
        // str => Rendered HTML string
        // console.log('Hi');
        // console.log(str);
        return res.end(str);
    });
});

server.listen(port, () => {
    console.log(colors.green(`Server running http://localhost:${port}`));
});
