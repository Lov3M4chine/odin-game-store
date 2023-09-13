import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import HourglassTopIcon from '@mui/icons-material/HourglassTop'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import HikingIcon from '@mui/icons-material/Hiking'
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity'
import ExtensionIcon from '@mui/icons-material/Extension'
import { Typography } from '@mui/material'

const drawerWidth = 240

export default function NavDrawer() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box'
            }
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <Divider component="div" role="presentation">
              <Typography variant="h5" color="primary" sx={{ mt: 2 }}>
                Top
              </Typography>
            </Divider>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HourglassTopIcon />
                  </ListItemIcon>
                  <ListItemText primary="Coming Soon" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MoreTimeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Recently Released" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <WhatshotIcon />
                  </ListItemIcon>
                  <ListItemText primary="Top 100" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider component="div" role="presentation">
              <Typography variant="h5" color="primary">
                Platform
              </Typography>
            </Divider>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 16"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"
                        fill="white"
                      ></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Xbox" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 16"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
                        fill="white"
                      ></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Playstation" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 16"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
                        fill="white"
                      ></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="PC" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 21 16"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"
                        fill="white"
                      ></path>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Switch" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider component="div" role="presentation">
              <Typography variant="h5" color="primary">
                Genre
              </Typography>
            </Divider>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HikingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Adventure" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ReduceCapacityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Indie" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        d="M762-96 645-212l-88 88-28-28q-23-23-23-57t23-57l169-169q23-23 57-23t57 23l28 28-88 88 116 117q12 12 12 28t-12 28l-50 50q-12 12-28 12t-28-12Zm118-628L426-270l5 4q23 23 23 57t-23 57l-28 28-88-88L198-96q-12 12-28 12t-28-12l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 454-454h160v160ZM334-583l24-23 23-24-23 24-24 23Zm-56 57L80-724v-160h160l198 198-57 56-174-174h-47v47l174 174-56 57Zm92 199 430-430v-47h-47L323-374l47 47Zm0 0-24-23-23-24 23 24 24 23Z"
                        fill="white"
                      />
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Role-playing (RPG)" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        d="M220-520 80-600v-160l140-80 140 80v160l-140 80Zm0-92 60-34v-68l-60-34-60 34v68l60 34Zm440 123v-93l140 82v280L560-80 320-220v-280l140-82v93l-60 35v188l160 93 160-93v-188l-60-35Zm-140 89v-480h360l-80 120 80 120H600v240h-80Zm40 69ZM220-680Z"
                        fill="white"
                      />
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Strategy" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ExtensionIcon />
                  </ListItemIcon>
                  <ListItemText primary="Puzzle" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 335 240"
                    >
                      <path
                        d="m334.8552,193.27523-26.34011-71.35147c-11.06418-28.701029 26.72116-33.762444 26.72116-33.762444 8.39675-4.651025 0-9.712435 0-9.712435-8.77779,2.099986-15.26923-10.126516-15.26923-10.126516L315.0132,56.916631c-2.67412-6.751012-3.43624-7.597661-.3844-20.678207 3.05184-13.099033-6.67862-12.463121-8.39675-10.562782-1.72146,1.911431-7.06302,4.854369-11.07085,.421475-4.0045-4.432892-14.11937-4.21476-14.11937-4.21476l-3.81731-8.448007-4.20171,0-4.19504,8.44431-74.0498,0 0,2.532553-154.96207,0 0-4.222155-3.061871,0c-.374377-3.3829-2.664095-5.911755-2.664095-5.911755-12.601803,0-15.265899,10.551689-15.265899,10.551689l-9.9310228,0 C 3.173732,36.234727 9.2874455,48.893796 9.2874455,48.893796l11.0641835,0 0,34.195019 23.281581,0 1.90197,5.493978 58.02512,0c 54.19444,0 44.65117,50.229597 44.65117,50.229597 40.84388,20.6893 66.41518,7.60506 66.41518,7.60506 20.23308-4.63994 24.04704,14.35236 24.04704,14.35236l13.73497,60.3746c 1.14653,10.54799-.47466,16.87013-.47466,16.87013l0.0267,.86514-.0267,0 0,8.52195c 0,0-.31755,4.61405 5.45188,3.8968l64.04522-5.95982c 1.55099,2.89858 4.37888,4.85437 7.63463,4.85437 4.92372,0 8.90482-4.41071 8.90482-9.84553 0-1.08696-.19721-1.91883-.48803-2.63238l1.94877-.0148c 4.58278-28.29065-4.57609-44.42505-4.57609-44.42505z M309.84547,26.899401c1.60447,0 2.91144,1.438194 2.91144,3.223922 0,1.778334-1.30697,3.216528-2.91144,3.216528-1.60783,0-2.92483-1.438194-2.92483-3.216528 0-1.785728 1.31366-3.223922 2.92483-3.223922z M229.13043,126.5674c-1.14987,7.60875-8.40009,11.82721-8.40009,11.82721-24.76573,9.20222-40.67007,6.61421-53.23844,2.44382-15.33945-5.10208-14.31325-21.45461-14.31325-21.45461 0-22.367805 20.9952-21.946337 20.9952-21.946337l17.17122,0c9.54661,25.325537-13.73831,36.738667-13.73831,36.738667-3.06187,.83556 0,3.3755 0,3.3755 14.11937-.42147 25.56462-25.7544 25.56462-25.7544 l-.37438-10.55539 5.33487-3.804377c20.99856,0 22.14509,21.535947 20.99856,29.129917z m105.72142,113.77635c0,3.5234-2.59724,6.39238-5.78278,6.39238-3.19224,0-5.77946-2.86528-5.77946-6.39238 0-.89841 .17382-1.75245 .47131-2.52516l10.57951-.085c.31756,.79859 .51142,1.67851 .51142,2.61019"
                        fill="white"
                      />
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Shooter" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>{' '}
      </Box>
    </>
  )
}
