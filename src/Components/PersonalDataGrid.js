import { useState } from 'react'
import { useSelector } from 'react-redux';
//Material
import CustomSelect from './CustomSelect.js'

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadButton from '../Components/UploadButton.js'
//Components
import CustomErrorAlert from './CustomErrorAlert.js';
import CustomLoading from './CustomLoading.js'
import CustomLabels from './CustomLabels.js'

//Data & Contants
import { txtPersonalData, URL_TEST_INGLES } from '../Utils/consts.js'
import { nivel, nivelInglesBritanicoTxt, estudios } from '../Utils/data.js'

export default function PersonalDataGrid(props) {
    const { data, loading, setRequest, request } = props;

    const errorPersonalData = useSelector(state => state.personalData.errorPersonalData);
    const [textValues, setTextValues] = useState('');
    const handleTextChange = (index, value) => {
        const updatedValues = [...textValues];
        const newRequest = request
        updatedValues[index] = value;
        setTextValues(updatedValues);

        switch (index) {
            case 0:
                newRequest.personalData.legajo = Number(updatedValues[index])
                break;
            case 1:
                newRequest.personalData.fechaDeIngreso = updatedValues[index]
                break;
            case 2:
                newRequest.personalData.puesto = updatedValues[index]
                break;
            case 3:
                newRequest.personalData.seniority = updatedValues[index]
                break;
        }

        setRequest(newRequest)
    };
    return (
        //Container general 
        <>
            {errorPersonalData ?
                <Grid >
                    <CustomErrorAlert />
                </Grid >
                :
                loading ?
                    <CustomLoading loading={loading} />
                    :
                    !request.personalData ?
                        <CustomLabels noData={true} />
                        :
                        <>
                            <Grid container>
                                <Grid item container={true} direction="row" alignItems="flex-end" >
                                    {/* LABEL TEXT */}
                                    <Grid item>
                                        {txtPersonalData.slice(0, 6).map((txt, index) => (
                                            <CustomLabels key={index} text={txt} />
                                        ))}
                                    </Grid>
                                    {/* PERSONAL INFORMATION */}
                                    <Grid xs item container={true} direction="column"
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    >
                                        {
                                            Object.values(data).slice(2, 6).map((txt, index) =>
                                                <TextField key={Object.keys(data)[index]}
                                                    value={textValues[index] ?? txt ?? ""}
                                                    fullWidth
                                                    onChange={(e) => handleTextChange(index, e.target.value)}
                                                />
                                            )}
                                        <Grid xs={3} item container={true} direction="row" justifyContent="center" >
                                            <CustomSelect
                                                label='Estudios'
                                                objects={estudios}
                                                val={request.personalData.idEstudioMaximoAlcanzado ?? -1}
                                                typographySize='body2'
                                                handleChangeSelect={(e) => setRequest({ ...request, personalData: { ...request.personalData, idEstudioMaximoAlcanzado: e.target.value } })}
                                            />

                                            <UploadButton label='Subi tu CV' />
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container >
                                    {/* IDIOMAS */}
                                    <Grid item xs={12}>
                                        <CustomLabels text={txtPersonalData[6]} titulo={true} />
                                    </Grid>

                                    <Grid item container={true} direction="row"
                                        justifyContent="space-between"
                                        alignItems="center">
                                        <CustomLabels text={txtPersonalData[7]} />
                                        <Grid item xs>
                                            <CustomSelect
                                                label='nivel-ingles'
                                                objects={nivel}
                                                val={request.personalData.idNivelDeIngles ?? -1}
                                                typographySize='body2'
                                                handleChangeSelect={(e) => setRequest({ ...request, personalData: { ...request.personalData, idNivelDeIngles: e.target.value } })}
                                            />
                                        </Grid>
                                        <Grid item xs>
                                            <CustomSelect
                                                label='nivel-ingles-britanico'
                                                objects={nivelInglesBritanicoTxt}
                                                val={request.personalData.idNivelInglesBritanico ?? -1}
                                                typographySize='body2'
                                                handleChangeSelect={(e) => setRequest({ ...request, personalData: { ...request.personalData, idNivelInglesBritanico: e.target.value } })}
                                            />
                                        </Grid>
                                        <Grid item xs style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Button size="small" variant="contained"
                                                target="_blank" rel="noopener noreferrer"
                                                href={URL_TEST_INGLES}>
                                                TEST
                                            </Button>
                                        </Grid>
                                        <Grid item xs style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <UploadButton label='Adjuntar' />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container >
                                    {/* METODOLOGIAS AGILES */}
                                    <Grid item xs={12}>
                                        <CustomLabels text={txtPersonalData[8]} titulo={true} />
                                    </Grid>
                                    <Grid item container={true} direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center">
                                        <CustomLabels text={txtPersonalData[9]} />
                                        <Grid item xs={3}>
                                            <CustomSelect
                                                label={txtPersonalData[9]}
                                                objects={nivel}
                                                val={request.personalData.idNivelMetAgiles ?? -1}
                                                typographySize='body2'
                                                handleChangeSelect={(e) => setRequest({ ...request, personalData: { ...request.personalData, idNivelMetAgiles: e.target.value } })}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>}
        </>
    )
}
