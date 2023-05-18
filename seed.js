const { MongoClient } = require("mongodb");

const url = "mongodb+srv://patdunn01:Socket248@palabracluster0.gdovztl.mongodb.net/"
const client = new MongoClient(url);

const dbName = "blogs";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("people");

    // Construct a document
    const seedWords = {
      words: [
        {
          word: "Inefable",
          sentence: "El paisaje era tan hermoso que resultaba inefable.",
          english: "Ineffable",
          englishMeaning:
            "This describes something that is too extraordinary, intense, or overwhelming to be expressed or described in words.",
          answers: ["Majestic", "Eloquent", "Ineffable", "Exquisite"],
        },
        {
          word: "Efímero/Efímera",
          sentence: "La felicidad de aquel momento era efímera.",
          english: "Ephemeral",
          englishMeaning:
            "This refers to something that lasts for a short period, transitory, or fleeting.",
          answers: ["Endeavor", "Intricate", "Ephemeral", "Resilient"],
        },
        {
          word: "Arduo/Ardua",
          sentence:
            "El estudiante se enfrentó a un problema arduo de matemáticas.",
          english: "Arduous",
          englishMeaning:
            "This describes something that requires a great deal of effort, laborious, or demanding.",
          answers: ["Ingenious", "Profound", "Vibrant", "Arduous"],
        },
        {
          word: "Ubicuo/Ubicua",
          sentence:
            "Los smartphones se han vuelto ubicuos en nuestra sociedad.",
          english: "Ubiquitous",
          englishMeaning:
            "This refers to something that is present, or seems to be present, everywhere at the same time.",
          answers: ["Audacious", "Ubiquitous", "Spectacular", "Tenacious"],
        },
        {
          word: "Pletórico/Pletórica",
          sentence:
            "El cantante recibió una ovación pletórica al terminar su actuación.",
          english: "Plentiful",
          englishMeaning:
            "This describes something that is abundant, ample, or rich in quantity.",
          answers: ["Impeccable", "Opulent", "Plentiful", "Diligent"],
        },
        {
          word: "Enigmático/Enigmática",
          sentence: "La pintura enigmática provocaba preguntas sin respuesta.",
          english: "Enigmatic",
          englishMeaning:
            "This refers to something mysterious, puzzling, or difficult to understand.",
          answers: ["Riveting", "Resourceful", "Enigmatic", "Persistent"],
        },
        {
          word: "Suprimir",
          sentence: "El gobierno decidió suprimir el impuesto.",
          english: "Suppress",
          englishMeaning:
            "This means to put an end to, eliminate, or prevent something from happening.",
          answers: ["Suppress", "Discerning", "Captivating", "Steadfast"],
        },
        {
          word: "Resplandecer",
          sentence: "El sol comenzó a resplandecer en el horizonte.",
          english: "Shine",
          englishMeaning:
            "This means to emit or reflect a bright light, to be brilliant or radiant.",
          answers: ["Myriad", "Shine", "Compelling", "Intrepid"],
        },
      ],
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(seedWords);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
