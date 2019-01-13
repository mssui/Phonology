const path = require('path');
// const axios = require('axios')
// module.exports = axios.create({
//   baseURL: 'http://localhost:3030'
// })
module.exports = {
    // devServer :{
    //     proxy : {
    //         '/' : {
    //             target : 'http://localhost:3030'
    //         }
    //     }
    // },
outputDir : path.resolve(__dirname, '../public')
}