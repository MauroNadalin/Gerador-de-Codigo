const { response } = require('express');
const  { OpenAI } = require ('openai');

const openai = new OpenAI({
  apiKey: "secret-key", // coloque aqui sua chave 
});

// Função para gerar código
async function gerarCodigo(prompt) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',  // ou outro modelo Codex
        messages: [
          { role: 'user', content: prompt }
        ],
      });
      console.log(response.choices[0].message.content);
      
      
      const codigoGerado = response.choices[0].message.content;

      // Retornar o código gerado
      return codigoGerado;

      
      
    } catch (error) {
      console.error('Erro ao gerar código:', error);
    }
    
  }
  
  module.exports = { gerarCodigo };
