function CVPreview({ userData }) {
    const { name, email, phone, education, experience } = userData;

    return (
        <section className="cv-preview">
            <div className="resume-header">
                <h2>{name}</h2>
                <div className="resume-contact-info">
                    <p>{email}</p>
                    <p> | </p>
                    <p>{phone}</p>
                </div>

            </div>
            <hr />
            <div className="resume-education-section">
                <h4>EDUCATION</h4>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index}>
                            <p><strong>{edu.school}</strong></p>
                            <div className="fr">
                                <p><em>{edu.title}</em></p>
                                <p>{edu.date}</p>
                            </div>
                            
                        </div>
                    ))
                ) : (
                    <p>No education details provided</p>
                )}
            </div>
            <br />
            <div className="resume-experience-section">
                <h4>EXPERIENCE</h4>
                {experience.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index}>
                            <p><strong>{exp.company}</strong></p>
                            <div className="fr">
                                <p><em>{exp.position}</em></p>
                                <p>{exp.fromDate} - {exp.toDate}</p>
                            </div>
                            <p>{exp.responsibilities}</p>
                        </div>
                    ))
                ) : (
                    <p>No experience details provided</p>
                )}
            </div>
            <br />
        </section>
    );
};

export default CVPreview;
