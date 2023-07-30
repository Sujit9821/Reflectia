import { makeStyles } from '@material-ui/core/styles';
// import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    /* For the regular text color */
    color: 'rgba(0, 183, 255, 1)',
    textDecoration: 'none',
    /* Add a smooth transition effect for the hover */
    transition: 'color 0.2s',
    /* Set a fallback color for browsers that don't support gradients */
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    /* Create a mix of colors for the text using linear-gradient */
    backgroundImage: 'linear-gradient(45deg, #FF0000, #00FF00, #0000FF)',
    /* Make the background visible on hover */
    '&:hover': {
      color: 'transparent',
      /* Change the mix of colors on hover */
      backgroundImage: 'linear-gradient(45deg, #FF00FF, #FFFF00, #00FFFF)',
    },
  },
  image: {
    marginLeft: '15px',
    /* Add your regular styles for the image here */
    /* For example, if you want to add a border and some padding */
    border: '1px solid #ccc',
    padding: '5px',
    height: '60px',
    width: '60px',
    borderRadius: '15%', /* To make the image circular */
    transition: 'transform 0.2s', /* Add a smooth transition effect for the hover */
  },
  // Rest of the styles...
}));
