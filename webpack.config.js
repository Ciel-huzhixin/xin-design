

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 当前命令的工作目录
const cwd = process.cwd();
module.exports = {
  mode: 'development',
  devtool: false,
  entry: {
    design: './index.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: 'design',
    libraryTarget: 'this'
  },
  // 组件库代码不需要打包react/react-dom，可以配置成外部依赖
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react'
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 压缩css
          {
            loader: 'css-loader', // 处理@import和url
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              },
              sourceMap: true,
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              },
              sourceMap: true,
            }
          }
        ]
      },
      {
        // webpack5中，file-loader url-loader已经废弃
        test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}