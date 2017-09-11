import React, {Component} from 'react'
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile'

class Profile extends Component {

  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      game: [
        {
          winner: true,
          createdAt: '09/11/2017',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '09/10/2017',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '09/09/2017',
          id: '0003'
        },
      ]
    }
  }

  render(){
    let {email} = this.props.user
    return(
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            MyGames
          </GameListHeader>
          <ColumnLabels>
          <Column>
            Outcome
          </Column>
          <Column>
            Guess
          </Column>
          <Column>
            Guessed Correctly
          </Column>
          <Column>
            Date
          </Column>
        </ColumnLabels>
        </GameList>

      </Container>
    )
  }
}

export default Profile
