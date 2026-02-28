const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('🚀 Farmácia Hub API LIVE!'));
app.get('/api/pedidos', (req, res) => res.json([]));
app.get('/api/lares', (req, res) => res.json([]));

const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`API porta ${port}`));
