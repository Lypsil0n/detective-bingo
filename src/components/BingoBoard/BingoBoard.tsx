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
            <Modal isOpen={isOpen}>
                <button onClick={() => setIsOpen(false)}>Stäng</button>
                <p>Hello!</p>
            </Modal>
            {data.map((information: any) =>
                <BingoCard key={information.id} information={information} />
            )}
        </div>
    )
}

export default BingoBoard