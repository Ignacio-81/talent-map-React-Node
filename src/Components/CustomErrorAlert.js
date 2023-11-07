import { Alert, AlertTitle } from '@material-ui/lab';

export default function CustomErrorAlert() {
  return (

        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Error al recuperar los datos 
      </Alert>

  )
}
