//Components
import { FadeScroll } from './components/FadeScroll/FadeScroll';
import { Card } from './components/Card/Card';
import { TitleHeader } from './components/TitleHeader';
import { AppList } from './components/AppList';

import './App.css';

function App() {

  return (
    <div className='backgroundContainer'>
      <div className='back2'>
        <TitleHeader />


        <FadeScroll>

          <AppList />
          <Card>Card 2 and more things</Card>
          {/* <Card>Card 3 and lots of more and more more things and stuff</Card> */}
        </FadeScroll>

      </div >
    </div >
  )
}

export default App
