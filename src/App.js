import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
      searchWord: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    //alert('A name was submitted: ' + this.state.value);
    fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.state.value)
    .then((res) => res.json())
    /*.then(data => this.setState({items: data.items}));*/
    .then((data) => {
      this.setState({items: data.items});
      console.log(data);
    })
    this.setState({value: '', searchWord: this.state.value})
    e.preventDefault();
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <h1 className="text-center d-block">BookFinder</h1>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <form id="search-form" className="col-4 d-block" onSubmit={this.handleSubmit}>
              <input className="d-block form-control mt-3" type="text" value={this.state.value} placeholder="Enter search keyword" onChange={this.handleChange} />
              <input type="submit" value="Submit" className="btn btn-success d-block form-control mt-3" />
            </form>
          </div>
        </div>
        
        {items.length ? (
          <div>
            <h4 className="mb-5">Displaying results for "{this.state.searchWord}"</h4>
            {items.map(item =>
              <Book 
                imgUrl={item.volumeInfo.imageLinks.thumbnail}
                title={item.volumeInfo.title}
                authors={item.volumeInfo.authors}
                publisher={item.volumeInfo.publisher}
              />
            )}
          </div>
        ) : (
          <h4>No Books to Display</h4>
        )}


      </div>
    );
  }
}

export default App;
