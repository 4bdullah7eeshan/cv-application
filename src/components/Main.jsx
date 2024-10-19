import { useState } from 'react';
import UserInput from "./UserInput";
import CVPreview from "./CVPreview";
import sampleCV from '../data/sampleCV';

function Main() {
    const [userData, setUserData] = useState(sampleCV);

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Here name is the HTML attribute from input element
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleArrayInputChange = (e, section, index) => {
        const { name, value } = e.target;
        setUserData((prevData) => {
            const updatedSection = [...prevData[section]];
            updatedSection[index] = {
                ...updatedSection[index],
                [name]: value,
            };
            return {
                ...prevData,
                [section]: updatedSection,
            };
        });
    };

    const addNewSection = (section) => {
        setUserData((prevData) => ({
            ...prevData,
            [section]: [
                ...prevData[section],
                section === 'education'
                    ? { school: '', title: '', date: '' }
                    : { company: '', position: '', responsibilities: '', fromDate: '', toDate: '' },
            ],
        }));
    };

    const removeSection = (section, index) => {
        setUserData((prevData) => {
            const updatedSection = prevData[section].filter((_, i) => i !== index);
            return {
                ...prevData,
                [section]: updatedSection,
            };
        });
    };
    
    return (
        <main>
            <UserInput userData={userData} handleInputChange={handleInputChange} handleArrayInputChange={handleArrayInputChange} addNewSection={addNewSection} removeSection={removeSection} />
            <CVPreview userData={userData} />
        </main>
    );
}

export default Main;