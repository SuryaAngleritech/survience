import React from 'react';
import { AppBar, Box, Fab, TextField, Card, Toolbar, Divider, Slide, useScrollTrigger, IconButton, CardActions, CardContent, Typography, Menu, Container, Button, MenuItem, CardMedia } from '@mui/material';
import banner from '../../assets/images/pannel.jpg'

const Panel = () => {
    return (
        < >
            <CardMedia component="img" image={banner} alt="Survience" ></CardMedia>
            <Container>
                <Typography sx={{ mt: 2, mb: 2 }} variant='h2' align="center">Panel of Conduct</Typography>

                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >Panel Code of Conduct is designed to keep the panel healthy and always secured during the data collection process of Market Research.</Typography>

                <Typography variant='h4' sx={{ mt: 2, mb: 2 }} >Guidelines to be followed by the panelist:</Typography>

                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >Panelist, defines as a registered member of Survience+ or www.survienceplus.com</Typography>

                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >Registered Panelist are entitled to receive Research Surveys request in the method of online surveys [Quantitative] or Telephonic/Tele-web/In-Person Methodologies[Qualitative].</Typography>

                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >Survey answers/responses will be scrutinized in view of the client/project requirement, any answers/responses which/those do not met the quality requirement is eligible to be terminated/removed at the discretion of the client data quality check process</Typography>
                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >Removed responses/answers will be informed within 30-45 days</Typography>
                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >Respondents attempting to complete the survey after the quota has been met or who do not qualify will not be eligible to receive the honorarium. If you do not qualify, your participation in the survey will be terminated after a few short screener questions, and no honorarium will be paid.</Typography>
                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >Honorarium/Incentives are only entitled to be paid out only once the panelist completes the survey in the stipulated time frame and being approved on client's data quality check process and approval of responses.                </Typography>
                <Typography variant='h6' sx={{ mt: 2, mb: 2 }}>Honorarium/Incentives is processed once the research survey is completed. The turnaround time [TAT] to be in receipt of the Honorarium/Incentives is about 45-60 days once the research is closed. An intimation will be shared with all participants about the research closure.                </Typography>
                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >A processing fee of $5 will be levied on all incentive/honorarium payout process.                </Typography>
                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >If you have any questions pertaining to research or a particular project, you will either need to reach out to <a href='mailto:support@survience.com'>support@survience.com</a> or <a href='mailto:pm@survience.com'>pm@survience.com</a >, please mention the survey ID on the subject line for your email. Our Survey ID begin with SRC and can be noted on the email invite you received.                </Typography>
                <Typography variant='h6' sx={{ mt: 2, mb: 2 }} >To know more about your data protection, please write to our Data Protection Officer, email: <span><a href='mailto:dpo@survience.com'>dpo@survience.com</a></span>                </Typography>
            </Container>
        </ >
    )
}

export default Panel