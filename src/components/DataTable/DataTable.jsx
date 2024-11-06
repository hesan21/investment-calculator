import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { calculateInvestmentResults, formatter } from "../../../util/investment";

const DataTable = ({ formValues }) => {
    const results = calculateInvestmentResults(formValues);
    const initialInvestment = results && results.length
        ? results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment
        : 0;

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell>Investment Value</TableCell>
                        <TableCell>Interest (Year)</TableCell>
                        <TableCell>Total Interest</TableCell>
                        <TableCell>Invested Capital</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        results && results.length ?
                            results.map(row => {
                                const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                                const totalInvested = row.valueEndOfYear - totalInterest;

                                return (
                                    <TableRow key={row.year}>
                                        <TableCell>{row.year}</TableCell>
                                        <TableCell>{formatter.format(row.valueEndOfYear)}</TableCell>
                                        <TableCell>{formatter.format(row.interest)}</TableCell>
                                        <TableCell>{formatter.format(totalInterest)}</TableCell>
                                        <TableCell>{formatter.format(totalInvested)}</TableCell>
                                    </TableRow>
                                );
                            })
                            : <TableRow>
                                <TableCell colSpan={5} sx={{
                                    textAlign: "center"
                                }}>No Data</TableCell>
                            </TableRow>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default DataTable;