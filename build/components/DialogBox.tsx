import * as React from 'react';

import {ChatStructure as ChatStructureInterface} from '../interfaces/ChatStructure';

import ChatBox from './ChatBox';
import InputBox from './InputBox';

interface DialogBoxState {
  dialogList: ChatStructureInterface[]
}

const STYLES = {
  container: {
    display: 'flex',
    height: 'calc(100vh - 56px)',

    flex: '1 80%',
    flexWrap: 'wrap',

    backgroundColor: '#36393e'
  }
};

export default class DialogBox extends React.Component<Object, DialogBoxState> {
  constructor(props: Object) {
    super(props);

    this.state = {
      dialogList: []
    }
  }

  handleInputSubmit(chatStructure: ChatStructureInterface) {
    if( this.state.dialogList.length === 0 ) {
      this.setState({
        dialogList: [chatStructure]
      });
    } else {
      let lastDialog = Object.assign({}, this.state.dialogList[this.state.dialogList.length - 1]);

      if( chatStructure.actor === lastDialog.actor ) {
        lastDialog.chat = [...lastDialog.chat, ...chatStructure.chat];

        let modifiedDialogList = this.state.dialogList.slice();
        modifiedDialogList.splice(modifiedDialogList.length - 1, 1, lastDialog);

        this.setState({
          dialogList: modifiedDialogList
        });
      } else {
        this.setState({
          dialogList: [...this.state.dialogList, chatStructure]
        });
      }
    }
  }

  render() {
    return (
      <section style={STYLES.container}>
        <ChatBox dialogList={this.state.dialogList}/>
        <InputBox onSubmit={this.handleInputSubmit.bind(this)}/>
      </section>
    );
  }
}