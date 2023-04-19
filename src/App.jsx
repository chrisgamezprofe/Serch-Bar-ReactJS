import './App.css'
import SearchBar from './components/SearchBar'
import BooksData from './Data.json'

const App = () => {

  return (
    <div className="App">
      <SearchBar placeHolder="Ingrese el titulo del libro..." data={BooksData} />
    </div>
  )
}

export default App
