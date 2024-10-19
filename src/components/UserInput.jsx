import { useState } from 'react';

function UserInput({ userData, handleInputChange, handleArrayInputChange, addNewSection, removeSection }) {
    const { name, email, phone, education, experience } = userData;
    
    const [isGeneralInfoOpen, setIsGeneralInfoOpen] = useState(true);
    const [isEducationOpen, setIsEducationOpen] = useState(true);
    const [isExperienceOpen, setIsExperienceOpen] = useState(true);

    return (
        <section className="user-input">
            <h2>Form</h2>
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
                        Educational Experience {isEducationOpen ? '▲' : '▼'}
                    </legend>
                    {isEducationOpen && (
                        <div>
                            {education.map((edu, index) => (
                                <div key={index}>
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
                                        <button type="button" onClick={() => removeSection('education', index)}>
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button type="button" onClick={() => addNewSection('education')}>
                                Add Education
                            </button>
                        </div>
                    )}
                </fieldset>

                <fieldset>
                    <legend onClick={() => setIsExperienceOpen(!isExperienceOpen)} style={{ cursor: 'pointer' }}>
                        Practical Experience {isExperienceOpen ? '▲' : '▼'}
                    </legend>
                    {isExperienceOpen && (
                        <div>
                            {experience.map((exp, index) => (
                                <div key={index}>
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
                                        <textarea
                                            id={`responsibilities-${index}`}
                                            name="responsibilities"
                                            value={exp.responsibilities}
                                            onChange={(e) => handleArrayInputChange(e, 'experience', index)}
                                        />
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
                                        <button type="button" onClick={() => removeSection('experience', index)}>
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button type="button" onClick={() => addNewSection('experience')}>
                                Add Experience
                            </button>
                        </div>
                    )}
                </fieldset>
            </form>
        </section>
    );
}

export default UserInput;
