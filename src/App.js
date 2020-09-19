import React from 'react';
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import FifthSection from './components/FifthSection'
import SixthSection from './components/SixthSection'
import SeventhSection from './components/SeventhSection'
import EightSection from './components/EightSection'
import NinthSection from './components/NinthSection'
import Navbar from './components/Navbar'
import WOW from 'wowjs';
class App extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render(){
  return (
    <div className="App" id='content'>
      <Navbar/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection title="My Skills"/>
      <FourthSection title="My Services"/>
      <FifthSection title="Latest Work" des="Here is my Some projects Demo With Source Code. Please Check it out there"/>
      <SixthSection title="Education & Experience"/>
      <SeventhSection/>
      <EightSection title="Testimonial"/>
      <NinthSection/>
    </div>
  )
  }
}

export default App;
