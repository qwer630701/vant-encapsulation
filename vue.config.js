const path = require("path");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");

const Timestamp = new Date().getTime();
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vant-encapsulation/" : "/",
  //静态资源打包到该文件夹
  // assetsDir: "static",
  configureWebpack: {
    plugins: [],
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${Timestamp}.js`,
      chunkFilename: `js/[name].${Timestamp}.js`
    }
  },

  // pages: entries, //配置多入口
  // pages: {
  //   index: {
  //     entry: "src/main.js",
  //     template: "public/index.html",
  //     filename: "index.html",
  //     title: "index"
  //   },
  //   error: {
  //     entry: "src/error/error.js",
  //     template: "public/404.html",
  //     filename: "404.html",
  //     title: "404"
  //   }
  // },

  chainWebpack: config => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );

    config.module
      .rule("images")
      .use("url-loader")
      .tap(() => {
        return {
          limit: 4096,
          fallback: {
            loader: "file-loader",
            options: {
              name:
                (process.env.NODE_ENV === "production"
                  ? "vant-encapsulation/"
                  : "") + `images/[name].${Timestamp}.[ext]`
            }
          }
        };
      });
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [__dirname, "./src/assets/css/variable.less"]
    }
  },

  css: {
    loaderOptions: {
      less: {},
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
            selectorBlackList: ["van-circle__layer"]
          })
        ]
      }
    }
  },
  devServer: {
    //port:8009
    port: 9997
  }
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "src/css/variable.less") // 需要全局导入的less
      ]
    });
}
