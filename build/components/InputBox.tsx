import * as React from 'react';

interface InputBoxProps {
  onSubmit: Function
}

interface InputBoxState {
  input: string
}

interface ValueEventTarget extends EventTarget {
  value: string
}

interface ValueEvent extends Event {
  target: ValueEventTarget
}

const STYLES = {
  container: {
    margin: '0 20px',

    borderTop: '1px solid hsla(0,0%,100%,.06)',

    height: '86px',

    flex: '1 100%',
    
    padding: '20px 0'
  },
  
  input: {
    border: 'solid 2px hsla(0,0%,100%,.2)',
    borderRadius: '3px',
    
    width: '100%',
    height: '46px',

    padding: '12px 10px',

    backgroundColor: '#36393e',

    fontFamily: `'Open Sans', 'sans-serif'`,
    fontSize: '14px',

    color: 'hsla(0,0%,100%,.7)',

    outline: 'none'
  }
};

export default class InputBox extends React.Component<InputBoxProps, InputBoxState> {
  constructor(props: InputBoxProps) {
    super(props);

    this.state = {
      input: ''
    }
  }

  handleInputChange(event: ValueEvent) {
    this.setState({
      input: event.target.value
    });
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();
    
    let chatSplit = this.state.input.split(/:[^\S+]/i);
    let actorInitial = chatSplit[0];
    let chat = chatSplit[1];
    let actorFull: string;

    switch( actorInitial ) {
      case 'z':
        actorFull = 'zlaxxar';
        break;
      case 'e':
        actorFull = 'elrix';
        break;
      case 'k':
        actorFull = 'kairxa';
        break;
    }

    this.setState({
      input: ''
    });

    this.props.onSubmit({
      actor: actorFull,
      chat: [chat]
    });
  }

  render() {
    return ( 
      <form style={STYLES.container} onSubmit={this.handleFormSubmit.bind(this)}>
        <input
          type="text"
          value={this.state.input}
          style={STYLES.input}
          placeholder="Chat in theloveshow..."
          onChange={this.handleInputChange.bind(this)}
        />
      </form>
    );
  }
}