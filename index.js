/* dApp Quiz - Multi-language (Rust, Solidity, TypeScript)
Scoring:
  - Wrong answer: 0 points
  - Noob answer: 0.5 points
  - Senior answer: 1 point
Execution time: ~1 minute */

const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// [quiz questions omitted for brevity, they will be filled in real code]
const quiz = [...]; // Use full quiz content here

function askQuestion(query) {
  return new Promise(resolve => rl.question(chalk.cyan(query), resolve));
}

async function startQuiz() {
  console.log(chalk.green(figlet.textSync("dApp Quiz", { horizontalLayout: 'full' })));
  console.log(chalk.yellow("Benvenuto al quiz su Rust, Solidity e TypeScript per dApp!\n"));

  const name = await askQuestion("Inserisci il tuo nome: ");
  const email = await askQuestion("Inserisci la tua email: ");

  console.log(chalk.green("\nInizio quiz...\n"));
  const startTime = Date.now();
  let total = 0;

  for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];
    console.log(chalk.magenta(`\n${i + 1}. ${q.question}`));
    q.answers.forEach((a, idx) => console.log(`  ${chalk.white(String.fromCharCode(65 + idx))}. ${a.text}`));

    const answer = await askQuestion("Risposta (A/B/C): ");
    const idx = answer.toUpperCase().charCodeAt(0) - 65;
    if (q.answers[idx]) total += q.answers[idx].score;
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  const result = `\nNome: ${name}\nEmail: ${email}\nPunteggio: ${total}/10\nTempo impiegato: ${duration} secondi\n---\n`;

  fs.appendFileSync('risultati_quiz.txt', result);
  console.log(chalk.bgGreenBright(`\nRisultato registrato!`));
  console.log(chalk.white(result));
  rl.close();
}

startQuiz();
