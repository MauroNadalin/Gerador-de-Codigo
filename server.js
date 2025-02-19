const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const codex = require('./codex.js');  // Certifique-se de que está importando o arquivo corretamente

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/gerar-codigo', async (req, res) => {
  const { tipoCodigo, descricao } = req.body;

  if (!descricao) {
    return res.json({ codigo: 'Por favor, forneça uma descrição.' });
  }

  let codigoGerado = '';
  if (tipoCodigo  && descricao) {
    const texto = tipoCodigo+descricao;
    // Agora chamando a função corretamente
    codigoGerado = await codex.gerarCodigo(texto);
  }

  // Retorna o código gerado como JSON para o front-end
  res.json({ codigo: codigoGerado });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
