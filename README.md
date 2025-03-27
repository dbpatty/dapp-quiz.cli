# dApp Quiz CLI

Un quiz interattivo in Node.js per testare le tue conoscenze su dApp in **Rust**, **Solidity** e **TypeScript**.

## 🧠 Regole del gioco
- Ogni domanda ha 3 risposte:
  - ❌ Sbagliata = 0 punti
  - 🟡 Da noob = 0.5 punti
  - ✅ Da senior = 1 punto
- Il quiz dura circa **1 minuto**.
- Al termine, verranno salvati:
  - Nome
  - Email
  - Punteggio
  - Tempo di esecuzione

## 🚀 Installazione
Assicurati di avere [Node.js](https://nodejs.org/) installato.

```bash
npm install chalk figlet
```

## ▶️ Avvio del quiz

```bash
node index.js
```

## 📝 Salvataggio risultati
I risultati saranno salvati in un file `risultati_quiz.txt` nella directory corrente.

## 📁 File inclusi
- `index.js` — script principale del quiz
- `risultati_quiz.txt` — dove vengono registrati i risultati dei partecipanti
- `README.md` — questo file


dapp-quiz-cli/
├── index.js                # Script principale del quiz
├── risultati_quiz.txt      # File di log dei risultati
├── README.md               # Istruzioni e guida
├── package.json            # Configurazione progetto Node.js
├── LICENSE                 #licenza
├── .gitignore            

## 📌 Note
- Pensato per studenti, sviluppatori e appassionati di blockchain.
- Può essere esteso con interfaccia web, connessione a database o integrazione con wallet.

---
Enjoy the quiz! 🚀
