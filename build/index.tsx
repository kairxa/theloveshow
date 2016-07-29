import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TitleBar from './components/TitleBar';
import DialogBox from './components/DialogBox';
import MemberBox from './components/MemberBox';
import Settings from './components/Settings';

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

class LoveShow extends React.Component<Object, Object> {
  render() {
    return (
      <main style={STYLES.container}>
        <TitleBar />
        <section style={STYLES.mainContent}>
          <DialogBox />
          <MemberBox />
        </section>
        <Settings onSave={() => {}}/>
      </main>
    );
  }
}

ReactDOM.render(
  <LoveShow />,
  document.querySelector('#theloveshow')
);