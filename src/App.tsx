import './App.css'
import BingoBoard from './components/BingoBoard/BingoBoard'
import Header from './components/Header/Header'

import generateCards from './utils/generateCards'
import bingoInformation from './data/bingo_information.json'


function App() {
  const data = generateCards(bingoInformation)
  return (
    <div className='App'>
      <Header/>
      <BingoBoard data={data}/>
      <footer className='footer'>Utvecklat och designat av Samuel Stenfelt på uppdrag av Teatersmedjan i Karlshamn</footer>
    </div>
  )
}

export default App
