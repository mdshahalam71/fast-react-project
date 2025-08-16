 
import './App.css'
 
import Root from './components/root'
import ExploreData from './ExploreData'
import File from './File'
  

function App() {
 

  return (
     <div>
        <Root/>
         <ExploreData name='Alam'age='23' profission='Developer'></ExploreData>
         <ExploreData name='shah' age='33' profission='Students'></ExploreData>
         <ExploreData name='kamale' age='44' profission='Computer Programmer'></ExploreData>
         <ExploreData name='masum' age='32' profission='java Programmer'></ExploreData>
         <File/>
     </div>
  )
}

export default App
