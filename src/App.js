import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar } from 'react-bootstrap'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        {!this.props.loading && <CatList catPics={this.props.catPics} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    loading: state.cats.loading,
    catPics: state.cats.pictures 
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

