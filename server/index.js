require('dotenv').config();
const   express = require('express'),
        massive = require('massive'),
        session = require('express-session'),
        {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
        cartCtrl = require('./cartController'),
        authCtrl = require('./authController')
        app = express();

app.use(express.json());

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        console.log('db connected')
    });

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

//EndPoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);


app.get('/api/products', cartCtrl.getProducts);


const port = SERVER_PORT || 4040 ;
app.listen(port, ()=> console.log(`Server running on ${port}`));

