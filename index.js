import express from 'express';

const charCount = async (req, res) => {
  const { input } = req.body;
  if (typeof input !== 'string') {
    return res.status(400).json({ error: 'Input must be a string' });
  }
  res.json({ output: input.length });
};

const charCountDocs = (req, res) => {
  res.json({
    name: 'charCount',
    description: 'Returns the number of characters in the input string',
    input: {
      type: 'string',
      description: 'The string whose length is to be counted',
      example: 'Hello, world!'
    },
    output: {
      type: 'number',
      description: 'The number of characters in the input string',
      example: 13
    }
  });
};

const app = express();
app.use(express.json());

app.post('/functions/charCount', charCount);
app.get('/functions/charCount', charCountDocs);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`charCount function running at http://localhost:${PORT}`);
});
