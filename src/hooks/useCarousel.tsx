import { useState } from 'react'

export const useCarousel = (items: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevSlide = () => {
    let index = currentIndex - 1
    if (index < 0) index = items.length - 1
    setCurrentIndex(index)
  }

  const goToNextSlide = () => {
    let index = currentIndex + 1
    if (index >= items.length) index = 0
    setCurrentIndex(index)
  }

  return {
    currentItem: items[currentIndex],
    goToPrevSlide,
    goToNextSlide
  }
}
