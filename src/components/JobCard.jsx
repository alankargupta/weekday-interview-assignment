import { Card, CardContent, Typography,Link, Button, rgbToHex} from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'
import './jobcard.css'

function JobCard({ data }) {

  return (
    <Card sx={{ height: 380, width: 300, bgcolor: "white", borderRadius: 2, boxShadow: 4 }}>
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <img src={data.logoUrl} alt="company logo" height={40} width={25} />
          <Box>
            <Box>
              <Typography sx={{ fontSize: 13, color: "#8b8b8b", fontWeight: 600, letterSpacing: 1, marginLeft: 2 }}>{data.companyName}</Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 400, lineHeight: 1.5, marginLeft: 2 }}>{data.jobRole}</Typography>
            </Box>
            <Typography fontSize={11} fontWeight={500} marginLeft={2}>{data.location}</Typography>
          </Box>
        </Box>
        <Box sx={{marginTop:"20px"}}>
        <Typography >About Company</Typography>
        <Typography className='fadeText'>{data.jobDetailsFromCompany}</Typography>
        <Link
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
          sx={{marginLeft:"90px"}}
        >
          View Job
        </Link>
        </Box>
        <Box sx={{marginTop:'10px'}}>
          <Typography sx={{color:"#8b8b8b", fontSize:13, fontWeight:600, letterSpacing:1, marginBottom:"3px"}}>Minimum Experience</Typography>
          <Typography sx={{fontSize:"14px", lineHeight:1.5, fontWeight:400}}>{data.minExp?data.minExp:"-"} years</Typography>
        </Box>
        <Button sx={{marginTop:"20px", width:"100%", height:"40px", bgcolor:rgbToHex("rgb(85,239,196)"),color:"black", padding:"8px 18px", textTransform:'none'}}>Eazy Apply</Button>
      </CardContent>

    </Card>)


}

export default JobCard
