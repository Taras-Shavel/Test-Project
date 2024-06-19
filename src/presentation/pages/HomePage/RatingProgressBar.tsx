import React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useTheme} from "@emotion/react";

interface IProps {
    rating: number;
}

const RatingProgressBar: React.FC<IProps> = ({ rating }) => {
    const percentages: number[] = [20, 40, 60, 80, 100];
    const theme = useTheme();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '64px',
            width: '336px',
            gap: '32px'
        }}>
            <div className='flex h-6 items-center justify-between'>
                <h2 style={{
                    fontSize: '18px',
                    fontFamily: theme.font.default,
                    color: theme.color.dark.dark
                }}>Profile completed </h2>

                <h2 style={{
                    fontSize: '14px',
                    color: theme.color.green.default,
                    fontFamily: theme.font.default,
                    fontWeight: 'bold'
                }}>{rating}%</h2>
            </div>
            <ThemeProvider theme={createTheme()}>
                <Box display="flex" alignItems="center" style={{width: '100%', height: '8px', gap: '4px'}}>
                    {percentages.map((percent, index) => (
                        <Box
                            key={index}
                            width="64px"
                            height={8}
                            borderRadius={'2px'}
                            bgcolor={rating >= percent ? theme.color.green.default : '#e0e0e0'}
                        />
                    ))}
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default RatingProgressBar;
