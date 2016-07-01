import * as React from 'react';

interface SettingsProps {
  onSave: Function
}

interface SettingsState {
  elrixStatus: string,
  kairxaStatus: string,
  zlaxxarStatus: string,

  channelTitle: string,

  settingsBoxShown: boolean
}

const STYLES = {
  container: {
    height: '56px',

    position: 'fixed',
    top: '0',
    right: '0'
  },

  trigger: {
    border: 'none',

    height: '100%',

    paddingLeft: '20px',
    paddingRight: '20px',

    background: 'transparent',

    color: '#8a8e94',

    outline: 'none'
  },

  settingsBoxContainer: {
    display: 'flex',
    width: '100vw',
    height: '100vh',

    justifyContent: 'center',

    position: 'fixed',
    top: '0',
    left: '0',

    zIndex: '10',

    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },

  closeButton: {
    border: 'none',

    padding: '0',

    position: 'absolute',
    top: '20px',
    right: '20px',

    backgroundColor: 'transparent',

    outline: 'none',

    fontSize: '23px',
    color: '#8a8e94'
  },

  settingsBox: {
    width: '420px',

    padding: '20px',

    backgroundColor: '#fafafa',

    alignSelf: 'center'
  }
}

export default class Settings extends React.Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);

    this.state = {
      elrixStatus: '',
      kairxaStatus: '',
      zlaxxarStatus: '',

      channelTitle: '',

      settingsBoxShown: false
    }
  }

  handleToggleSettings() {
    this.setState(Object.assign({}, this.state, {
      settingsBoxShown: !this.state.settingsBoxShown
    }));
  }

  render() {
    return (
      <section style={STYLES.container}>
        <button style={STYLES.trigger} onClick={this.handleToggleSettings.bind(this)}>Settings</button>
        {this.state.settingsBoxShown &&
        <section style={STYLES.settingsBoxContainer}>
          <button style={STYLES.closeButton} onClick={this.handleToggleSettings.bind(this)}>Close</button>
          <div style={STYLES.settingsBox}>
            
          </div>
        </section>  
        }
      </section>
    )
  }
}