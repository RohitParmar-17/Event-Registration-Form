import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css'; 

const RegisterForm = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        address: '',
        city: '',
        state: '',
        country: '',
        phoneNumber: '',
        gender: '',
        eventType: '',
        dietaryPreferences: '',
        comments: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', formData);
            console.log('Event registered:', response.data);
            alert("Registration Successfull")
            setFormData(initialFormData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Event Registration</h1>
            <div className="form-group half-width">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
            </div>
            <div className="form-group half-width">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="form-group half-width">
                <label>Phone Number</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            </div>
            <div className="form-group half-width">
                <label>Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            </div>
            <div className="form-group">
                <div className="form-group third-width">
                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
                </div>
                <div className="form-group third-width">
                    <label>State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
                </div>
                <div className="form-group third-width">
                    <label>Country</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
                </div>
            </div>
            <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Event Type</label>
                <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                    <option value="">Select Event Type</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Conference">Conference</option>
                </select>
            </div>
            <div className="form-group">
                <label>Dietary Preferences</label>
                <select name="dietaryPreferences" value={formData.dietaryPreferences} onChange={handleChange} required>
                    <option value="">Select Dietary Preferences</option>
                    <option value="None">None</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                </select>
            </div>
            <div className="form-group">
                <label>Comments</label>
                <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments"></textarea>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
