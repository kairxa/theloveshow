import * as React from 'react';

import {ChatStructure as ChatStructureInterface} from '../interfaces/ChatStructure';

import * as Members from '../constants/MembersDisplay';

const STYLES = {
  container: {
    margin: '0 20px',

    borderBottom: '1px solid hsla(0,0%,100%,.06)',

    display: 'flex',
    flex: '1 100%',
    alignItems: 'flex-start',

    padding: '20px 0'
  },

  avatar: {
    marginRight: '20px',

    borderRadius: '20px',

    width: '40px',
    height: '40px',

    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },

  display: {
    flex: '1 100%'
  },

  says: {
    marginLeft: '6px',

    fontSize: '12px',
    color: 'hsla(0,0%,100%,.2)'
  },

  text: {
    marginTop: '6px',

    fontSize: '14px',

    lineHeight: '18px',
    color: 'hsla(0,0%,100%,.7)'
  }
};

export default class ChatDisplay extends React.Component<ChatStructureInterface, Object> {
  render() {
    return (
      <div style={STYLES.container}>
        <div style={Members.getAvatar(STYLES.avatar, this.props.actor)}/>
        <div style={STYLES.display}>
          <div>
            <span style={Members.getStyle(this.props.actor)}>{this.props.actor}</span>
            <span style={STYLES.says}>says:</span>
          </div>
          {this.props.chat.map( (chat: string, key: number) => {
            return (
              <div style={STYLES.text} key={key}>
                {chat}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}