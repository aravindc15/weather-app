import React,{Component} from 'react'
import SearchBar from './container/search_bar'
import Nav from './component/Nav'
class App extends Component{
    render(){
        return(
            <div>
            <Nav />
           <SearchBar />
           </div>
        )
    }
}

export default App;