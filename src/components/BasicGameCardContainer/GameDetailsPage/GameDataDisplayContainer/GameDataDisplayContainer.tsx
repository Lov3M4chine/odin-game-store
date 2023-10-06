import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import { GameDataContainerProps } from 'types'

export const GameDataDisplayContainer: React.FC<GameDataContainerProps> = ({
  dataRows,
  isMobile
}) => {
  if (isMobile) {
    return (
      <Box>
        {dataRows.map((row, idx) => (
          <Box
            key={idx}
            mb={2}
            padding={1}
            bgcolor="background.paper"
            boxShadow={2}
          >
            <Typography variant="subtitle1">{row.label}:</Typography>
            <Typography>{row.value}</Typography>
          </Box>
        ))}
      </Box>
    )
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="game details">
        <TableBody>
          {dataRows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.label}:</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
