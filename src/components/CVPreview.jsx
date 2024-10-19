function CVPreview({ userData }) {
    const { name, email, phone, education, experience } = userData;

    return (
        <section className="cv-preview">
            <h2>CV</h2>
            
            <div>
                <h3>General Information</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
            </div>

            <div>
                <h3>Educational Experience</h3>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index}>
                            <p><strong>School Name:</strong> {edu.school}</p>
                            <p><strong>Title of Study:</strong> {edu.title}</p>
                            <p><strong>Date of Study:</strong> {edu.date}</p>
                        </div>
                    ))
                ) : (
                    <p>No education details provided</p>
                )}
            </div>

            <div>
                <h3>Practical Experience</h3>
                {experience.length > 0 ? (
                    experience.map((exp, index) => (
                        <div key={index}>
                            <p><strong>Company Name:</strong> {exp.company}</p>
                            <p><strong>Position Title:</strong> {exp.position}</p>
                            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
                            <p><strong>Date From:</strong> {exp.fromDate}</p>
                            <p><strong>Date Until:</strong> {exp.toDate}</p>
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
