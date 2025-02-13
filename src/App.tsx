import './App.css'
import { FadeScroll } from './components/FadeScroll/FadeScroll';
import { Card } from './components/Card';

function App() {

  return (
    <div className='backgroundContainer'>
      <div className='back2'>
        <header className='site-header'>Header Thingy Here</header>

        <FadeScroll>
          <Card>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nostrum amet deleniti ipsam soluta tempore. Maiores, libero porro mollitia magni modi veritatis impedit quaerat dicta iste beatae eaque tempore quibusdam.
          </Card>
          <Card>Card 2 and more things</Card>
          <Card>Card 3 and lots of more and more more things and stuff</Card>
        </FadeScroll>
      </div>
    </div>
  )
}

export default App
