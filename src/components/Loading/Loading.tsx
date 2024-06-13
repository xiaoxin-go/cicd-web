import {Box, CircularProgress} from "@mui/material";

export const Loading = ({loading}: {loading: Boolean}) =>{
  return (
    <>{
      loading&&
        <Box display="flex" sx={{position: 'fixed', width: '100%', height: '100%'}} justifyContent="center" alignItems="center" minHeight="50vh" color={'white'} bgcolor={'#ffffff95'}>
          <CircularProgress />
        </Box>
    }
    </>
  )
}