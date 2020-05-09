var express = require( 'express' );
var app = express();
app.get('/',function(req,res){
	res.send('Hello World!');
});
//sscomment
app.listen(3001,function(){
console.log('App is running on port 3000');
});
