/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';

const FormField = ({ type, placeholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
    );
};

const AppointmentForm = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [appointmentType, setAppointmentType] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //  POST API request
        const formData = {
            firstName: name,
            lastName: lastName,
            email: email,
            phoneNumber: phone,
            appointmentType: appointmentType
        };

        axios
            .post('https://api.example.com/appointment', formData)
            .then((response) => {
                console.log('API response:', response.data);
            })
            .catch((error) => {
                console.error('API error:', error);
            });
    };

    return (
        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            <FormField
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormField
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <FormField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormField
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <div className="mb-4">
                <select
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                >
                    <option value="">Type Of Appointment</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className="px-4 w-full text-lg bg-light py-2  text-white rounded"
                >
                    Schedule Now
                </button>
            </div>
        </form>
    );
};

export default AppointmentForm;
