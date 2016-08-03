import * as React from 'react';

interface SettingsProps {
  onSave: Function,
  channelState: {
    channelTitle: string,

    elrixStatus: string,
    kairxaStatus: string,
    zlaxxarStatus: string,

    chatInterval: number
  }
}

interface SettingsState {
  elrixStatus: string,
  kairxaStatus: string,
  zlaxxarStatus: string,

  channelTitle: string,
  
  chatInterval: number,

  settingsBoxShown: boolean
}

const STYLES = {
  container: {
    height: '56px',

    position: 'fixed',
    top: 0,
    right: 0
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
    top: 0,
    left: 0,

    zIndex: '10',

    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },

  closeButton: {
    border: 'none',

    padding: 0,

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

    alignSelf: 'center',

    backgroundColor: '#fafafa',

    fontSize: '14px',
    color: '#676a6c'
  },

  settingsRow: {
    marginBottom: '20px',

    display: 'flex',
    flexWrap: 'wrap'
  },

  inputBox: {
    marginTop: '10px',

    height: '44px',

    flex: '1 1 100%',

    padding: '0 10px'
  },

  saveButton: {
    border: 'none',
    borderRadius: '3px',

    padding: '10px 15px',

    backgroundColor: '#5aaf93',

    fontSize: '14px',
    color: '#fafafa',

    cursor: 'pointer'
  }
}

export default class Settings extends React.Component<SettingsProps, SettingsState> {
  constructor(props: SettingsProps) {
    super(props);

    this.state = {
      elrixStatus: props.channelState.elrixStatus,
      kairxaStatus: props.channelState.kairxaStatus,
      zlaxxarStatus: props.channelState.zlaxxarStatus,

      channelTitle: props.channelState.channelTitle,

      chatInterval: props.channelState.chatInterval,

      settingsBoxShown: false
    }
  }

  handleToggleSettings() {
    this.setState(Object.assign({}, this.state, {
      settingsBoxShown: !this.state.settingsBoxShown
    }));
  }

  handleSettingsChange(inputType: string, event: Event) {
    let eventTarget = event.target as HTMLInputElement; // typecasting

    switch(inputType) {
      case 'channelTitle':
        this.setState(
          Object.assign({}, this.state, {
            channelTitle: eventTarget.value
          })
        );
        break;
      case 'elrixStatus':
        this.setState(
          Object.assign({}, this.state, {
            elrixStatus: eventTarget.value
          })
        );
        break;
      case 'kairxaStatus':
        this.setState(
          Object.assign({}, this.state, {
            kairxaStatus: eventTarget.value
          })
        );
        break;
      case 'zlaxxarStatus':
        this.setState(
          Object.assign({}, this.state, {
            zlaxxarStatus: eventTarget.value
          })
        );
        break;
      case 'chatInterval':
        this.setState(
          Object.assign({}, this.state, {
            chatInterval: eventTarget.value
          })
        );
        break;
    }
  }

  handleSettingsSave() {
    this.setState(
      Object.assign({}, this.state, {
        settingsBoxShown: false
      })
    );

    this.props.onSave(this.state);
  }

  render() {
    return (
      <section style={STYLES.container}>
        <button style={STYLES.trigger} onClick={this.handleToggleSettings.bind(this)}>Settings</button>
        {this.state.settingsBoxShown &&
        <section style={STYLES.settingsBoxContainer}>
          <button style={STYLES.closeButton} onClick={this.handleToggleSettings.bind(this)}>Close</button>
          <div style={STYLES.settingsBox}>
            <div style={STYLES.settingsRow}>
              <label htmlFor="channelTitle">Channel Title</label>
              <input
                type="text"
                id="channelTitle"
                style={STYLES.inputBox}
                defaultValue={this.state.channelTitle}
                onChange={this.handleSettingsChange.bind(this, 'channelTitle')}
              />
            </div>
            <div style={STYLES.settingsRow}>
              <label htmlFor="elrixStatus">ELRIX's Status</label>
              <input
                type="text"
                id="elrixStatus"
                style={STYLES.inputBox}
                defaultValue={this.state.elrixStatus}
                onChange={this.handleSettingsChange.bind(this, 'elrixStatus')}
              />
            </div>
            <div style={STYLES.settingsRow}>
              <label htmlFor="kairxaStatus">Kairxa's Status</label>
              <input
                type="text"
                id="kairxaStatus"
                style={STYLES.inputBox}
                defaultValue={this.state.kairxaStatus}
                onChange={this.handleSettingsChange.bind(this, 'kairxaStatus')}
              />
            </div>
            <div style={STYLES.settingsRow}>
              <label htmlFor="zlaxxarStatus">Zlaxxar's Status</label>
              <input
                type="text"
                id="zlaxxarStatus" 
                style={STYLES.inputBox}
                defaultValue={this.state.zlaxxarStatus}
                onChange={this.handleSettingsChange.bind(this, 'zlaxxarStatus')}
              />
            </div>
            <div style={STYLES.settingsRow}>
              <label htmlFor="zlaxxarStatus">Chat Interval (in miliseconds)</label>
              <input
                type="number"
                id="chatInterval"
                style={STYLES.inputBox}
                defaultValue={this.state.chatInterval}
                onChange={this.handleSettingsChange.bind(this, 'chatInterval')}
              />
            </div>
            <button style={STYLES.saveButton} onClick={this.handleSettingsSave.bind(this)}>Save</button>
          </div>
        </section>  
        }
      </section>
    )
  }
}