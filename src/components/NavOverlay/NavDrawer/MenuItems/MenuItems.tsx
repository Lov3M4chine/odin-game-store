import MoreTimeIcon from '@mui/icons-material/MoreTime'
import HourglassTopIcon from '@mui/icons-material/HourglassTop'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import HikingIcon from '@mui/icons-material/Hiking'
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity'
import ExtensionIcon from '@mui/icons-material/Extension'
import {
  PCIcon,
  PlaystationIcon,
  RPGIcon,
  ShooterIcon,
  StrategyIcon,
  SwitchIcon,
  XboxIcon
} from 'components/Icons'

export const topMenuItems = [
  { icon: <HourglassTopIcon />, text: 'Coming Soon', type: 'comingSoon' },
  {
    icon: <MoreTimeIcon />,
    text: 'Recently Released',
    type: 'recentlyReleased'
  },
  { icon: <WhatshotIcon />, text: 'Top 100', type: 'top100' }
]

export const platformMenuItems = [
  { icon: <XboxIcon />, text: 'Xbox', type: 'xbox' },
  { icon: <PlaystationIcon />, text: 'Playstation', type: 'playstation' },
  { icon: <PCIcon />, text: 'PC', type: 'pc' },
  { icon: <SwitchIcon />, text: 'Switch', type: 'switch' }
]

export const genreMenuItems = [
  { icon: <HikingIcon />, text: 'Adventure', type: 'adventure' },
  { icon: <ReduceCapacityIcon />, text: 'Indie', type: 'indie' },
  { icon: <RPGIcon />, text: 'Role-playing (RPG)', type: 'RPG' },
  { icon: <StrategyIcon />, text: 'Strategy', type: 'strategy' },
  { icon: <ExtensionIcon />, text: 'Puzzle', type: 'puzzle' },
  { icon: <ShooterIcon />, text: 'Shooter', type: 'shooter' }
]
