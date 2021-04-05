import React, {useState} from 'react';
import Typist from 'react-typist';

const EmotionalAI = () => {
    const [typingDone, setTypingDone] = useState(false);
    return (
        <div>
            <Typist avgTypingDelay={30} onTypingDone={() => setTypingDone(true)}>
                <h1>
                    What is emotional AI and how does it work?
                </h1>
            </Typist>
            {typingDone &&
                <div>
                    <p>
                        Emotional artificial intelligence also referred to as an empathetic AI, is an AI that has the
                        ability to have human emotions and feelings or at least behave like it has human emotions and
                        feelings. For an AI to have empathetic intelligence, it must have interpersonal, social, and
                        behavioural skills. These skills allow an AI more sensitive to human emotions and allow it to
                        communicate with humans in a friendly manner and deal with them effectively (Huang and Rust 159).

                    </p>
                    <p>
                        The most recent research in emotional AI focuses on automatic emotion recognition, emotion
                        generation, and emotion augmentation. Using a combination of a person’s: tone, speech patterns,
                        and facial expressions, an AI can use this data to infer a person’s emotions and state of mind.
                        The AI then uses the inferred emotions to determine which emotion should be generated in
                        response to facilitate a productive conversation. Lastly, emotion augmentation refers to the
                        AI’s ability to include emotion in other processes such as planning, reasoning, or more general
                        goal achievement. Emotion augmentation has only been attempted on small scales and is
                        significantly less researched relative to emotion recognition and generation (Schuller and
                        Schuller 41).
                    </p>
                    <p>
                        Works Cited
                    </p>
                    <p>
                        Huang, Ming-Hui, and Roland Rust. “Artificial Intelligence in Service.” Journal of Service Research,
                        vol. 21, no. 2, May 2018, pp. 155–172, doi:10.1177/1094670517752459.
                    </p>
                    <p>
                        Schuller, Dagmar and B. W. Schuller. “The Age of Artificial Emotional Intelligence.” Computer, vol. 51,
                        no. 9, September 2018, pp 38-46, doi:0.1109/MC.2018.3620963.
                    </p>
                </div>
            }

        </div>
    );
}

export default EmotionalAI;
