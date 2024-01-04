import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    fullName: '',
    contactNumber: '',
    email: '',
    previousCourse: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Send a POST request to the backend
    fetch('http://localhost:5000/submit_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
        // Display a success message using alert
        alert('Form submitted successfully!');
        // You can also perform additional actions here if needed
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <Button size="large" onClick={handleClickOpen}>
              APPLY
            </Button>
          </p>
        </div>

        {/* Registration Form Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Registration Form</DialogTitle>
          <DialogContent>
            {/* Customize the form fields based on your requirements */}
            <TextField label="Full Name" name="fullName" fullWidth onChange={handleInputChange} />
            <TextField label="Contact number" name="contactNumber" fullWidth onChange={handleInputChange} />
            <TextField label="Email" name="email" fullWidth onChange={handleInputChange} />
            <TextField label="Previous course" name="previousCourse" fullWidth onChange={handleInputChange} />
            {/* Add more form fields as needed */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default CourseCard;
