import * as React from 'react';

import {ChatStructure as ChatStructureInterface} from '../interfaces/ChatStructure';

import ChatDisplay from './ChatDisplay';

interface ChatBoxProps {
  dialogList: ChatStructureInterface[]
}

const STYLES = {
  container: {
    height: 'calc(100% - 86px)',

    flex: '1 100%'
  }
};

interface Data {
  actor: string,
  chat: string[]
}

export default class ChatBox extends React.Component<ChatBoxProps, Object> {
  render() {
    return (
      <section style={STYLES.container}>
        {this.props.dialogList.map( (data: Data, key: number) => {
          return (
            <ChatDisplay actor={data.actor} chat={data.chat} key={key}/>
          )
        })}
      </section>
    )
  }
}