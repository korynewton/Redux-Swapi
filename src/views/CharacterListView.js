import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from '../actions'

class CharacterListView extends React.Component {


  componentDidMount() {
    // call our action
    console.log('we are mounted')
    this.props.fetchCharacters()
  }

  
  render() {
    if (this.props.fetching) {
      <h1>loading ...</h1>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
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
