import { h, Component } from 'preact'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  wrapper: {
    margin: 10,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
})

class SimpleCard extends Component {
  state = { name: '' }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render(props, state) {
    const { classes } = props
    const bull = <span className={classes.bullet}>•</span>

    return (
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="body1" className={classes.title}>
              Word of the Day
            </Typography>
            <Typography type="headline" component="h2">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography type="body1" className={classes.pos}>
              adjective
            </Typography>
            <Typography component="p">
              well meaning and kindly.<br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardContent>
            {state.name}
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
          </CardContent>
          <CardActions>
            <Button dense>Learn More</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(SimpleCard)
