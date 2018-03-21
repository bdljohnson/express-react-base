const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
let app = express();
if(process.env.NODE_ENV !== 'production'){
    app.use(express.static('dist'));
} else {
    app.use(express.static('public'));
}



app.get('/', (req, res)=>{
    if(process.env.NODE_ENV !== 'production'){
        res.sendFile(path.join(__dirname+'/dist/index.html'));
    } else {
        res.sendFile(path.join(__dirname+'/public/index.html'));
    }
    
})

app.listen(PORT, ()=>{
    console.log('Started')
});