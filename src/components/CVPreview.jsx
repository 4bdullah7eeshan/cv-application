function CVPreview({ userData }) {
    const { name, email, phone, education, experience } = userData;

    return (
        <section className="cv-preview">
            <div className="resume-header">
                <h1>{name}</h1>
                <div className="resume-contact-info">
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>

            </div>
            <hr />
            <div className="resume-education-section">
                <h3>EDUCATION</h3>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index}>
                            <div className="fr">
                                <p><strong>{edu.school}</strong></p>
                                <p>{edu.date}</p>
                            </div>
                            <p><em>{edu.title}</em></p>
                        </div>
                    ))
                ) : (
                    <p>No education details provided</p>
                )}
            </div>

            <div className="resume-experience-section">
                <h3>EXPERIENCE</h3>
                {experience.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index}>
                            <div className="fr">
                                <p><strong>{exp.company}</strong></p>
                                <p>{exp.fromDate} - {exp.toDate}</p>
                            </div>
                            <p><em>{exp.position}</em></p>
                            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
                        </div>
                    ))
                ) : (
                    <p>No experience details provided</p>
                )}
            </div>
        </section>
    );
}

export default CVPreview;
