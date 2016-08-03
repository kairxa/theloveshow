import * as React from 'react';

interface InputBoxProps {
  onSubmit: Function,
  chatInterval: number
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

const enterKey = 13;
const shiftKey = 16;

const STYLES = {
  container: {
    margin: '0 20px',

    borderTop: '1px solid hsla(0,0%,100%,.06)',

    width: 'calc(100% - 280px)',
    height: '86px',

    flex: '1 100%',
    
    padding: '20px 0',
    
    position: 'absolute',
    bottom: '0px',
    left: '0px'
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

    outline: 'none',
    resize: 'none'
  }
};

export default class InputBox extends React.Component<InputBoxProps, InputBoxState> {
  private isShiftDown = false;
  private currentActorInitial = '';

  constructor(props: InputBoxProps) {
    super(props);

    this.state = {
      input: ''
    }
  }

  lineSubmitter(element: string) {
    let regexFormat = /\:(.+)/i;
    let chatSplit: string[];
    let actorInitial: string;
    let chat: string;
    let actorFull: string;

    if ( regexFormat.test(element) ) {
      chatSplit = element.split(regexFormat);
      this.currentActorInitial = actorInitial = chatSplit[0];
      chat = chatSplit[1].trim();
    } else {
      actorInitial = this.currentActorInitial;
      chat = element;
    }

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

    this.props.onSubmit({
      actor: actorFull,
      chat: [chat]
    });
  }

  handleEditorKeyDown(event: KeyboardEvent) {
    switch(event.which) {
      case shiftKey:
        this.isShiftDown = true;
        break;
      case enterKey:
        this.handleEnterKeypressEvent(event);
        break;
    }
  }

  handleEditorKeyUp(event: KeyboardEvent) {
    if( event.which === shiftKey ) {
      this.isShiftDown = false;
    }
  }

  handleInputChange(event: ValueEvent) {
    this.setState({
      input: event.target.value
    });
  }

  handleEnterKeypressEvent(event: KeyboardEvent) {
    if( !this.isShiftDown && this.state.input ) {
      event.preventDefault();

      let wholeConversation = this.state.input.split(/\n/i);
      wholeConversation = wholeConversation.filter(Boolean);
      let counter = 1;
      this.lineSubmitter(wholeConversation[0]); // Initially without delay, so setInterval will start with second chat
      setInterval(() => {
        if( counter >= wholeConversation.length ) {
          return;
        }

        this.lineSubmitter(wholeConversation[counter]);
        counter = counter + 1;
      }, this.props.chatInterval);

      this.setState({
        input: ''
      });
    }
  }

  render() {
    return ( 
      <form style={STYLES.container}>
        <textarea
          value={this.state.input}
          style={STYLES.input}
          placeholder="Chat in theloveshow..."
          onChange={this.handleInputChange.bind(this)}
          onKeyDown={this.handleEditorKeyDown.bind(this)}
          onKeyUp={this.handleEditorKeyUp.bind(this)}
        />
      </form>
    );
  }
}