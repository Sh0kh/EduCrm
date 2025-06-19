import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  MenuItem,
  Divider,
  Typography,
  Chip
} from '@mui/material';
import {
  Person,
  Phone,
  Groups,
  DateRange,
  Close,
  Save
} from '@mui/icons-material';

export default function ClientActive({ open, onClose, clientData }) {
  const [formData, setFormData] = useState({
    fullName: clientData?.fullName || '',
    parentPhone: clientData?.parentPhone || '',
    studentPhone: clientData?.studentPhone || '+998',
    group: clientData?.group || '',
    parentName: clientData?.parentName || '',
    startDate: clientData?.startDate || '',
    comment: clientData?.comment || ''
  });

  const [groups] = useState([
    'Matematika - Dushanba/Chorshanba 10:00',
    'Fizika - Seshanba/Juma 14:00',
    'Ingliz tili - Har kuni 9:00',
    'Kimyo - Dushanba/Juma 16:00'
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.15)'
        }
      }}
    >
    

      <DialogContent sx={{ py: 3 }}>
        <form>
          {/* Full Name */}
          <TextField
            fullWidth
            margin="normal"
            label="Ism familiya"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="primary" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Parent Phone */}
          <TextField
            fullWidth
            margin="normal"
            label="Ota-ona raqami"
            name="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone color="primary" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Student Phone */}
          <TextField
            fullWidth
            margin="normal"
            label="Telefon raqami"
            name="studentPhone"
            value={formData.studentPhone}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Chip label="+998" size="small" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Group Selection */}
          <TextField
            select
            fullWidth
            margin="normal"
            label="Guruhlar"
            name="group"
            value={formData.group}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Groups color="primary" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          >
            <MenuItem value="">
              <em>Guruhni tanlang</em>
            </MenuItem>
            {groups.map((group) => (
              <MenuItem key={group} value={group}>
                {group}
              </MenuItem>
            ))}
          </TextField>

          {/* Parent Name */}
          <TextField
            fullWidth
            margin="normal"
            label="Ota-ona ism familiyasi"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="primary" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Start Date */}
          <TextField
            fullWidth
            margin="normal"
            label="Talaba boshlagan vaqti"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DateRange color="primary" />
                </InputAdornment>
              ),
              inputProps: {
                max: new Date().toISOString().split('T')[0] // Set max date to today
              }
            }}
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Comment */}
          <TextField
            fullWidth
            margin="normal"
            label="Izoh"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            multiline
            rows={3}
            variant="outlined"
            sx={{ mb: 2 }}
          />

          <Divider sx={{ my: 2 }} />
        </form>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onClose}
          startIcon={<Close />}
          sx={{ borderRadius: 2 }}
        >
          Bekor qilish
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          startIcon={<Save />}
          sx={{ borderRadius: 2, boxShadow: 'none' }}
        >
          Saqlash
        </Button>
      </DialogActions>
    </Dialog>
  );
}