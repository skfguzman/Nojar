const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path');

const routes = require('./routes/index')
const mongoose = require('mongoose');
const uri = 'mongodb+srv://polarM:NlqoVe4oBvrY5NpO@superkiwi0.uav75zk.mongodb.net/Nojar?retryWrites=true&w=majority'


mongoose.connect(uri)
    .then(db => console.log('DB connected to ' + db))
    .catch(err => console.log(err));


let corsOptions = {
    origin: "http://localhost:8080"
}

let app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/assets/img',express.static('./assets/img'))

app.use('/',routes)
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})