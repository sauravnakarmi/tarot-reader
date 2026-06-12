let currentReading = [];

const tarotCards = [

    {
        name: "The Fool",
        image: "images/fool.jpg",
        meaning:
            "The Fool represents new beginnings, freedom, spontaneity, and adventure.",

        special: false
    },

    {
        name: "The Magician",
        image: "images/magician.jpg",
        meaning:
            "The Magician symbolizes manifestation, confidence, and personal power.",

        special: false
    },

    {
        name: "The High Priestess",
        image: "images/high-priestess.jpg",
        meaning:
            "The High Priestess represents intuition and hidden wisdom.",

        special: false
    },

    {
        name: "The Moon",
        image: "images/moon.jpg",
        meaning:
            "The Moon symbolizes illusion, dreams, and uncertainty.",

        special: false
    },

    {
        name: "The Sun",
        image: "images/sun.jpg",
        meaning:
            "The Sun represents joy, warmth, positivity, and success.",

        special: false
    },

    {
        name: "The Star",
        image: "images/star.jpg",
        meaning:
            "The Star symbolizes hope, healing, inspiration, and emotional renewal.",

        special: true
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

    <strong>Reflection</strong>

    <br><br>

    Consider how this card connects to your current circumstances and what guidance it may be offering.

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

    cardContainer.innerHTML = "";

        currentReading = [];

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
}

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

        if (
            currentReading.length !== 5
        ) {

            alert(
                "Draw cards first."
            );

            return;
        }

        aiReading.innerHTML =
            "🔮 Consulting the cards...";

        const response =
            await fetch(
                "http://localhost:3000/reading",
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

        aiReading.innerHTML =
            data.reading;
    }
);