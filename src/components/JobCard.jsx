import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'

function JobCard({data}) {

    return(
    <Card sx={{height:600, width:300, bgcolor:"white",borderRadius:2,boxShadow:4}}>
      <CardContent>
        <Box sx={{display:"flex"}}>
            <img src={data.logoUrl} alt="company logo" height={40} width={25}/>
            <Box>
                <Box>
                    <Typography sx={{fontSize:13 ,color:"#8b8b8b", fontWeight:600, letterSpacing:1, marginLeft:2}}>{data.companyName}</Typography>
                    <Typography sx={{fontSize:18,fontWeight:400, lineHeight:1.5, marginLeft:2}}>{data.jobRole}</Typography>
                </Box>
                <Typography fontSize={11} fontWeight={500} marginLeft={2}>{data.location}</Typography>
            </Box>
        </Box>
        <Typography>About Company</Typography>
        <Typography>{data.jobDetailsFromCompany}</Typography>
      </CardContent>

    </Card>)

   
}

export default JobCard
