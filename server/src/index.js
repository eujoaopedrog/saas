const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Mock Fintech Simulation Endpoint
app.post('/api/fintech/simulate', (req, res) => {
  const { cpf, value } = req.body;
  // Mock logic
  if (!cpf || !value) {
    return res.status(400).json({ error: 'CPF and Value required' });
  }

  const approved = Math.random() > 0.3; // 70% approval chance
  if (approved) {
    return res.json({
      status: 'APPROVED',
      proposal: {
        installments: 24,
        installmentValue: (value / 24) * 1.1, // 10% interest mock
        total: value * 1.1
      }
    });
  } else {
    return res.json({ status: 'DENIED', reason: 'Score insuficiente' });
  }
});

app.get('/', (req, res) => {
  res.send('Odonto Flow API is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
