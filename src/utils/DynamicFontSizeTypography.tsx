import { Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import { DynamicFontSizeTypographyProps } from 'types'

export const DynamicFontSizeTypography: React.FC<
  DynamicFontSizeTypographyProps
> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const element = textRef.current
      let fontSize = 16

      while (element.scrollWidth > element.offsetWidth && fontSize > 6) {
        fontSize -= 0.5
        element.style.fontSize = `${fontSize}px`
      }
    }
  }, [text])

  return (
    <Typography
      gutterBottom
      variant="h6"
      component="div"
      ref={textRef}
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      {text}
    </Typography>
  )
}
