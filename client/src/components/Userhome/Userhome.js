import React, { useState} from 'react'
import { Grid, TextField, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material'
import './Userhome.css'
import axios from 'axios'
import { serverURL } from '../../constants/Constants'
import {useNavigate} from 'react-router-dom'
// import { ArrowForward } from '@material-ui/icons';


function Userhome() {
  const navigate = useNavigate()


  

  const [formValues, setFormvalues] = useState('')
  const [formError, setFormError] = useState()


  // const handleImage = (e) => {
  //   setLogo(e.target.files[0])

  // }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormvalues({ ...formValues, [name]: value })
    
  }
  const handleSubmit = () => {
    if (formValues.name === '' || formValues.email === '' || formValues.address === '' || formValues.city === '' || formValues.state === '' || formValues.phoneno === '' || formValues.companyname === '' ||
      formValues.teamandbackground === '' || formValues.companyandproduct === '' || formValues.problem === '' || formValues.solution === '' || formValues.valueproposition === '' || formValues.competators === '' || formValues.revenue === '' ||
      formValues.potentialmarketsize === '' || formValues.plan === '' || formValues.type === '' || formValues.businessproposal === '') {
      setFormError('enter all the required fields')
    } else {
      
      console.log("qwerty")
      const userId = localStorage.getItem("userData")
 
    

      axios.post(`${serverURL}/formsubmit`, formValues).then((response) => {
        console.log("Hi",response);
        navigate('/proccessing')
      }).catch((err) => {
        console.log('error')
      })
    }
  }
  return (
    <div className='Box'>
      <h1 className='Header'>APPLICATION FOR INCUBATION</h1>
      {formError && <h4 style={{ color: 'red' }}>{formError}</h4>}
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="name"
            name='name'
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="email"
            name='email'
            type="email"
            onChange={handleChange}
          />
        </Grid>


        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Address"
            name='address'
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="City"
            name='city'
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="State"
            name='state'
            type="text"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Phone no"
            type="number"
            name='phone'
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Company name"
            type="text"
            name='companyname'
            onChange={handleChange}
          />
        </Grid>
        {/* <Grid sx={{ mt: 2.5 }} item sm={6} xs={12}>
          <label>Companylogo</label>  <br />
          <input type='file' name='logo' onChange={handleImage} />
        </Grid> */}
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Describe your team and background"
            type="text"
            name='teamandbackground'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Describe your Company and Product"
            type="text"
            name='companyandproduct'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Describe the problem you are trying to solve"
            type="text"
            name='problem'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="What is unique about your solution"
            type="text"
            name='solution'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="What is your value proposition for the customer"
            type="text"
            name='valueproposition'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Who are your competators and what is your competatiev advantage?"
            type="text"
            name='competators'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Explain your revenue model"
            type="text"
            name='revenueModel'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="What is the potential market size of the product?"
            type="text"
            name='potentialmarketsize'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="How do you market or plan to market your products and services?"
            type="text"
            name='plan'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>

          <FormLabel id="demo-radio-buttons-group-label">Type of incubation needed</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="type"
            onClick={handleChange}
          >
            <FormControlLabel className='radio' value="Physical incubation" control={<Radio />} label="Physical incubation" />
            <FormControlLabel value="Virtual incubation" control={<Radio />} label="Virtual incubation" />
          </RadioGroup>

        </Grid>
        <Grid item xs={12}>
          <TextField className='text'
            margin="normal"
            required
            fullWidth
            label="Upload a detailed business proposal"
            type="text"
            name='businessproposal'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button className='button' variant="contained" color="success" onClick={handleSubmit} >
            Submit
          </Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default Userhome