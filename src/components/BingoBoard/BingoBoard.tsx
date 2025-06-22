import './BingoBoard.css'
import BingoCard from '../BingoCard/BingoCard'
import { useState } from 'react';
import Modal from 'react-modal'

function BingoBoard({data}: any) {
    const [isOpen, setIsOpen] = useState(true);

    // function openModal() {
    //     setIsOpen(true)
    // }

    // function closeModal() {
    //     setIsOpen(false)
    // }

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
                    borderRadius: '25px',
                    border: '2px solid black'
                }
            }}>
                <p>Dags att bli mästerdetektiv! Vad kan du se för saker runt omkring dig? Klicka på brickorna för att vända på dem.</p>
                <button onClick={() => setIsOpen(false)}>Börja</button>
            </Modal>
            {data.map((information: any) =>
                <BingoCard key={information.id} information={information} />
            )}
        </div>
    )
}

export default BingoBoard