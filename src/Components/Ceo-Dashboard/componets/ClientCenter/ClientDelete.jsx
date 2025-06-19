import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
  IconButton
} from '@mui/material';
import {
  DeleteOutline,
  WarningAmber,
  Close,
  Check
} from '@mui/icons-material';

export default function ClientDelete({ 
  open, 
  onClose, 
  onConfirm, 
  clientName = "Mijoz",
  clientDetails = ""
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)',
          overflow: 'visible'
        }
      }}
    >
   

      <DialogContent sx={{ py: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            p: 2
          }}
        >
       

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: -3 }}>
            {clientName} ni rostdan ham o'chirmoqchimisiz?
          </Typography>

          <Typography variant="body1" color="text.secondary" paragraph>
            Bu amalni ortga qaytarib bo'lmaydi. Barcha bog'liq ma'lumotlar ham o'chib ketadi.
          </Typography>

          {clientDetails && (
            <Box
              sx={{
                p: 2,
                bgcolor: 'grey.100',
                borderRadius: 1,
                width: '100%',
                mt: 2,
                textAlign: 'left'
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                O'chiriladigan mijoz:
              </Typography>
              <Typography variant="body2">
                {clientDetails}
              </Typography>
            </Box>
          )}
        </Box>
      </DialogContent>

      <Divider sx={{ my: 1 }} />

      {/* Dialog Actions */}
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onClose}
          startIcon={<Close />}
          sx={{
            borderRadius: 2,
            borderColor: 'grey.400',
            '&:hover': {
              borderColor: 'grey.600'
            }
          }}
        >
          Bekor qilish
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          startIcon={<Check />}
          sx={{
            borderRadius: 2,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'error.dark',
              boxShadow: 'none'
            }
          }}
        >
          O'chirish
        </Button>
      </DialogActions>
    </Dialog>
  );
}