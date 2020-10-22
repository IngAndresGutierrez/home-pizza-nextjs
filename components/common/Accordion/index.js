/* import external modules */
import React, { useState } from 'react'
import {
  Badge,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core'
import { useSelector } from 'react-redux'
import { withStyles } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

/* import internal modules */
import {
  getNumberAddedProducts,
  numberToCurrencyFormat,
} from '../../../utils/helpers'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: '10%',
  },
}))

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -10,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

const ControlledAccordion = ({ itemsCartList, cartSummary }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const totalPriceCart = useSelector((state) => state.cart.totalPrice)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Precio Total</Typography>
          <Typography className={classes.secondaryHeading}>
            {numberToCurrencyFormat(totalPriceCart || 0)}
          </Typography>
          <StyledBadge
            badgeContent={getNumberAddedProducts(itemsCartList)}
            color="secondary"
          ></StyledBadge>
        </AccordionSummary>
        <AccordionDetails>{cartSummary}</AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ControlledAccordion
