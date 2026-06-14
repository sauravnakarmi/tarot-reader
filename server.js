const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Tarot API is running!");
});

app.post("/reading", async (req, res) => {

    const { cards } = req.body;

    const spread = `
Past: ${cards[0]}
Present: ${cards[1]}
Future: ${cards[2]}
Challenge: ${cards[3]}
Guidance: ${cards[4]}
`;

    const prompt = `
You are a mystical oracle and expert tarot reader.

Interpret this tarot spread:

${spread}

Format your response as:

OVERVIEW

PAST

PRESENT

FUTURE

CHALLENGE

GUIDANCE

DESTINY'S WHISPER

Write in a mystical fantasy style.

Keep the reading between 300 and 500 words.

Do not use markdown.
`;

    try {

        const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt
                        }
                    ]
                }
            ]
        })
    }
);

        if (!response.ok) {

    const errorText =
        await response.text();

    console.error(errorText);

    throw new Error(
        `Gemini Error: ${response.status}`
    );
}

        const data =
    await response.json();

console.log(
    JSON.stringify(data, null, 2)
);

const reading =
    data.candidates?.[0]
        ?.content?.parts?.[0]
        ?.text;

        res.json({
            reading
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error:
                "Unable to generate reading."
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});