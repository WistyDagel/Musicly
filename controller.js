
const formidable = require('formidable');
const fs = require('fs');

exports.uploadImage = (req, res) => {

    const form = formidable({
        multiples: true
    });

    var filePath;
    let data = JSON.parse(fs.readFileSync('data.json', {encoding:'utf-8'}));
    // check if folder exists
    if (!fs.existsSync(__dirname + '/music/')) {
        console.log('folder no exist');
        fs.mkdirSync(__dirname + '/music/');
    }


    form.parse(req, (err, fields, files) => {
        fields.path = files.musicFile.path
        data.push(fields)
        console.log(files.musicFile.path);
        fs.writeFileSync('data.json',JSON.stringify(data, null, 4),{encoding:'utf-8'});
    }).on('fileBegin', (name, file) => {
        // console.log(data)
        data.path = './music/'+ file.name;
        // data[data.length - 1].path = './music/'+ file.name;
        file.path = './music/'+ file.name;
        filePath = './music/'+ file.name;
        // console.log(filePath);
    });


    // //Upload File
    // form.on('fileBegin', (name, file) => {
    //     // console.log(data)
    //     data.path = './music/'+ file.name;
    //     // data[data.length - 1].path = './music/'+ file.name;
    //     file.path = __dirname +'/music/'+ file.name;
    //     filePath = __dirname +'/music/'+ file.name;
    //     // console.log(filePath);
    // });
    


    // var category = "";
    // form.on('field', (fieldName, fieldValue) => {
    //     category = fieldValue;
    //   });
    
    // form.on('file', (name, file) => {
    //     //Encode File
    //     fs.readFile(filePath, (err, data) => {
    //         if (err) console.error(err);
    //         var imgEncode = new Buffer(data).toString('base64');
    //         // console.log(imgEncode);

    //         //Delete local file
    //         fs.unlink(filePath, (err) => {
    //             if (err) console.error(err)
    //         });
    //     })
    // });




    res.redirect('/');
}
