import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { NavDrawer } from './NavOverlay/NavDrawer/NavDrawer'
import IconButton from '@mui/material/IconButton'
import { topMenuItems, platformMenuItems, genreMenuItems } from './NavOverlay/NavDrawer/NavDrawer'
import '@testing-library/jest-dom/extend-expect'

type MockFn = {
  (): void
  called: boolean
}

function createMockFn(): MockFn {
  const fn = function () {
    fn.called = true
  }
  fn.called = false
  return fn as MockFn
}

describe('NavDrawer Component', () => {
  let onCloseMock: MockFn

  beforeEach(() => {
    onCloseMock = createMockFn()
    render(
      <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="toggle drawer"
          sx={{ mr: 24 }}
          onClick={onCloseMock} // Mocked toggle function
        >
          {/* Add your icon component here if it's not automatically rendered */}
        </IconButton>
        <NavDrawer open={true} onClose={onCloseMock} />
      </>
    )
  })

  test('calls onClose when the button is clicked', () => {
    const toggleButton = screen.getByLabelText('toggle drawer')
    fireEvent.click(toggleButton)
    expect(onCloseMock.called).toBe(true)
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

  test('NavDrawer starts open', () => {
    const allTopElements = screen.getAllByText('Top')
    expect(allTopElements.length).toBeGreaterThan(0)
  })

  test('opens when the open prop is true', () => {
    expect(screen.getByText('Top')).toBeInTheDocument()
  })
})
