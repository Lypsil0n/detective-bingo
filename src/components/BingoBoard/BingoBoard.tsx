import './BingoBoard.css'
import BingoCard from '../BingoCard/BingoCard'
import { useEffect, useState } from 'react';
import Modal from 'react-modal'

function BingoBoard({data}: any) {
    const [isOpen, setIsOpen] = useState(true);
    const [isFinishedModalOpen, setIsFinishedModalOpen] = useState(false);

    const [flippedCards, setFlippedCards] = useState<{ [id: number]: boolean }>({});

    const handleCardFlip = (id: number) => {
        setFlippedCards(prev => ({ ...prev, [id]: true }));
    };

    useEffect(() => {
        if (data.length > 0 && data.every((item: any) => flippedCards[item.id])) {
        setIsFinishedModalOpen(true);
        }
    }, [flippedCards, data]);

    return (
        <div className='bingo-board'>
            <Modal isOpen={isOpen} style={{
                content: {
                    background: '#f1ddb7',
                    width: '250px',
                    height: '250px',
                    margin: 'auto',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }
            }}>
                <p>Dags att bli mästerdetektiv! Vad kan du se för saker runt omkring dig? Klicka på brickorna för att vända på dem.</p>
                <button onClick={() => setIsOpen(false)}>Börja</button>
            </Modal>
            {data.map((information: any) =>
                <BingoCard 
                    key={information.id} 
                    information={information} 
                    onFlip={() => handleCardFlip(information.id)}/>
            )}

            <Modal
                isOpen={isFinishedModalOpen}
                onRequestClose={() => setIsFinishedModalOpen(false)}
                style={{
                    content: {
                    background: '#d4edda',
                    width: '250px',
                    height: '200px',
                    margin: 'auto',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center'
                    }
                }}
                >
                <p>Grattis! Du är en riktig mästerdetektiv!</p>
                <p>Psst! Ladda om sidan, så får du en helt ny bingobricka!</p>
                <button onClick={() => setIsFinishedModalOpen(false)}>Stäng</button>
            </Modal>
        </div>
    )
}

export default BingoBoard