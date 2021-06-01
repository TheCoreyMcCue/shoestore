import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '45%', // 16:9
    paddingBottom: '20%'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))