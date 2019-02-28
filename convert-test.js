const fs = require('fs');

const content = fs.readFileSync('mytitle.apib', 'utf-8');

var apib2swagger = require('.'),
    apib = content,
    options = { preferReference: true, bearerAsApikey: false };

apib2swagger.convert(apib, options, function (error, result) {
    if (!error) {
        fs.writeFileSync('swagger.json', JSON.stringify(result.swagger, 0, 2))
    }
});
