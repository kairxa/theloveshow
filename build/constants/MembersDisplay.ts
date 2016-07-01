interface AvatarGeneric {
  marginRight: string,
  borderRadius: string,
  width: string,
  height: string,
  position?: string,
  backgroundSize: string,
  backgroundPosition: string
}

interface AvatarComplete extends AvatarGeneric {
  backgroundImage: string
}

interface MemberNameStyle {
  fontSize: string,
  lineHeight: string,
  color: string,
  textTransform: string
}

const KAIRXA_AVATAR_PATH = require('../images/phlacta.JPG');
const ELRIX_AVATAR_PATH = require('../images/choa-park-image.JPG');
const ZLX_AVATAR_PATH = require('../images/galun.JPG');

export function getAvatar(generic: AvatarGeneric, actor: string): AvatarComplete {
  let avatarPath: string;

  switch( actor ) {
    case 'zlaxxar':
      avatarPath = ZLX_AVATAR_PATH;
      break;
    case 'elrix':
      avatarPath = ELRIX_AVATAR_PATH;
      break;
    case 'kairxa':
      avatarPath = KAIRXA_AVATAR_PATH;
      break;
  }
  
  return Object.assign({}, generic, {
    backgroundImage: `url(${avatarPath})`
  });
}

export function getStyle(actor: string): MemberNameStyle {
  let memberNameStyle: MemberNameStyle;

  switch( actor ) {
    case 'zlaxxar':
      memberNameStyle = {
        fontSize: '16px',
        lineHeight: '17px',
        color: 'rgb(241, 196, 15)',
        textTransform: 'capitalize'
      };
      break;
    case 'elrix':
      memberNameStyle = {
        fontSize: '16px',
        lineHeight: '17px',
        color: 'rgb(52, 152, 219)',
        textTransform: 'uppercase'
      };
      break;
    case 'kairxa':
      memberNameStyle = {
        fontSize: '16px',
        lineHeight: '17px',
        color: 'rgb(26, 188, 156)',
        textTransform: 'capitalize'
      };
      break;
  }
  
  return memberNameStyle;
}