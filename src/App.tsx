//Components
import { TitleHeader } from './components/TitleHeader';
import { AppList } from './components/AppList';

import './App.css';

function App() {

  return (
    <div className='backgroundContainer'>
      <div className='back2'>
        <div className='contentContainer'>
          <TitleHeader />
          <AppList />
        </div >
      </div>
    </div >
  )
}

export default App
