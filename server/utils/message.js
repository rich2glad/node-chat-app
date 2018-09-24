var moment = require('moment');

var generateMessage = (from,text)=>{
    return {
        from,
        text,
        createdAt: new moment().valueOf()
    };
};

var generateLocationMessage = (from,lat,lon)=>{
    return {
        from,
        url:`https://google.com/maps?q=${lat},${lon}`,
        createdAt: new moment().valueOf()
    };
};

module.exports={generateMessage,generateLocationMessage}