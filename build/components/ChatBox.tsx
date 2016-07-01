import * as React from 'react';

import {ChatStructure as ChatStructureInterface} from '../interfaces/ChatStructure';

import ChatDisplay from './ChatDisplay';

interface ChatBoxProps {
  dialogList: ChatStructureInterface[]
}

const STYLES = {
  container: {
    height: 'calc(100% - 86px)',

    flex: '1 100%',

    overflowX: 'hidden',
    overflowY: 'auto'
  },

  chatBox: {
    paddingBottom: '86px'
  }
};

interface Data {
  actor: string,
  chat: string[]
}

export default class ChatBox extends React.Component<ChatBoxProps, Object> {
  private container: HTMLElement;
  private chatBox: HTMLElement;

  componentWillReceiveProps(nextProps: ChatBoxProps) {
    this.container.scrollTop = this.chatBox.clientHeight;
  }

  render() {
    return (
      <section style={STYLES.container} ref={(ref) => {this.container = ref}}>
        <div style={STYLES.chatBox} ref={(ref) => {this.chatBox = ref}}>
          {this.props.dialogList.map( (data: Data, key: number) => {
            return (
              <ChatDisplay actor={data.actor} chat={data.chat} key={key}/>
            )
          })}
        </div>
      </section>
    )
  }
}