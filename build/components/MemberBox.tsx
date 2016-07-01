import * as React from 'react';

import * as Members from '../constants/MembersDisplay';

const STYLES = {
  container: {
    width: '240px',
    height: 'calc(100vh - 56px)',

    flexWrap: 'wrap',

    padding: '20px 30px',

    backgroundColor: '#2e3136'
  },

  header: {
    margin: '9px 0',

    flex: '1 100%',

    fontSize: '12px',
    color: 'hsla(0,0%,100%,.4)'
  },

  memberContainer: {
    display: 'flex',
    flex: '1 100%',
    flexWrap: 'wrap',

    alignItems: 'center'
  },

  onlineStatus: {
    border: 'solid 2px #2e3136',
    borderRadius: '7px',

    width: '14px',
    height: '14px',

    position: 'absolute',
    right: '-2px',
    bottom: '-4px',

    backgroundColor: '#43b581'
  },

  onlineStatusTyping: {
    border: 'solid 2px #2e3136',
    borderRadius: '7px',

    width: '26px',
    height: '14px',

    position: 'absolute',
    right: '-11px',
    bottom: '-4px',

    backgroundColor: '#43b581'
  },
  
  avatar: {
    marginRight: '10px',

    borderRadius: '20px',

    width: '30px',
    height: '30px',

    position: 'relative',

    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  },

  member: {
    padding: '5px 0'
  },

  memberTagline: {
    fontSize: '11px',
    color: '#8a8e94'
  }
};

export default class MemberBox extends React.Component<Object, Object> {
  render() {
    return (
      <section style={STYLES.container}>
        <header style={STYLES.header}>ONLINE—3</header>
        <div style={STYLES.memberContainer}>
          <div style={Members.getAvatar(STYLES.avatar, 'elrix')}>
            <div style={STYLES.onlineStatus}></div>
          </div>
          <div style={STYLES.member}>
            <div style={Members.getStyle('elrix')}>ELRIX</div>
            <div style={STYLES.memberTagline}>playing <strong>women's hearts</strong></div>
          </div>
        </div>
        <div style={STYLES.memberContainer}>
          <div style={Members.getAvatar(STYLES.avatar, 'kairxa')}>
            <div style={STYLES.onlineStatus}></div>
          </div>
          <div style={STYLES.member}>
            <div style={Members.getStyle('kairxa')}>Kairxa</div>
            <div style={STYLES.memberTagline}>playing <strong>shits</strong></div>
          </div>
        </div>
        <div style={STYLES.memberContainer}>
          <div style={Members.getAvatar(STYLES.avatar, 'zlaxxar')}>
            <div style={STYLES.onlineStatus}></div>
          </div>
          <div style={STYLES.member}>
            <div style={Members.getStyle('zlaxxar')}>Zlaxxar</div>
            <div style={STYLES.memberTagline}>playing <strong>Exiled Marauder</strong></div>
          </div>
        </div>
      </section>
    );
  }
}