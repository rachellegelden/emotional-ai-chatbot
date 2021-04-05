import React, {useState} from 'react';
import Typist from 'react-typist';

const AiDeepSpaceIssues = () => {
    const [typingDone, setTypingDone] = useState(false);
    return (
        <div>
            <Typist avgTypingDelay={30} onTypingDone={() => setTypingDone(true)}>
                <h1>
                    How could emotionally intelligent AI be used for deep-space travel? Why do the issues above need to be
                    addressed before using empathetic AI in space?
                </h1>
            </Typist>
            {typingDone &&
                <div>
                    <p>
                        Presently, astronauts on the International Space Station (ISS) regularly talk to psychologists
                        on Earth. NASA ensures that there are doctors available at a moment’s notice to address any
                        serious signs of distress. However, these interactions are only possible because the astronauts
                        are in low Earth orbit and can easily communicate with mission control. In deep space, there are
                        significantly longer lags in communication between the space station and earth that can stretch
                        for hours. By having an emotionally intelligent AI onboard, the needs of the crew could be met
                        in real-time if a crew member’s mental health is at risk. Furthermore, an emotional AI could act
                        as a companion and provide empathetic support to astronauts who are on long-duration space
                        missions (Patel).
                    </p>
                    <p>
                        The reliability of emotional AI needs to be significantly higher before it can be used for space
                        travel. Space travel is an extremely dangerous environment where few mistakes can be made;
                        support tools such as emotional AI must accurately identify and respond to emotions and
                        consistently be helpful to astronauts.
                    </p>
                    <p>
                        However, much more importantly, the bias in emotion recognition needs to be addressed as this
                        could have serious ramifications in space travel. If emotional AI is not successful at
                        accurately identifying and responding to the emotions of all crew members (regardless of race,
                        gender, and age), the needs of those crew members could be overlooked and not be effectively
                        met. These crew members whose identities fall outside of the dominant group represented in the
                        dataset that was used to train the AI would be at a significantly higher risk for mental health
                        issues. This could potentially affect the likelihood that they will be selected for a
                        long-duration space mission and how successful they are in these space missions. When looking at
                        the consequences of emotion recognition bias in a long-term sense, if certain types of people do
                        not fare well during these long-duration space missions, this could affect how successfully we
                        colonize other planets with a population that is representative of the population on Earth.
                    </p>
                    <p>
                        Works Cited
                    </p>
                    <p>
                        Patel, Neev. “An emotionally intelligent AI could support astronauts on a trip to Mars.” MIT Technology
                        Review, 14 Jan. 2020, https://www.technologyreview.com/2020/01/14/64990/an-emotionally-intelligent-ai-could-support-astronauts-on-a-trip-to-mars/
                    </p>
                </div>
            }
        </div>
    );
}

export default AiDeepSpaceIssues;
