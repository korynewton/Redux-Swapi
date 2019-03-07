import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default CharacterList;


// import React from "react";
// import { connect } from 'react-redux'

// import { fetchCharacters } from '../actions'

// import Character from "./Character";

// const CharacterList = props => {
//   return (
//     <ul>
//       {props.characters.map(character => {
//         return <Character key={props.characters.name} character={props.characters} />;
//       })}
//     </ul>
//   );
// };

// const mapStateToProps = state => ({
//     characters : state.character
// })

// export default connect(mapStateToProps, { fetchCharacters })(CharacterList);
