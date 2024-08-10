import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import axios from "axios";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        contact: "",
        aadharNumber: "",
        speciality: "",
    });

    const [roomUrl, setRoomUrl] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const token = localStorage.getItem("userToken"); // Assuming user is logged in
            const res = await axios.post(
                "http://localhost:5001/api/appointment/create",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setRoomUrl(res.data.roomUrl);
        } catch (error) {
            console.error("Error creating appointment:", error);
        }
    };

    return (
        <Element name="appointmentForm" >
            <div className="max-w-4xl mx-auto bg-teal-50 shadow-lg rounded-lg p-10 sm:p-12 mt-36 mb-36">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Schedule an Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="patientName" className="block text-lg font-medium text-gray-700">
                                Patient Name
                            </label>
                            <input
                                id="patientName"
                                type="text"
                                name="name"
                                placeholder="Patient Name"
                                onChange={handleChange}
                                value={formData.name}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="patientEmail" className="block text-lg font-medium text-gray-700">
                                Age
                            </label>
                            <input
                                id="patientEmail"
                                type="number"
                                name="age"
                                onChange={handleChange}
                                value={formData.age}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                                placeholder="Age"
                            />
                        </div>
                        <div>
                            <label htmlFor="bloodGroup" className="block text-lg font-medium text-gray-700">
                                Gender
                            </label>
                            <select
                                id="bloodGroup"
                                name="gender"
                                onChange={handleChange}
                                value={formData.gender}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="patientPhone" className="block text-lg font-medium text-gray-700">
                                Contact No.
                            </label>
                            <input
                                id="patientPhone"
                                type="text"
                                name="contact"
                                placeholder="Contact Number"
                                onChange={handleChange}
                                value={formData.contact}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"

                            />
                        </div>
                        <div>
                            <label htmlFor="appointmentDate" className="block text-lg font-medium text-gray-700">
                                Aadhar Number
                            </label>
                            <input
                                id="appointmentDate"
                                type="text"
                                name="aadharNumber"
                                placeholder="Aadhar Number"
                                onChange={handleChange}
                                value={formData.aadharNumber}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                            />
                        </div>

                        <div>
                            <label htmlFor="additionalInfo" className="block text-lg font-medium text-gray-700">
                                Speciality
                            </label>
                            <textarea
                                id="additionalInfo"
                                type="text"
                                name="speciality"
                                placeholder="Speciality"
                                onChange={handleChange}
                                value={formData.speciality}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"

                            ></textarea>
                        </div>


                    </div>
                    <button
                        type="submit"
                        className="mt-8 w-full bg-teal-500 border border-transparent rounded-md py-3 px-4 text-lg font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                    >
                        Proceed To Pay
                    </button>
                </form>
                {roomUrl && (
                    <div className="mt-8">
                        <a
                            href={roomUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white p-2 rounded"
                        >
                            Join Room
                        </a>
                    </div>
                )}
            </div>
        </Element>
    );
};

export default Form;

