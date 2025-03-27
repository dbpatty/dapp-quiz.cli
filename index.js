/*
  dApp Quiz - Multi-language (Rust, Solidity, TypeScript)
  Scoring:
    - Wrong answer: 0 points
    - Noob answer: 0.5 points
    - Senior answer: 1 point
  Execution time: ~1 minute
*/

const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quiz = [
  {
    question: "[Rust] Qual è il modo corretto per gestire lo storage persistente in una dApp basata su Substrate?",
    answers: [
      { text: "Usare variabili globali", score: 0 },
      { text: "Usare il pallet `storage`", score: 0.5 },
      { text: "Usare gli storage map del pallet FRAME", score: 1 }
    ]
  },
  {
    question: "[Solidity] Qual è la visibilità predefinita di una funzione in Solidity?",
    answers: [
      { text: "public", score: 1 },
      { text: "private", score: 0 },
      { text: "internal", score: 0.5 }
    ]
  },
  {
    question: "[TypeScript] Qual è la libreria più comunemente usata per interagire con smart contract Ethereum?",
    answers: [
      { text: "Ethers.js", score: 1 },
      { text: "Web3.js", score: 0.5 },
      { text: "Truffle", score: 0 }
    ]
  },
  {
    question: "[Rust] Come si gestiscono le chiamate asincrone in una dApp su Substrate?",
    answers: [
      { text: "Con async/await", score: 0.5 },
      { text: "Con tokio::spawn", score: 0 },
      { text: "Non si usano async, si usano extrinsics", score: 1 }
    ]
  },
  {
    question: "[Solidity] Cosa rappresenta `msg.sender` in un contratto smart?",
    answers: [
      { text: "L'indirizzo del contratto chiamante", score: 0 },
      { text: "L'indirizzo dell'utente che ha firmato la transazione", score: 1 },
      { text: "L'indirizzo del nodo Ethereum", score: 0.5 }
    ]
  },
  {
    question: "[TypeScript] In una dApp, cosa rappresenta il provider?",
    answers: [
      { text: "L'istanza di un contratto", score: 0 },
      { text: "L'interfaccia per interagire con la blockchain", score: 1 },
      { text: "L'account utente", score: 0.5 }
    ]
  },
  {
    question: "[Rust] Quale crate è comunemente usato per lo sviluppo di smart contract su blockhain compatibili WASM?",
    answers: [
      { text: "rocket", score: 0 },
      { text: "ink!", score: 1 },
      { text: "substrate", score: 0.5 }
    ]
  },
  {
    question: "[Solidity] Come si gestisce l'overflow dei numeri interi in Solidity 0.8.x?",
    answers: [
      { text: "Con la libreria SafeMath", score: 0.5 },
      { text: "Non serve, Solidity lo gestisce di default", score: 1 },
      { text: "Non si può gestire", score: 0 }
    ]
  },
  {
    question: "[TypeScript] Come si ottiene il balance di un account Ethereum usando Ethers.js?",
    answers: [
      { text: "provider.getBalance(address)", score: 1 },
      { text: "contract.getBalance(address)", score: 0 },
      { text: "web3.eth.getBalance(address)", score: 0.5 }
    ]
  },
  {
    question: "[Solidity] Quale funzione si usa per ricevere Ether senza dati in ingresso?",
    answers: [
      { text: "receive()", score: 1 },
      { text: "fallback()", score: 0.5 },
      { text: "payable()", score: 0 }
    ]
  }
];

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
