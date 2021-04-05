import React from 'react';
import Terminal from 'terminal-in-react';

const ChatbotTerminal = props => {
    const { onContentChange } = props;

    return (
            <Terminal
                color='green'
                prompt={'red'}
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                    sp: () => onContentChange('SPACE_PSYCHOLOGY_ISSUES'),
                    ea: () => onContentChange('EMOTIONAL_AI'),
                    eai: () => onContentChange('EMOTIONAL_AI_ISSUES'),
                    adsi: () => onContentChange('EMOTIONAL_AI_IN_DEEP_SPACE_ISSUES'),
                    adsr: () => onContentChange('AI_DEEP_SPACE_RESEARCH')
                }}
                descriptions={{
                    sp: 'Common Psychological Issues in Space Missions',
                    ea: 'What is emotional AI and how does it work?',
                    eai: 'Current issues with emotionally intelligent AI systems',
                    adsi: 'Emotional AI in deep-space travel and potential issues',
                    adsr: 'Current work and research in emotionally intelligent AIs for deep space exploration'
                }}
                msg={`Hello! I'm Scotty the chatbot, I am here to help you learn about using emotional AI for ` +
                `deep-space travel. You can write anything here, type help and hit enter to see your options`}
                showActions={false}
                startState={'maximised'}
            />
    );
}

export default ChatbotTerminal;
