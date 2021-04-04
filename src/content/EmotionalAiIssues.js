import React from 'react';

const EmotionalAiIssues = props => {
    return (
        <div>
            <h1>
                Current issues with emotionally intelligent AI systems? How does bias appear in them?
            </h1>
            <p>
                A review by Barrett et al. of ongoing research in using AI to identify emotions from facial movements,
                they found that the current ways that AI commonly read facial expressions are rudimentary and not very
                reliable (1). When trying to identify an emotion, AIs are trained to map certain expressions to certain
                emotional categories. However, Barrett et al. show that a specific facial movement is not a fingerprint
                for an emotion, instead there exists a many-to-many relationship between facial movements and emotional
                states (46). While facial movements do express emotional states, they are considerably variable and
                context dependent than current research takes into account (46). An example of this is how different
                facial expressions can have different meanings and significance in different cultures. The facial
                movements that we think correspond to emotional states can be best thought of as Western gestures or
                stereotypes. These stereotypes fail to consider the diverse ways that people’s faces move to express
                their emotions in everyday life (Barrett et al. 46).
            </p>
            <p>
                One of the most prominent issues with emotionally intelligent AI is that it is very prone to bias.
                Xu et al. attributes this to the absence of any datasets of images and videos that have an even
                distribution of the human population in terms of ethnicity, gender and age. They report that almost all
                datasets contain primarily white people (13). In a study by Lauren Rhue, she found that facial
                recognition software interprets emotions differently based on race. Rhue found that on average, AIs show
                a consistent bias in assigning black faces a higher negative emotion, and interpret ambiguous facial
                expressions for black people more negatively. Through the works of Xu et al. and Rhue, it is apparent
                that emotionally intelligent AI is particularly prone to training data bias.
            </p>
            <p>
                Works Cited
            </p>
            <p>
                Barrett, Lisa Feldman, et al. “Emotional Expressions Reconsidered: Challenges to Inferring Emotion From
                Human Facial Movements.” Psychological Science in the Public Interest, vol. 20, no. 1, July 2019, pp.
                1–68, doi:10.1177/1529100619832930.
            </p>
            <p>
                Rhue, Lauren. “Racial Influence on Automated Perceptions of Emotions.” SSRN, December 2018,
                https://dx.doi.org/10.2139/ssrn.3281765.

            </p>
        </div>
    );
}

export default EmotionalAiIssues;
