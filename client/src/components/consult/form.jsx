import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';

const Form = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        patientEmail: '',
        patientPhone: '',
        appointmentDate: '',
        appointmentTime: '',
        additionalInfo: '',
        bloodGroup: '',
        weight: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // You can add your logic to submit the form here
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
                                type="text"
                                id="patientName"
                                name="patientName"
                                value={formData.patientName}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                                placeholder="Enter patient's name"
                            />
                        </div>
                        <div>
                            <label htmlFor="patientEmail" className="block text-lg font-medium text-gray-700">
                                Patient Email
                            </label>
                            <input
                                type="email"
                                id="patientEmail"
                                name="patientEmail"
                                value={formData.patientEmail}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                                placeholder="Enter patient's email"
                            />
                        </div>
                        <div>
                            <label htmlFor="patientPhone" className="block text-lg font-medium text-gray-700">
                                Patient Phone
                            </label>
                            <input
                                type="tel"
                                id="patientPhone"
                                name="patientPhone"
                                value={formData.patientPhone}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                                placeholder="Enter patient's phone number"
                            />
                        </div>
                        <div>
                            <label htmlFor="appointmentDate" className="block text-lg font-medium text-gray-700">
                                Appointment Date
                            </label>
                            <input
                                type="date"
                                id="appointmentDate"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="appointmentTime" className="block text-lg font-medium text-gray-700">
                                Appointment Time
                            </label>
                            <input
                                type="time"
                                id="appointmentTime"
                                name="appointmentTime"
                                value={formData.appointmentTime}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="additionalInfo" className="block text-lg font-medium text-gray-700">
                                Additional Info
                            </label>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                                placeholder="Enter any additional information"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="bloodGroup" className="block text-lg font-medium text-gray-700">
                                Blood Group
                            </label>
                            <input
                                type="text"
                                id="bloodGroup"
                                name="bloodGroup"
                                value={formData.bloodGroup}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                                placeholder="Enter patient's blood group"
                            />
                        </div>
                        <div>
                            <label htmlFor="weight" className="block text-lg font-medium text-gray-700">
                                Weight (kg)
                            </label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleInputChange}
                                className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm p-3"
                                placeholder="Enter patient's weight"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="mt-8 w-full bg-teal-500 border border-transparent rounded-md py-3 px-4 text-lg font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 ease-in-out"
                    >
                        Proceed To Pay
                    </button>
                </form>
            </div>
        </Element> 
    );
};

export default Form;

