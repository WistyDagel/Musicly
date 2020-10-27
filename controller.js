
const formidable = require('formidable');

exports.uploadImage = (req, res) => {

    const form = formidable({
        multiples: true
    });

    var filePath;
    form.parse(req)
    //Upload File
    form.on('fileBegin', (name, file) => {
        file.path = __dirname +'/'+ file.name;
        filePath = __dirname +'/'+ file.name;
        console.log(filePath);
    });
    


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
