function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCards(data: any) {
    const cardArray = data;
    const cards: any[] = [];

    while (cards.length < 16) {
        const randomIndex = random(0, cardArray.length - 1);
        const selected = cardArray[randomIndex];

        if (!cards.includes(selected)) {
            cards.push(selected);
        }
    }

    return cards;
}

export default generateCards