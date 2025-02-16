import { FadeScroll } from './components/FadeScroll/FadeScroll';
import { Card } from './components/Card/Card';
import './App.css'

function App() {

  return (
    <div className='backgroundContainer'>
      <div className='back2'>
        <header className='site-header'>Riley Alexis - Full Stack Developer</header>

        <FadeScroll>
          <Card>
            <h3>Card Header</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nostrum amet deleniti ipsam soluta tempore. Maiores, libero porro mollitia magni modi veritatis impedit quaerat dicta iste beatae eaque tempore quibusdam.
            </p>
          </Card>
          <Card>Card 2 and more things</Card>
          <Card>Card 3 and lots of more and more more things and stuff</Card>
        </FadeScroll>
      </div >
    </div >
  )
}

export default App
