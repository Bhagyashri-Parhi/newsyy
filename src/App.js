import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize=15;
   
  // state={
  //   progress:0
  // }
  const [progress, setProgress] = useState(0);

  // setProgress=(progress)=>{
  //   this.setState({progress:progress})
  // }  
  // render() {
    return (
      <div>
      <Router>
       <Navbar/>
       {/* <News setProgress={setProgress} pageSize={pageSize} country="in" category="general"/> */}
       <LoadingBar
       height='3'
        color='#f11946'
        progress={progress}

        // onLoaderFinished={() => setProgress(0)}
      />
       <Switch>
          <Route exact path="/">
          <News setProgress={setProgress} pageSize={pageSize} country="in" category="general"/>
          </Route>
          <Route exact key="business" path="/business">
          <News setProgress={setProgress} pageSize={pageSize} country="in" category="business"/>
          </Route>
          <Route exact key="entertainment" path="/entertainment">
            {/* </> */}
            <News setProgress={setProgress} pageSize={pageSize} country="in" category="entertainment"/>
          </Route>
          <Route exact key="general" path="/general">
            {/* <general /> */}
            <News setProgress={setProgress} pageSize={pageSize} country="in" category="general"/>
          </Route>
          <Route exact key="health" path="/health">
            {/* <health /> */}
            <News setProgress={setProgress} pageSize={pageSize} country="in" category="health"/>
          </Route>
          <Route exact key="science" path="/science">
            {/* <science /> */}
            <News setProgress={setProgress} pageSize={pageSize} country="in" category="science"/>
          </Route>
          <Route exact key="sports" path="/sports">
            {/* <sports /> */}
            <News setProgress={setProgress} pageSize={pageSize} country="in" category="sports"/>
          </Route>
          <Route exact key="technology" path="/technology">
            {/* <technology /> */}
            <News setProgress={setProgress} pageSize={pageSize} country="in" category="technology"/>
          </Route>
        </Switch>
      
      </Router>
      </div>
    )
  // }
} 
export default App;


