import React, {Component} from 'react';
import CardRender from './CardRender';
import SearchBox from './SearchBox';
import './App.css';
import { dex } from './Dex';


class App extends Component {
    constructor(){
        super()
        this.state = {
            dex: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        return this.setState({dex: dex})
}

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //         return response.json();
    //     }).then(users => {
    //         this.setState({dex: users})
    //     })
    // }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const { dex, searchfield } = this.state;
        const filteredDex = dex.filter(dex => {
            return dex.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log(filteredDex)
        return (
            <div className='tc'>
                <h1>Dex World</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardRender dex={filteredDex} />
            </div>
        );
    }
    
}

export default App;