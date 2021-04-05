import React, {useState} from 'react';
import Typist from 'react-typist';

const EmotionalAiIssues = () => {
    const [typingDone, setTypingDone] = useState(false);
    return (
        <div>
            <Typist avgTypingDelay={30} onTypingDone={() => setTypingDone(true)}>
                <h1>
                    Current issues with emotionally intelligent AI systems? How does bias appear in them?
                </h1>
            </Typist>
            {typingDone &&
                <div>
                    <p>
                        A review by Barrett et al. of ongoing research in using AI to identify emotions from facial
                        movements found that the current ways that an AI commonly infer emotions from facial expressions
                        are rudimentary and not very reliable (1). When trying to identify an emotion, AIs are trained
                        to map specific expressions to an emotional category. However, Barrett et al. show that a
                        specific facial movement is not a fingerprint for an emotion, instead, there exists a
                        many-to-many relationship between facial movements and emotional states (46). While facial
                        movements do express emotional states, they are considerably more variable and context-dependent
                        than current research takes into account (46). An example of this is how different facial
                        expressions can have different meanings and significance in different cultures. The facial
                        movements that we think correspond to emotional states can be best thought of as stereotypes for
                        emotional expressions in Western culture. These stereotypes fail to consider the diverse ways
                        that people move their faces to express their emotions in everyday life (Barrett et al. 46).
                    </p>
                    <p>
                        One of the most prominent issues with emotional AI is that it is very prone to bias. Xu et al.
                        attribute this to the absence of any datasets of images and videos that have an even
                        distribution of the human population in terms of ethnicity, gender, and age. They report that
                        almost most datasets contain primarily white people (13). In a study by Lauren Rhue, she found
                        that facial recognition software interprets emotions differently based on race. Rhue found that
                        on average, AIs show a consistent bias in assigning black faces a higher negative emotion, and
                        interpret ambiguous facial expressions for black people more negatively. In a study by Domnich
                        and Anbarjafari, they found that AI algorithms used for emotion recognition were biased with
                        respect to gender. AIs were generally better at classifying the emotion of surprise in males and
                        classifying the emotions upset and sad in women (10). Howard et al. found that emotion
                        recognition in AIs was biased against certain emotions, predominantly the emotion of fear. AIs
                        often confuse fear with surprise and this mistake is most predominantly made in children (4).
                        Through the works of Xu et al., Rhue, Domnich and Anbarjafari, and Howard et al. it is apparent
                        that the bias in emotional AI is multifaceted and can stem from many different parts of a
                        person’s identity (gender, race, age). The common denominator between all of these different
                        types of bias is that the source of these biases is the training data that is used to train the
                        AI.
                    </p>
                    <p>
                        Works Cited
                    </p>
                    <p>
                        Domnich, Artem, and Gholamreza Anbarjafari. "Responsible AI: Gender Bias Assessment in Emotion
                        Recognition.", 2021.
                    </p>
                    <p>
                        Barrett, Lisa Feldman, et al. “Emotional Expressions Reconsidered: Challenges to Inferring Emotion From
                        Human Facial Movements.” Psychological Science in the Public Interest, vol. 20, no. 1, July 2019, pp.
                        1–68, doi:10.1177/1529100619832930.
                    </p>
                    <p>
                        A. Howard, C. Zhang and E. Horvitz, "Addressing bias in machine learning algorithms: A pilot
                        study on emotion recognition for intelligent systems," <i>2017 IEEE Workshop on Advanced Robotics
                        and its Social Impacts (ARSO)</i>, Austin, TX, USA, 2017, pp. 1-7, doi: 10.1109/ARSO.2017.8025197.

                    </p>
                    <p>
                        Rhue, Lauren. “Racial Influence on Automated Perceptions of Emotions.” <i>SSRN</i>, December 2018,
                        https://dx.doi.org/10.2139/ssrn.3281765.
                    </p>
                </div>
            }
        </div>
    );
}

export default EmotionalAiIssues;
