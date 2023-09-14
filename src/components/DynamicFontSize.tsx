import React, { useRef, useEffect } from 'react'
import Typography from '@mui/material/Typography'

interface DynamicFontSizeTypographyProps {
  text: string
}

export const DynamicFontSizeTypography: React.FC<
  DynamicFontSizeTypographyProps
> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null) // Specifying the type for the ref

  useEffect(() => {
    if (textRef.current) {
      // Checking if the ref is not null
      const element = textRef.current
      let fontSize = 16 // Start from a base size. Adjust as needed.

      // Reduce font size until the text fits or the font size is too small
      while (element.scrollWidth > element.offsetWidth && fontSize > 6) {
        fontSize -= 0.5 // Decrement font size
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
        overflow: 'hidden'
      }}
    >
      {text}
    </Typography>
  )
}

export default DynamicFontSizeTypography
