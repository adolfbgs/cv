'use client';

import { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram } from 'react-icons/fa';


const cvData = [
  {
    title: 'PROFILE',
    content: `I am an undergraduate student who has a strong interest in continuous learning and communication. I enjoy working in teams and have experience collaborating in various operational situations and events. My background in handling multimedia systems—such as audio mixers, cameras, and projectors—has enhanced my adaptability and ability to support workflow effectively.`
  },
  {
    title: 'EDUCATIONAL BACKGROUND',
    content: `• Universitas Terbuka (2019 – Present) – Bachelor's in Development Economics (in progress)
• Merpati Pilot School (2017 – ) – Commercial Pilot License`
  },
  {
    title: 'WORK EXPERIENCE',
    content: `PT Otomotif Indoglobal – Operator & Receiving Officer
Nov 2019 – Jun 2025
- Managed production processes efficiently to meet daily targets.
- Received and inspected goods from suppliers to ensure quality standards.
- Coordinated with the team to maintain smooth workflow.`
  },
  {
    title: 'ORGANIZATIONAL EXPERIENCE',
    content: `• Committee member for various campus events, responsible for publications and documentation.
• Actively participated in event coordination and execution.`
  },
  {
    title: 'SKILLS',
    content: `• Communication and teamwork
• Adaptability in different work environments
• Multimedia equipment operation (audio mixer, camera, projector)
• Basic Microsoft Office and Canva`
  },
  {
    title: 'LANGUAGES',
    content: `• Bahasa Indonesia (Native)
• English (Intermediate)`
  }
];

export default function CVPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #000 70%, #004d00 100%)',
        py: 3,
        px: 2
      }}
    >
      
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        
        <Box width="60px" />

        
        <Box display="flex" gap={3}>
          <Typography sx={{ cursor: 'pointer', color: 'white' }}>Home</Typography>
          <Typography sx={{ cursor: 'pointer', color: '#66ff66', fontWeight: 'bold' }}>Posts</Typography>
        </Box>

        
        <Box display="flex" gap={1}>
          <IconButton
            component="a"
            href="https://www.instagram.com/dollffyy"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <FaInstagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/adolfbgs"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'white' }}
          >
            <FaGithub />
          </IconButton>
        </Box>
      </Box>

      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          align="center"
          color="white"
          fontWeight="bold"
          sx={{ textShadow: '0 0 10px #00ff00' }}
        >
          ADOLF BAGASKARA LEMBONG
        </Typography>
        <Typography align="center" color="#66ff66">
          adolflembong@gmail.com | 087888830153
        </Typography>
        <Box textAlign="center" mt={1} mb={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00cc44',
              color: '#000',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#00e65c' }
            }}
            href="https://www.linkedin.com/in/adolf-b-lembong-9b5637279/"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Box>
      </motion.div>

      
      <Grid container spacing={3} justifyContent="center">
        {cvData.map((section, index) => (
          <Grid
            item
            xs={12}
            md={8}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  backgroundColor: '#111',
                  border: '2px solid #00cc44',
                  borderRadius: '12px',
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    rgba(0, 255, 0, 0.1),
                    rgba(0, 255, 0, 0.1) 10px,
                    transparent 10px,
                    transparent 20px
                  )`,
                  boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
                  maxWidth: 500
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: '#66ff66',
                    mb: 1,
                    fontWeight: 'bold',
                    textShadow: '0 0 5px #00ff00'
                  }}
                >
                  {section.title}
                </Typography>
                <Typography sx={{ color: 'white', whiteSpace: 'pre-line' }}>
                  {section.content}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

