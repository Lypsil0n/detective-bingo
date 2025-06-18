import './BingoBoard.css'
import BingoCard from '../BingoCard/BingoCard'

function BingoBoard({data}: any) {
    return (
        <div className='bingo-board'>
            {data.map((information: any) =>
                <BingoCard key={information.id} information={information} />
            )}
        </div>
    )
}

export default BingoBoard