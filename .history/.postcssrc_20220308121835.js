// ESM - js 에서 동작하는 방식 -  import 나 export 방식으로 호출

// CommonJS - node.js 에서 동작하는 방식

// import autoprefixer  from 'autoprefixer'
const autoprefixer = require('autoprefixer')


//export 
module.exports = {
	plugins: [
		autoprefixer
	]
}