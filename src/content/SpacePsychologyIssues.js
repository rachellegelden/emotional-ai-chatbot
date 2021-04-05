import React, {useState} from 'react';
import Typist from 'react-typist';

const SpacePsychologyIssues = () => {
    const [typingDone, setTypingDone] = useState(false);
    return (
        <div>
            <Typist avgTypingDelay={30} onTypingDone={() => setTypingDone(true)}>
                <h1>Common Psychological Issues in Space Missions</h1>
            </Typist>

            {typingDone &&
                <div>
                    <p>
                        In past decades, the role of psychology in the U.S. space program has generally fallen on deaf
                        ears. This was largely motivated by the fact that it was easier for project managers and
                        engineers to cut costs by engineering the astronauts’ mental health out of the equation. For
                        astronauts, the absence of psychologists who could act in an advisory capacity meant one less
                        thing that could lead to them being disqualified from a mission (Harrison and Fiedler 24).
                    </p>
                    <p>
                        Today’s astronauts are very aware that psychological factors can affect safety, performance, and
                        quality of life in space (Harrison and Fiedler 25). The high-stress environment in which
                        astronauts work is dangerous, isolated, physically confined, and demands a high workload
                        (Vessey and Landon 540). These extreme conditions can have physical consequences including sleep
                        disturbances, heart palpitations, anxiety, mood swings, inconsistent motivation, and a decrease
                        in performance. Furthermore, these conditions can cause minor issues to escalate into
                        significant interpersonal conflicts between crew members. Researchers contend that problems
                        associated with crew interactions could be a significant limiting factor for long-duration space
                        missions (Kring and Kaminski 126).
                    </p>
                    <p>
                        While we are knowledgeable about the psychological factors for short-term, near-earth missions,
                        there is minimal concrete knowledge about the psychological effects of deep-space missions and
                        multigenerational interstellar missions. Some expected psychological issues in interstellar
                        missions include:
                    </p>
                    <div>
                        <ul>
                            <li>Feelings of isolation</li>
                            <li>Earth-out-of-view phenomenon - viewing Earth as an insignificant dot in the heavens and
                                the realization that one’s existence is pointless in the grand scheme of the universe</li>
                            <li>Lack of novelty and social contacts in deep space</li>
                            <li>Dealing with monotony and how to use leisure time through meaningful activities and
                                habitability design</li>
                            <li>Dealing with mentally or medically ill people in a confined space</li>
                            <li>Unknown physical and psychological effects of radiation due to traveling at high speeds</li>
                            <li>Feelings of homesickness, especially people in the first generation of passengers who directly remember the Earth (Kanas 125)</li>
                        </ul>
                    </div>
                    <p>Works Cited</p>
                    <p>
                        Harrison, Albert, and Edna Fiedler. “Behavioral Health.” <i>Psychology of Space Exploration: A Contemporary
                        Research in Historical Perspective</i>, edited by Douglas A. Vakoch, National Aeronautics and Space
                        Administration, Office of Communications, History Program Office, 2011, pp 24-25.
                    </p>
                    <p>
                        Vessey, William, and Lauren Landon. “Team Performance in Extreme Environments.” <i>The Wiley-Blackwell
                        Handbook of the Psychology of Team Working and Collaborative Processes.</i> John Wiley & Sons, 2017,
                        oi:10.1002/9781118909997.
                    </p>
                    <p>
                        Kring, Jason, and Megan Kaminski. “Gender Composition and Crew Cohesion During Long-Duration Space
                        Missions.” <i>Psychology of Space Exploration: A Contemporary Research in Historical Perspective</i>
                        , edited by Douglas A. Vakoch, National Aeronautics and Space Administration, Office of
                        Communications, History Program Office, 2011, pp 126.
                    </p>
                    <p>
                        Kanas, Nick. “Challenges of Manned Interstellar Travel.” <i>The Protos Mandate</i>, Springer International
                        Publishing, 2014.
                    </p>
                </div>
            }
        </div>
    )
}

export default SpacePsychologyIssues;
