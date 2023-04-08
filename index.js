import cohere from 'cohere-ai';
import ora from 'ora';

const spinner = ora('Cargando el texto').start()

cohere.init('APIKEY'); // Input you trial API key
(async () => {
  const response = await cohere.generate({
    model: 'xlarge',
    prompt: 'create me a list with 5 frases of motivation',
    max_tokens: 200,
    temperature: 1,
    k: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });

  spinner.succeed('Done!');
  console.log(`Prediction: ${response.body.generations[0].text}`);
})();