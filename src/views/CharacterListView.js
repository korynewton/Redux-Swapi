import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions'

import Loader from 'react-loader-spinner'

class CharacterListView extends React.Component {


  componentDidMount() {
    // call our action
    console.log('we are mounted')
    this.props.fetchCharacters()
  }

  
  render() {
    return (
      <div className='mainWrapper'>
        {this.props.isFetching && (
        <div>  
          <Loader type="TailSpin" color="#000000" height="180" width="120" margin="100px" />
          <h5>Loading...</h5>
        </div>  
        )}
        {this.props.characters && (
          <div className="CharactersList_wrapper">
            <CharacterList characters={this.props.characters} />;
          </div>
        )}
      </div>
    )}      
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  isFetching: state.charsReducer.isFetching,
  characters: state.charsReducer.characters
})

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView);
