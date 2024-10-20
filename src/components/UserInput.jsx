import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';
import { mdiPlusCircleOutline } from '@mdi/js';
import CVToPDF from './CVToPDF';
import sampleCV from '../data/sampleCV';

function UserInput({ userData, handleInputChange, handleArrayInputChange, addNewSection, removeSection, setUserData }) {
    const { name, email, phone, education, experience } = userData;
    
    const [isGeneralInfoOpen, setIsGeneralInfoOpen] = useState(true);
    const [isEducationOpen, setIsEducationOpen] = useState(true);
    const [isExperienceOpen, setIsExperienceOpen] = useState(true);

    const clearForm = () => {
        setUserData({
            name: '',
            email: '',
            phone: '',
            education: [{ school: '', title: '', date: '' }],
            experience: [{ company: '', position: '', responsibilities: '', fromDate: '', toDate: '' }],
        });
    };

    const loadDefaultData = () => {
        setUserData(sampleCV);
    };

    return (
        <section className="user-input">
            <header>
                <div className='wizard'>
                    <span className="styled-button">
                        <PDFDownloadLink document={<CVToPDF userData={userData} />} fileName="cv.pdf">
                            {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
                        </PDFDownloadLink>
                    </span>
                    <button type="button" onClick={clearForm} className="clear-btn">
                        Clear Form
                    </button>
                    <button type="button" onClick={loadDefaultData} className="load-btn">
                        Load Default Data
                    </button>
                </div>
            </header>
            <form>
                <fieldset>
                    <legend onClick={() => setIsGeneralInfoOpen(!isGeneralInfoOpen)} style={{ cursor: 'pointer' }}>
                        General Information {isGeneralInfoOpen ? '▲' : '▼'}
                    </legend>
                    {isGeneralInfoOpen && (
                        <div>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={email} onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone:</label>
                                <input type="tel" id="phone" name="phone" value={phone} onChange={handleInputChange} />
                            </div>
                        </div>
                    )}
                </fieldset>

                <fieldset>
                    <legend onClick={() => setIsEducationOpen(!isEducationOpen)} style={{ cursor: 'pointer' }}>
                        Education {isEducationOpen ? '▲' : '▼'}
                    </legend>
                    {isEducationOpen && (
                        <div>
                            {education.map((edu, index) => (
                                <div key={index}>
                                    <div>
                                        <p><strong>Education {index + 1}</strong></p>
                                    </div>
                                    <div>
                                        <label htmlFor={`school-${index}`}>School Name:</label>
                                        <input
                                            type="text"
                                            id={`school-${index}`}
                                            name="school"
                                            value={edu.school}
                                            onChange={(e) => handleArrayInputChange(e, 'education', index)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor={`title-${index}`}>Title of Study:</label>
                                        <input
                                            type="text"
                                            id={`title-${index}`}
                                            name="title"
                                            value={edu.title}
                                            onChange={(e) => handleArrayInputChange(e, 'education', index)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor={`date-${index}`}>Date of Study:</label>
                                        <input
                                            type="text"
                                            id={`date-${index}`}
                                            name="date"
                                            value={edu.date}
                                            onChange={(e) => handleArrayInputChange(e, 'education', index)}
                                        />
                                    </div>

                            
                                    

                                    {index > 0 && (
                                        <div className='del-btn'>
                                            <button type="button" onClick={() => removeSection('education', index)}>
                                                <Icon path={mdiDeleteOutline} size={1} />
                                            </button>
                                        </div>
                                    )}
                                    <div>
                                        <hr />
                                    </div>
                                </div>
                            ))}
                            <div className='add-btn'>
                                <button className='plus' type="button" onClick={() => addNewSection('education')}>
                                    <Icon path={mdiPlusCircleOutline} size={1} />
                                </button>
                            </div>
                        </div>
                    )}
                </fieldset>

                <fieldset>
                    <legend onClick={() => setIsExperienceOpen(!isExperienceOpen)} style={{ cursor: 'pointer' }}>
                        Experience {isExperienceOpen ? '▲' : '▼'}
                    </legend>
                    {isExperienceOpen && (
                        <div>
                            {experience.map((exp, index) => (
                                <div key={index}>
                                    <div>
                                        <p><strong>Experience {index + 1}</strong></p>
                                    </div>

                                    <div>
                                        <label htmlFor={`company-${index}`}>Company Name:</label>
                                        <input
                                            type="text"
                                            id={`company-${index}`}
                                            name="company"
                                            value={exp.company}
                                            onChange={(e) => handleArrayInputChange(e, 'experience', index)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor={`position-${index}`}>Position Title:</label>
                                        <input
                                            type="text"
                                            id={`position-${index}`}
                                            name="position"
                                            value={exp.position}
                                            onChange={(e) => handleArrayInputChange(e, 'experience', index)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor={`responsibilities-${index}`}>Responsibilities:</label>
                                        <div>
                                            <textarea
                                                id={`responsibilities-${index}`}
                                                name="responsibilities"
                                                value={exp.responsibilities}
                                                rows='10'
                                                cols='50'
                                                onChange={(e) => handleArrayInputChange(e, 'experience', index)}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor={`fromDate-${index}`}>Date From:</label>
                                        <input
                                            type="text"
                                            id={`fromDate-${index}`}
                                            name="fromDate"
                                            value={exp.fromDate}
                                            onChange={(e) => handleArrayInputChange(e, 'experience', index)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor={`toDate-${index}`}>Date Until:</label>
                                        <input
                                            type="text"
                                            id={`toDate-${index}`}
                                            name="toDate"
                                            value={exp.toDate}
                                            onChange={(e) => handleArrayInputChange(e, 'experience', index)}
                                        />
                                    </div>

                                    {index > 0 && (
                                        <div className='del-btn'>
                                            <button type="button" onClick={() => removeSection('experience', index)}>
                                                <Icon path={mdiDeleteOutline} size={1} />
                                            </button>
                                        </div>
                                    )}
                                    <div>
                                        <hr />
                                    </div>
                                </div>
                                
                            ))}
                            <div className='add-btn'>
                                <button className='plus' type="button" onClick={() => addNewSection('experience')}>
                                    <Icon path={mdiPlusCircleOutline} size={1} />
                                </button>
                            </div>
                        </div>
                    )}
                </fieldset>
            </form>

        </section>
    );
}

export default UserInput;
