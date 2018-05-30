const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./server/shelfieController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
  console.log('connected')
  app.set('db', dbInstance);
});

app.get('/api/shelf/:id',controller.shelfID)
app.get('/api/bin/:id',controller.getBinID)
app.put('/api/bin/:id', controller.putBinID)
app.delete('/api/bin/:id',controller.deleteBinID)
app.post('/api/bin/:id',controller.postBinID)

const port = process.env.PORT || 8080
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );