import React from 'react'
import { render, screen } from '@testing-library/react'
import NavDrawer from './NavDrawer'
import { topMenuItems, platformMenuItems, genreMenuItems } from './NavDrawer'
import '@testing-library/jest-dom/extend-expect'

describe('NavDrawer Component', () => {
  beforeEach(() => {
    render(<NavDrawer />)
  })

  // Test to check if the Drawer component is rendered
  test('renders Drawer component', () => {
    const drawerElements = screen.getAllByRole('presentation')
    expect(drawerElements.length).toBeGreaterThan(0)
  })

  // Tests to check if the "Top", "Platform", and "Genre" headings are rendered
  ;['Top', 'Platform', 'Genre'].forEach((category) => {
    test(`renders ${category} heading`, () => {
      const heading = screen.getByText(category)
      expect(heading).toBeInTheDocument()
    })
  })

  // Test to check if all the topMenuItems texts are rendered
  topMenuItems.forEach((item) => {
    test(`renders ${item.text} from topMenuItems`, () => {
      const menuItem = screen.getByText(item.text)
      expect(menuItem).toBeInTheDocument()
    })
  })

  // Test to check if all the platformMenuItems texts are rendered
  platformMenuItems.forEach((item) => {
    test(`renders ${item.text} from platformMenuItems`, () => {
      const menuItem = screen.getByText(item.text)
      expect(menuItem).toBeInTheDocument()
    })
  })

  // Test to check if all the genreMenuItems texts are rendered
  genreMenuItems.forEach((item) => {
    test(`renders ${item.text} from genreMenuItems`, () => {
      const menuItem = screen.getByText(item.text)
      expect(menuItem).toBeInTheDocument()
    })
  })
})
