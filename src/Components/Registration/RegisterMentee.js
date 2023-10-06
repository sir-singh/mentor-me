import React, {useState} from "react";
import "./RegisterMentee.css"; // Import your CSS file

function RegisterMentee({onRegistration}) {
    const skills = [
        {
            skillId: 8, skillLabel: 'Finance'
        },
        {
            skillId: 10, skillLabel: 'C'
        },
        {
            skillId: 11, skillLabel: 'Oracle'
        },
        {
            skillId: 12, skillLabel: 'VB'
        },
        {
            skillId: 13, skillLabel: 'HTML'
        },
        {
            skillId: 14, skillLabel: 'Accounting'
        },
        {
            skillId: 18, skillLabel: 'Word'
        },
        {
            skillId: 19, skillLabel: 'Excel'
        },
        {
            skillId: 20, skillLabel: 'PowerPoint'
        },
        {
            skillId: 29, skillLabel: 'MS Office'
        },
        {
            skillId: 62, skillLabel: 'Internet'
        },
        {
            skillId: 67, skillLabel: 'Windows XP'
        },
        {
            skillId: 74, skillLabel: 'C++'
        },
        {
            skillId: 78, skillLabel: 'Analytical'
        },
        {
            skillId: 82, skillLabel: 'Project Management'
        },
        {
            skillId: 90, skillLabel: 'Computer'
        },
        {
            skillId: 97, skillLabel: 'Javascript'
        },
        {
            skillId: 129, skillLabel: 'Communication Skills'
        },
        {
            skillId: 133, skillLabel: 'Java'
        },
        {
            skillId: 134, skillLabel: '.NET'
        },
        {
            skillId: 141, skillLabel: 'Analysis'
        },
        {
            skillId: 173, skillLabel: 'MS Project'
        },
        {
            skillId: 196, skillLabel: 'Microsoft Windows'
        },
        {
            skillId: 263, skillLabel: 'Management'
        },
        {
            skillId: 276, skillLabel: 'Marketing'
        },
        {
            skillId: 282, skillLabel: 'Presentation Skills'
        },
        {
            skillId: 328, skillLabel: 'ASP.NET'
        },
        {
            skillId: 468, skillLabel: 'Corel Draw'
        },
        {
            skillId: 504, skillLabel: 'Dreamweaver'
        },
        {
            skillId: 605, skillLabel: 'Networking'
        },
        {
            skillId: 641, skillLabel: 'SQL'
        },
        {
            skillId: 643, skillLabel: 'Time Management'
        },
        {
            skillId: 645, skillLabel: 'Team Management'
        },
        {
            skillId: 667, skillLabel: 'Planning'
        },
        {
            skillId: 688, skillLabel: 'Illustrator'
        },
        {
            skillId: 692, skillLabel: 'Visual Basic'
        },
        {
            skillId: 752, skillLabel: 'Photoshop'
        },
        {
            skillId: 766, skillLabel: 'AutoCAD'
        },
        {
            skillId: 790, skillLabel: 'MS Access'
        },
        {
            skillId: 998, skillLabel: 'Linux'
        },
        {
            skillId: 1000, skillLabel: 'CSS'
        },
        {
            skillId: 1047, skillLabel: 'XML'
        },
        {
            skillId: 1098, skillLabel: 'UNIX'
        },
        {
            skillId: 1266, skillLabel: 'Market Research'
        },
        {
            skillId: 1308, skillLabel: 'C#'
        },
        {
            skillId: 1311, skillLabel: 'DBMS'
        },
        {
            skillId: 1419, skillLabel: 'Analytical Skills'
        },
        {
            skillId: 1514, skillLabel: 'Cobol'
        },
        {
            skillId: 1682, skillLabel: 'Oracle 10G'
        },
        {
            skillId: 1749, skillLabel: 'SQL Server'
        },
        {
            skillId: 1871, skillLabel: 'Team Building'
        },
        {
            skillId: 2041, skillLabel: 'PHP'
        },
        {
            skillId: 2042, skillLabel: 'ASP'
        },
        {
            skillId: 2165, skillLabel: 'J2EE'
        },
        {
            skillId: 2185, skillLabel: 'PLSQL'
        },
        {
            skillId: 2449, skillLabel: 'Installation'
        },
        {
            skillId: 2537, skillLabel: 'VB Script'
        },
        {
            skillId: 2542, skillLabel: 'Apache Tomcat'
        },
        {
            skillId: 2543, skillLabel: 'MySQL'
        },
        {
            skillId: 2558, skillLabel: 'Software Testing'
        },
        {
            skillId: 2598, skillLabel: 'Manual Testing'
        },
        {
            skillId: 2775, skillLabel: 'Negotiation'
        },
        {
            skillId: 2871, skillLabel: 'JSP'
        },
        {
            skillId: 2872, skillLabel: 'Spring'
        },
        {
            skillId: 3024, skillLabel: 'Commissioning'
        },
        {
            skillId: 3048, skillLabel: 'Ajax'
        },
        {
            skillId: 3050, skillLabel: 'Eclipse'
        },
        {
            skillId: 3064, skillLabel: 'JDBC'
        },
        {
            skillId: 3067, skillLabel: 'WCF'
        },
        {
            skillId: 3070, skillLabel: 'Automation Testing'
        },
        {
            skillId: 3071, skillLabel: 'Servlets'
        },
        {
            skillId: 3222, skillLabel: 'QTP'
        },
        {
            skillId: 3452, skillLabel: 'Project Planning'
        },
        {
            skillId: 4201, skillLabel: 'Informatica'
        },
        {
            skillId: 4213, skillLabel: 'UNIX Shell Scripting'
        },
        {
            skillId: 4215, skillLabel: 'Cics'
        },
        {
            skillId: 4216, skillLabel: 'JCL'
        },
        {
            skillId: 4420, skillLabel: 'Oracle SQL'
        },
        {
            skillId: 5070, skillLabel: 'Design'
        },
        {
            skillId: 6035, skillLabel: 'jQuery'
        },
        {
            skillId: 6399, skillLabel: 'Shell Scripting'
        },
        {
            skillId: 7312, skillLabel: 'Spring MVC'
        },
        {
            skillId: 7563, skillLabel: 'Project Coordination'
        },
        {
            skillId: 7698, skillLabel: 'TFS'
        },
        {
            skillId: 8010, skillLabel: 'Routing'
        },
        {
            skillId: 8077, skillLabel: 'MVC'
        },
        {
            skillId: 8128, skillLabel: 'Functional Testing'
        },
        {
            skillId: 8146, skillLabel: 'HP Quality Center'
        },
        {
            skillId: 8156, skillLabel: 'Web Services'
        },
        {
            skillId: 8473, skillLabel: 'Project Execution'
        },
        {
            skillId: 10043, skillLabel: 'Assembly'
        },
        {
            skillId: 11561, skillLabel: 'JSON'
        },
        {
            skillId: 11707, skillLabel: 'Maven'
        },
        {
            skillId: 14707, skillLabel: 'Welding'
        },
        {
            skillId: 23839, skillLabel: 'Regression Testing'
        },
        {
            skillId: 24729, skillLabel: 'Struts'
        },
        {
            skillId: 25688, skillLabel: 'Android'
        },
        {
            skillId: 26637, skillLabel: 'JIRA'
        },
        {
            skillId: 26836, skillLabel: 'Selenium'
        },
        {
            skillId: 45043, skillLabel: 'Hibernate'
        }
    ];
    const [selectedSkillId, setSelectedSkillId] = useState('');
    const [userId, setUserId] = useState("");

    const handleSubmit = () => {
        if (userId && selectedSkillId) {
            onRegistration && onRegistration({userId: userId, skill: selectedSkillId});
        } else {
            alert("Please enter a valid User ID and select a Preferred Skill.");
        }
    };

    return (
        <div className="register-mentee-container"> {/* Apply a CSS class for styling */}
            <h2 className="maintext">Search Mentors</h2>
            <div className="input-container"> {/* Apply CSS class for input styling */}
                <label>User ID:</label>
                <br/>
                <input
                    type="text" placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </div>
            <div className="input-container"> {/* Apply CSS class for input styling */}
                <label className="skill">Mentorship Skill:</label>
                <select
                    value={selectedSkillId}
                    onChange={(e) => setSelectedSkillId(e.target.value)}
                >
                    <option value=""><p>Select a skill</p></option>
                    {skills.map((skill) => (
                        <option key={skill.skillId} value={skill.skillId}>
                            {skill.skillLabel}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSubmit}>Search Mentors</button>
        </div>
    );
}

export default RegisterMentee;
