'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function CvHeaderCard() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        backgroundColor: 'rgba(30,30,30,0.92)', 
        borderRadius: 3,
        boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
        p: 4,
        maxWidth: 900,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" color="#66ff66" fontWeight="bold" gutterBottom>
        ADOLF BAGASKARA LEMBONG
      </Typography>

      <Typography color="white" gutterBottom>
        adolflembong@gmail.com | 087888830153
      </Typography>

      <Button
        variant="contained"
        startIcon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/adolf-b-lembong-9b5637279/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 2,
          textTransform: 'none',
          backgroundColor: '#00cc44',
          color: '#000',
          fontWeight: 'bold',
          '&:hover': { backgroundColor: '#00e65c' },
        }}
      >
        LinkedIn
      </Button>
    </Box>
  );
}
