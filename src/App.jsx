import { Container } from '@mui/material';
import './App.css'
import Form from './components/Form/Form';
import Header from './components/Header/Header'
import DataTable from './components/DataTable/DataTable';
import { useState } from 'react';

function App() {
    const [formValues, setFormValues] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });

    const handleClick = (values) => {
        setFormValues((oldValue) => {
            return {
                ...oldValue,
                ...values
            };
        });
    }

    return (
        <>
            <Header />
            <br />
            <Container maxWidth="xl">
                <Form formValues={formValues} onClick={handleClick} />
                <br />
                <DataTable formValues={formValues} />
            </Container>
        </>
    );
}

export default App
