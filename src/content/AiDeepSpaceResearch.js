import React, {useState} from 'react';
import Typist from 'react-typist';

const AiDeepSpaceResearch = () => {
    const [typingDone, setTypingDone] = useState(false);
    return (
        <div>
            <Typist avgTypingDelay={30} onTypingDone={() => setTypingDone(true)}>
                <h1>
                    Current work and research in emotionally intelligent AIs for deep-space exploration
                </h1>
            </Typist>
            {typingDone &&
                <div>
                    <p>
                        While AIs are in use by NASA and on the ISS, all of the current AIs lack emotional intelligence
                        (Patel). CIMON (Crew Interactive MObile CompanioN) is an eleven-pound robot on the ISS that can
                        converse with astronauts and help them with their tasks. Developed through a partnership between
                        German space agency DLR, Airbus, and IBM, CIMON is approximately the size of a medicine ball and
                        can independently travel around the European Columbus Research Module of the ISS. Its original
                        purpose was to act as an assistant for astronauts by helping them with their experiments and
                        other work for their missions. Looking forward, IBM project lead Matthias Biniok says that they
                        plan to incorporate emotional intelligence in CIMON in order to make it a real astronaut
                        companion and a more effective assistant (CIMON brings AI to the International Space Station).
                        CIMON-2, an updated version of CIMON was sent to the ISS in December of 2019 (CIMON-2 makes its
                        successful debut on the ISS).
                    </p>
                    <p>
                        Another AI that is under development with the aim of helping astronauts with space travel is
                        Henry the Helper. Henry the Helper is an AI that is being developed by NASA’s Jet Propulsion
                        Lab, partnered with Akin, an Australian tech firm. Henry is a knee-high rover that is being
                        designed to help build spacecraft. The CEO of Akin, Liesl Yearsley, says that in the future they
                        would like to advance Henry’s role to include advanced problem solving and emotional
                        intelligence to support humans’ wellbeing (Australia Department of Industry, Science, Energy and
                        Resources).
                    </p>
                    <p>
                        Works Cited
                    </p>
                    <p>
                        “CIMON brings AI to the International Space Station.” IBM, December 2020,
                        https://www.ibm.com/thought-leadership/innovation-explanations/cimon-ai-in-space. Accessed 1 April 2021.
                    </p>
                    <p>
                        “CIMON-2 makes its successful debut on the ISS.” Airbus, 15 April 2020,
                        https://www.airbus.com/newsroom/press-releases/en/2020/04/cimon2-makes-its-successful-debut-on-the-iss.html.
                        Accessed 1 April 2021.
                    </p>
                    <p>
                        Australia, Department of Industry, Science, Energy and Resources. AI crew to support astronauts in
                        space. Australian Government, 16 November 2020, https://www.industry.gov.au/news/ai-crew-to-support-astronauts-in-space.
                        Accessed 1 April 2021.
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

export default AiDeepSpaceResearch;
