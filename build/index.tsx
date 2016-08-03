import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TitleBar from './components/TitleBar';
import DialogBox from './components/DialogBox';
import MemberBox from './components/MemberBox';
import Settings from './components/Settings';

interface channelStates {
  channelTitle: string,
  elrixStatus: string,
  kairxaStatus: string,
  zlaxxarStatus: string,
  chatInterval: number
}

const STYLES = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    flexWrap: 'wrap'
  },
  mainContent: {
    display: 'flex',
    flex: '1 1 100%'
  }
};

class LoveShow extends React.Component<Object, channelStates> {
  constructor(props: Object) {
    super(props);

    this.state = {
      channelTitle: '',
      elrixStatus: '',
      kairxaStatus: '',
      zlaxxarStatus: '',
      chatInterval: 1500
    }
  }

  handleSettingsSave(channelStates: channelStates) {
    this.setState(channelStates);
  }

  render() {
    return (
      <main style={STYLES.container}>
        <TitleBar channelTitle={this.state.channelTitle}/>
        <section style={STYLES.mainContent}>
          <DialogBox chatInterval={this.state.chatInterval}/>
          <MemberBox
            elrixStatus={this.state.elrixStatus}
            kairxaStatus={this.state.kairxaStatus}
            zlaxxarStatus={this.state.zlaxxarStatus}
          />
        </section>
        <Settings onSave={this.handleSettingsSave.bind(this)} channelState={this.state}/>
      </main>
    );
  }
}

ReactDOM.render(
  <LoveShow />,
  document.querySelector('#theloveshow')
);