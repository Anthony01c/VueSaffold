//vue.config.js
const path = require('path')

module.exports = {//只能写vue封装的配置
    configureWebpack:{//内部写webpack的配置
        resolve:{
            extensions:['.js','vue','json'],
            alias:{
                '@':path.resolve(__dirname,'src'),
                '@components':path.resolve(__dirname,'src/components')
            }
        }
    }
}