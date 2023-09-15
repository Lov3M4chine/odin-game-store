import React from 'react'
import PCIcon from 'components/Icons/PCIcon'
import PlaystationIcon from 'components/Icons/PlaystationIcon'
import SwitchIcon from 'components/Icons/SwitchIcon'
import XboxIcon from 'components/Icons/XboxIcon'

type PlatformIconMapping = {
  [key: string]: React.ReactElement
}

export const platformIconMapping: PlatformIconMapping = {
  Xbox: <XboxIcon />,
  PlayStation: <PlaystationIcon />,
  PC: <PCIcon />,
  Switch: <SwitchIcon />
}

type Platform = {
  id: number
  name: string
}

export function groupPlatforms(platforms: Platform[]): string[] {
  const groups = {
    Xbox: [49, 169], // Xbox One and Xbox S/X
    PlayStation: [167, 48], // PlayStation 5 and PlayStation 4
    PC: [6],
    Switch: [130]
  }

  return Object.entries(groups).reduce<string[]>((acc, [groupName, ids]) => {
    if (platforms.some((p) => ids.includes(p.id))) {
      acc.push(groupName)
    }
    return acc
  }, [])
}

export function getPlatformIcon(
  platformName: string
): React.ReactElement | null {
  return platformIconMapping[platformName] || null
}
