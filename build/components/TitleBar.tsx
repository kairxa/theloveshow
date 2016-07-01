import * as React from 'react';

const STYLES = {
  container: {
    borderBottom: 'solid 1px #282b30',

    display: 'flex',
    height: '56px',

    flex: '1 100%',
    alignItems: 'center',

    padding: '0 20px',

    backgroundColor: '#36393e'
  },

  hashtag: {
    fontSize: '20px',
    lineHeight: '20px',

    color: '#8a8e94'
  },

  channelName: {
    fontSize: '20px',
    fontWeight: '700',

    lineHeight: '20px',

    color: '#ffffff'
  },

  divider: {
    margin: '0 10px',

    width: '1px',
    height: '22px',

    backgroundColor: '#707578'
  },

  channelTopic: {
    fontSize: '14px',

    lineHeight: '22px',
    color: '#707578'
  }
}

export default class TitleBar extends React.Component<Object, Object> {
  render() {
    return (
      <section style={STYLES.container}>
        <div>
          <span style={STYLES.hashtag}>#</span>
          <span style={STYLES.channelName}>theloveshow</span>
        </div>
        <div style={STYLES.divider}></div>
        <div style={STYLES.channelTopic}>
          <span>TEMPORARY TITLE</span>
        </div>
      </section>
    )
  }
}