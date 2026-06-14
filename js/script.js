let currentReading = [];
let currentTypingSession = 0;

const tarotCards = [

    {
    name: "The Fool",
    image: "images/the_fool.jpg",
    meaning: "The Fool represents new beginnings, optimism, spontaneity, and taking a leap of faith into the unknown.",
    special: false
},
{
    name: "The Magician",
    image: "images/the_magician.jpg",
    meaning: "The Magician signifies manifestation, confidence, skill, and the power to turn ideas into reality.",
    special: false
},
{
    name: "The High Priestess",
    image: "images/the_high_priestess.jpg",
    meaning: "The High Priestess represents intuition, inner wisdom, mystery, and trusting your subconscious guidance.",
    special: false
},
{
    name: "The Empress",
    image: "images/the_empress.jpg",
    meaning: "The Empress symbolizes abundance, creativity, nurturing energy, fertility, and personal growth.",
    special: false
},
{
    name: "The Emperor",
    image: "images/the_emperor.jpg",
    meaning: "The Emperor represents authority, structure, leadership, stability, and disciplined action.",
    special: false
},
{
    name: "The Hierophant",
    image: "images/the_hierophant.jpg",
    meaning: "The Hierophant signifies tradition, spiritual wisdom, learning, and guidance through established systems.",
    special: false
},
{
    name: "The Lovers",
    image: "images/the_lovers.jpg",
    meaning: "The Lovers represents love, harmony, deep connections, and choices aligned with your values.",
    special: false
},
{
    name: "The Chariot",
    image: "images/the_chariot.jpg",
    meaning: "The Chariot symbolizes determination, willpower, self-control, and victory through focused effort.",
    special: false
},
{
    name: "Strength",
    image: "images/strength.jpg",
    meaning: "Strength represents courage, patience, compassion, and the ability to overcome challenges through inner resilience.",
    special: false
},
{
    name: "The Hermit",
    image: "images/the_hermit.jpg",
    meaning: "The Hermit signifies introspection, wisdom, solitude, and seeking answers within.",
    special: false
},
{
    name: "Wheel of Fortune",
    image: "images/wheel_of_fortune.jpg",
    meaning: "The Wheel of Fortune represents destiny, cycles, change, luck, and turning points in life.",
    special: false
},
{
    name: "Justice",
    image: "images/justice.jpg",
    meaning: "Justice symbolizes truth, fairness, accountability, and making balanced decisions.",
    special: false
},
{
    name: "The Hanged Man",
    image: "images/the_hanged_man.jpg",
    meaning: "The Hanged Man represents surrender, patience, sacrifice, and gaining a new perspective.",
    special: false
},
{
    name: "Death",
    image: "images/death.jpg",
    meaning: "Death signifies transformation, endings, renewal, and the closing of one chapter to begin another.",
    special: false
},
{
    name: "Temperance",
    image: "images/temperance.jpg",
    meaning: "Temperance represents balance, moderation, harmony, and blending different aspects of life successfully.",
    special: false
},
{
    name: "The Devil",
    image: "images/the_devil.jpg",
    meaning: "The Devil symbolizes temptation, unhealthy attachments, materialism, and limiting beliefs.",
    special: false
},
{
    name: "The Tower",
    image: "images/the_tower.jpg",
    meaning: "The Tower signifies sudden upheaval, shocking revelations, and the collapse of unstable foundations.",
    special: false
},
{
    name: "The Star",
    image: "images/the_star.jpg",
    meaning: "The Star represents hope, healing, inspiration, spiritual renewal, and faith in the future.",
    special: true
},
{
    name: "The Moon",
    image: "images/the_moon.jpg",
    meaning: "The Moon symbolizes intuition, illusion, uncertainty, dreams, and the mysteries of the subconscious.",
    special: false
},
{
    name: "The Sun",
    image: "images/the_sun.jpg",
    meaning: "The Sun represents joy, success, vitality, confidence, and positive outcomes.",
    special: false
},
{
    name: "Judgement",
    image: "images/judgement.jpg",
    meaning: "Judgement signifies awakening, self-reflection, accountability, and embracing transformation.",
    special: false
},
{
    name: "The World",
    image: "images/the_world.jpg",
    meaning: "The World represents completion, achievement, fulfillment, and reaching an important milestone.",
    special: false
},
{
    name: "Ace of Wands",
    image: "images/ace_of_wands.jpg",
    meaning: "The Ace of Wands represents inspiration, new opportunities, creative energy, and bold beginnings.",
    special: false
},
{
    name: "Two of Wands",
    image: "images/two_of_wands.jpg",
    meaning: "The Two of Wands symbolizes planning, future possibilities, and stepping beyond your comfort zone.",
    special: false
},
{
    name: "Three of Wands",
    image: "images/three_of_wands.jpg",
    meaning: "The Three of Wands represents expansion, progress, and seeing your efforts begin to pay off.",
    special: false
},
{
    name: "Four of Wands",
    image: "images/four_of_wands.jpg",
    meaning: "The Four of Wands signifies celebration, stability, community, and joyful milestones.",
    special: false
},
{
    name: "Five of Wands",
    image: "images/five_of_wands.jpg",
    meaning: "The Five of Wands represents competition, conflict, differing opinions, and personal growth through challenge.",
    special: false
},
{
    name: "Six of Wands",
    image: "images/six_of_wands.jpg",
    meaning: "The Six of Wands symbolizes success, recognition, achievement, and public praise.",
    special: false
},
{
    name: "Seven of Wands",
    image: "images/seven_of_wands.jpg",
    meaning: "The Seven of Wands represents perseverance, standing your ground, and defending your position.",
    special: false
},
{
    name: "Eight of Wands",
    image: "images/eight_of_wands.jpg",
    meaning: "The Eight of Wands signifies rapid progress, swift action, movement, and incoming news.",
    special: false
},
{
    name: "Nine of Wands",
    image: "images/nine_of_wands.jpg",
    meaning: "The Nine of Wands represents resilience, persistence, and maintaining strength despite obstacles.",
    special: false
},
{
    name: "Ten of Wands",
    image: "images/ten_of_wands.jpg",
    meaning: "The Ten of Wands symbolizes burdens, responsibility, hard work, and the weight of obligations.",
    special: false
},
{
    name: "Page of Wands",
    image: "images/page_of_wands.jpg",
    meaning: "The Page of Wands represents enthusiasm, curiosity, adventure, and exciting opportunities.",
    special: false
},
{
    name: "Knight of Wands",
    image: "images/knight_of_wands.jpg",
    meaning: "The Knight of Wands signifies ambition, passion, confidence, and fearless pursuit of goals.",
    special: false
},
{
    name: "Queen of Wands",
    image: "images/queen_of_wands.jpg",
    meaning: "The Queen of Wands represents confidence, charisma, independence, and creative leadership.",
    special: false
},
{
    name: "King of Wands",
    image: "images/king_of_wands.jpg",
    meaning: "The King of Wands symbolizes vision, leadership, inspiration, and entrepreneurial success.",
    special: false
},
{
    name: "Ace of Cups",
    image: "images/ace_of_cups.jpg",
    meaning: "The Ace of Cups represents emotional renewal, love, compassion, intuition, and the beginning of meaningful connections.",
    special: false
},
{
    name: "Two of Cups",
    image: "images/two_of_cups.jpg",
    meaning: "The Two of Cups symbolizes partnership, mutual attraction, harmony, and deep emotional bonds.",
    special: false
},
{
    name: "Three of Cups",
    image: "images/three_of_cups.jpg",
    meaning: "The Three of Cups represents friendship, celebration, community, and shared happiness.",
    special: false
},
{
    name: "Four of Cups",
    image: "images/four_of_cups.jpg",
    meaning: "The Four of Cups signifies contemplation, apathy, reevaluation, and opportunities that may be overlooked.",
    special: false
},
{
    name: "Five of Cups",
    image: "images/five_of_cups.jpg",
    meaning: "The Five of Cups represents grief, disappointment, loss, and the challenge of focusing on what remains.",
    special: false
},
{
    name: "Six of Cups",
    image: "images/six_of_cups.jpg",
    meaning: "The Six of Cups symbolizes nostalgia, childhood memories, innocence, and reconnecting with the past.",
    special: false
},
{
    name: "Seven of Cups",
    image: "images/seven_of_cups.jpg",
    meaning: "The Seven of Cups represents choices, imagination, wishful thinking, and the need to distinguish fantasy from reality.",
    special: false
},
{
    name: "Eight of Cups",
    image: "images/eight_of_cups.jpg",
    meaning: "The Eight of Cups signifies walking away, seeking deeper meaning, emotional growth, and leaving what no longer serves you.",
    special: false
},
{
    name: "Nine of Cups",
    image: "images/nine_of_cups.jpg",
    meaning: "The Nine of Cups symbolizes satisfaction, wishes fulfilled, gratitude, and emotional contentment.",
    special: false
},
{
    name: "Ten of Cups",
    image: "images/ten_of_cups.jpg",
    meaning: "The Ten of Cups represents emotional fulfillment, family harmony, loving relationships, and lasting happiness.",
    special: false
},
{
    name: "Page of Cups",
    image: "images/page_of_cups.jpg",
    meaning: "The Page of Cups signifies creativity, intuition, emotional openness, and unexpected inspiration.",
    special: false
},
{
    name: "Knight of Cups",
    image: "images/knight_of_cups.jpg",
    meaning: "The Knight of Cups represents romance, charm, imagination, and following your heart.",
    special: false
},
{
    name: "Queen of Cups",
    image: "images/queen_of_cups.jpg",
    meaning: "The Queen of Cups symbolizes compassion, emotional intelligence, intuition, and nurturing support.",
    special: false
},
{
    name: "King of Cups",
    image: "images/king_of_cups.jpg",
    meaning: "The King of Cups represents emotional balance, wisdom, diplomacy, and compassionate leadership.",
    special: false
},
{
    name: "Ace of Swords",
    image: "images/ace_of_swords.jpg",
    meaning: "The Ace of Swords represents mental clarity, truth, breakthroughs, and powerful new ideas.",
    special: false
},
{
    name: "Two of Swords",
    image: "images/two_of_swords.jpg",
    meaning: "The Two of Swords symbolizes difficult decisions, stalemates, uncertainty, and the need for balance.",
    special: false
},
{
    name: "Three of Swords",
    image: "images/three_of_swords.jpg",
    meaning: "The Three of Swords represents heartbreak, painful truths, emotional wounds, and the healing that follows sorrow.",
    special: false
},
{
    name: "Four of Swords",
    image: "images/four_of_swords.jpg",
    meaning: "The Four of Swords signifies rest, recovery, contemplation, and taking time to recharge.",
    special: false
},
{
    name: "Five of Swords",
    image: "images/five_of_swords.jpg",
    meaning: "The Five of Swords represents conflict, tension, self-interest, and the consequences of winning at all costs.",
    special: false
},
{
    name: "Six of Swords",
    image: "images/six_of_swords.jpg",
    meaning: "The Six of Swords symbolizes transition, healing, moving forward, and leaving difficulties behind.",
    special: false
},
{
    name: "Seven of Swords",
    image: "images/seven_of_swords.jpg",
    meaning: "The Seven of Swords represents strategy, secrecy, deception, and acting independently.",
    special: false
},
{
    name: "Eight of Swords",
    image: "images/eight_of_swords.jpg",
    meaning: "The Eight of Swords signifies feeling trapped, self-limiting beliefs, restriction, and the need for a new perspective.",
    special: false
},
{
    name: "Nine of Swords",
    image: "images/nine_of_swords.jpg",
    meaning: "The Nine of Swords represents anxiety, worry, fear, and mental stress that may be greater than reality.",
    special: false
},
{
    name: "Ten of Swords",
    image: "images/ten_of_swords.jpg",
    meaning: "The Ten of Swords symbolizes painful endings, betrayal, rock bottom, and the opportunity for renewal.",
    special: false
},
{
    name: "Page of Swords",
    image: "images/page_of_swords.jpg",
    meaning: "The Page of Swords represents curiosity, vigilance, learning, and seeking the truth.",
    special: false
},
{
    name: "Knight of Swords",
    image: "images/knight_of_swords.jpg",
    meaning: "The Knight of Swords signifies ambition, determination, swift action, and pursuing goals fearlessly.",
    special: false
},
{
    name: "Queen of Swords",
    image: "images/queen_of_swords.jpg",
    meaning: "The Queen of Swords represents wisdom, honesty, independence, and clear communication.",
    special: false
},
{
    name: "King of Swords",
    image: "images/king_of_swords.jpg",
    meaning: "The King of Swords symbolizes authority, logic, truth, and intellectual mastery.",
    special: false
},
{
    name: "Ace of Pentacles",
    image: "images/ace_of_pentacles.jpg",
    meaning: "The Ace of Pentacles represents prosperity, opportunity, financial growth, and the foundation of future success.",
    special: false
},
{
    name: "Two of Pentacles",
    image: "images/two_of_pentacles.jpg",
    meaning: "The Two of Pentacles symbolizes adaptability, balance, time management, and handling multiple priorities.",
    special: false
},
{
    name: "Three of Pentacles",
    image: "images/three_of_pentacles.jpg",
    meaning: "The Three of Pentacles represents teamwork, collaboration, skill development, and achieving success through cooperation.",
    special: false
},
{
    name: "Four of Pentacles",
    image: "images/four_of_pentacles.jpg",
    meaning: "The Four of Pentacles signifies security, saving resources, stability, and holding tightly to what you value.",
    special: false
},
{
    name: "Five of Pentacles",
    image: "images/five_of_pentacles.jpg",
    meaning: "The Five of Pentacles represents hardship, financial struggles, isolation, and the importance of seeking support.",
    special: false
},
{
    name: "Six of Pentacles",
    image: "images/six_of_pentacles.jpg",
    meaning: "The Six of Pentacles symbolizes generosity, charity, fairness, and the balance of giving and receiving.",
    special: false
},
{
    name: "Seven of Pentacles",
    image: "images/seven_of_pentacles.jpg",
    meaning: "The Seven of Pentacles represents patience, long-term planning, investment, and evaluating progress.",
    special: false
},
{
    name: "Eight of Pentacles",
    image: "images/eight_of_pentacles.jpg",
    meaning: "The Eight of Pentacles signifies dedication, craftsmanship, skill mastery, and hard work paying off.",
    special: false
},
{
    name: "Nine of Pentacles",
    image: "images/nine_of_pentacles.jpg",
    meaning: "The Nine of Pentacles represents self-sufficiency, abundance, luxury, and enjoying the rewards of your efforts.",
    special: false
},
{
    name: "Ten of Pentacles",
    image: "images/ten_of_pentacles.jpg",
    meaning: "The Ten of Pentacles symbolizes wealth, family legacy, long-term security, and lasting success.",
    special: false
},
{
    name: "Page of Pentacles",
    image: "images/page_of_pentacles.jpg",
    meaning: "The Page of Pentacles represents ambition, learning, opportunity, and setting practical goals for the future.",
    special: false
},
{
    name: "Knight of Pentacles",
    image: "images/knight_of_pentacles.jpg",
    meaning: "The Knight of Pentacles signifies diligence, responsibility, persistence, and steady progress toward goals.",
    special: false
},
{
    name: "Queen of Pentacles",
    image: "images/queen_of_pentacles.jpg",
    meaning: "The Queen of Pentacles represents nurturing abundance, practicality, generosity, and creating a stable environment.",
    special: false
},
{
    name: "King of Pentacles",
    image: "images/king_of_pentacles.jpg",
    meaning: "The King of Pentacles symbolizes financial success, leadership, security, and mastery of the material world.",
    special: false
}
];

const cardModal =
    document.getElementById("cardModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalMeaning =
    document.getElementById("modalMeaning");

const closeModal =
    document.getElementById("closeModal");

const drawBtn =
    document.getElementById("drawBtn");

const cardContainer =
    document.getElementById("cardContainer");

function openCardModal(card, inspectHint) {

    modalImage.src =
        card.image;

    modalTitle.textContent =
        card.name;

    modalMeaning.innerHTML = `

    <strong>Interpretation</strong>

    <br><br>

    ${card.meaning}

    <br><br>

`;

    cardModal.classList.add("active");

    if (inspectHint) {

        inspectHint.classList.add("used");
    }
}

closeModal.addEventListener("click", () => {

    cardModal.classList.remove("active");
});

document
.querySelector(".modal-backdrop")
.addEventListener("click", () => {

    cardModal.classList.remove("active");
});

/* ---------- DRAW ---------- */

drawBtn.addEventListener("click", drawCards);

function drawCards() {
    currentTypingSession++;
    cardContainer.innerHTML = "";
const idleDeck =
    document.getElementById(
        "idleDeck"
    );

if (idleDeck) {

    idleDeck.style.opacity = "0";

    idleDeck.style.transform =
        "scale(.9)";
}
    currentReading = [];

    const deck =
    document.createElement("div");

deck.className =
    "dealing-deck";

deck.innerHTML = "✦";

cardContainer.appendChild(deck);

    const usedIndexes = [];

    for (let i = 0; i < 5; i++) {

        let randomIndex;

        do {

            randomIndex = Math.floor(
                Math.random() * tarotCards.length
            );

        } while (
            usedIndexes.includes(randomIndex)
        );

        usedIndexes.push(randomIndex);

        const card = tarotCards[randomIndex];

        currentReading.push(card);

        const cardWrapper =
            document.createElement("div");

        cardWrapper.classList.add("reading-card");

        cardWrapper.innerHTML = `

            <div class="flip-card">

                <div class="flip-card-inner">

                    <!-- BACK -->

                    <div class="card-back">

                        <div class="back-design">
                            ✦
                        </div>

                    </div>

                    <!-- FRONT -->

                    <div class="card-front">

                        <div class="tilt-card ${card.special ? "legendary-card" : ""}">

                            <div class="tarot-card">
                                <div class="inspect-hint">
                                    ✨ View Card
                                </div>

                                ${
                                    card.special
                                    ?
                                    `
                                    <div class="star-card-frame">

                                        <div class="star-card-number">
                                            XVII
                                        </div>

                                        <img
                                            src="${card.image}"
                                            alt="${card.name}"
                                        >

                                        <div class="star-card-title">
                                            THE STAR
                                        </div>

                                        <div class="legendary-glow"></div>

                                        <div class="legendary-stars">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>

                                        <div class="legendary-shine"></div>

                                    </div>
                                    `
                                    :
                                    `
                                    <img
                                        src="${card.image}"
                                        alt="${card.name}"
                                    >
                                    `
                                }

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        `;

cardContainer.appendChild(cardWrapper);


const positions = [
    1280, // first card
    960,  // second
    640,  // third
    320,  // fourth
    0      // fifth stays in deck
];

setTimeout(() => {

    cardWrapper.classList.add(
        "dealt"
    );

    cardWrapper.style.transform =
    `translateX(${positions[i]}px)`;

}, i * 500);

        const flipCard =
            cardWrapper.querySelector(".flip-card");

        const flipInner =
            cardWrapper.querySelector(".flip-card-inner");

        const tiltCard =
            cardWrapper.querySelector(".tilt-card");
        const inspectHint =
            cardWrapper.querySelector(".inspect-hint");

        /* ---------- FLIP ---------- */

        flipCard.addEventListener("click", () => {

            if (
                !flipInner.classList.contains("flipped")
            ) {

                flipInner.classList.add("flipped");

                /* ---------- LEGENDARY REVEAL ---------- */

                if (
                    tiltCard.classList.contains("legendary-card")
                ) {

                    tiltCard.classList.add("legendary-reveal");

                    /* ---------- BURST ---------- */

                    const burst =
                        document.createElement("div");

                    burst.classList.add("legendary-burst");

                    tiltCard.appendChild(burst);

                    setTimeout(() => {

                        burst.remove();

                    }, 900);
                }

                setTimeout(() => {

                    addTiltEffect(tiltCard);

                }, 1000);
            }
        });

        tiltCard.addEventListener("click", () => {

            if (
                flipInner.classList.contains("flipped")
            ) {

                openCardModal(
                    card,
                    inspectHint
                );
            }
        });
    }

    setTimeout(() => {

    deck.style.transition =
        "opacity .5s ease";

    deck.style.opacity = "0";

    setTimeout(() => {

        deck.remove();

    }, 500);

}, 2600);
}

currentTypingSession++;

aiReading.style.opacity = "0";

setTimeout(() => {

    aiReading.innerHTML = `
    <div class="reading-placeholder">

        ✦ THE ORACLE AWAITS ✦

        <br><br>

        Draw your cards and click

        <br>

        Consult the Oracle

        <br>

        to reveal your fate.

    </div>
    `;

    aiReading.style.opacity = "1";

}, 200);


/* ---------- TILT EFFECT ---------- */

function addTiltEffect(card) {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 30;

        const rotateX =
            ((y / rect.height) - 0.5) * -30;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `;

        card.style.setProperty(
            "--x",
            `${x}px`
        );

        card.style.setProperty(
            "--y",
            `${y}px`
        );

        card.style.setProperty(
            "--rotateX",
            `${rotateX}deg`
        );

        card.style.setProperty(
            "--rotateY",
            `${rotateY}deg`
        );

        const shine =
            card.querySelector(".legendary-shine");

        if (shine) {

            shine.style.transform = `
                translate(
                    ${rotateY * 0.5}px,
                    ${rotateX * 0.5}px
                )
            `;
        }
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });
}

const aiReadingBtn =
    document.getElementById(
        "aiReadingBtn"
    );

const aiReading =
    document.getElementById(
        "aiReading"
    );

aiReadingBtn.addEventListener(
    "click",
    async () => {

        currentTypingSession++;

        if (
            currentReading.length !== 5
        ) {

            alert(
                "Draw cards first."
            );

            return;
        }

        aiReading.innerHTML = `
<div class="oracle-loading">

    <div class="oracle-rune-circle">

        <span>✦</span>
        <span>☾</span>
        <span>✧</span>
        <span>☉</span>

    </div>

    <div
        class="oracle-status"
        id="oracleStatus"
    >
        Reading the threads of fate...
    </div>

    <div
        class="oracle-dots"
        id="oracleDots"
    >
        .
    </div>

</div>
`;

const oracleMessages = [

    "Reading the threads of fate...",
    "Consulting ancient spirits...",
    "Interpreting celestial signs...",
    "Peering beyond the veil...",
    "Gathering hidden truths...",
    "Listening to the whispers of destiny...",
    "Aligning the stars..."
];

let messageIndex = 0;

const statusInterval =
setInterval(() => {

    const status =
    document.getElementById(
        "oracleStatus"
    );

    if (!status) return;

    messageIndex =
        (messageIndex + 1)
        % oracleMessages.length;

    status.textContent =
        oracleMessages[
            messageIndex
        ];

}, 1500);

let dotCount = 1;

const dotsInterval =
setInterval(() => {

    const dots =
    document.getElementById(
        "oracleDots"
    );

    if (!dots) return;

    dotCount =
        (dotCount % 3) + 1;

    dots.textContent =
        ".".repeat(dotCount);

}, 500);

        const response =
            await fetch(
                "https://tarot-reader-jdwc.onrender.com/reading",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        cards:
                            currentReading.map(
                                card => card.name
                            )
                    })
                }
            );

        const data =
            await response.json();
        
            clearInterval(
    statusInterval
);

clearInterval(
    dotsInterval
);

        aiReading.innerHTML = `

<div class="oracle-reading">

    <div class="oracle-reading-header">

        ✦ THE ORACLE SPEAKS ✦

    </div>

    <div class="oracle-cards">

        <div>
            <span>PAST</span>
            ${currentReading[0].name}
        </div>

        <div>
            <span>PRESENT</span>
            ${currentReading[1].name}
        </div>

        <div>
            <span>FUTURE</span>
            ${currentReading[2].name}
        </div>

        <div>
            <span>CHALLENGE</span>
            ${currentReading[3].name}
        </div>

        <div>
            <span>GUIDANCE</span>
            ${currentReading[4].name}
        </div>

    </div>

    <div class="oracle-divider">
        ✦ ✦ ✦
    </div>

    <div class="oracle-reading-text">

        ${data.reading
            .replace(/\n/g, "<br><br>")}

    </div>

</div>
`;
    }
);