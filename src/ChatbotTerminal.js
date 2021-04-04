import React from 'react';
import Terminal from 'terminal-in-react';

const ChatbotTerminal = props => {
    const { onContentChange } = props;

    const showMsgFn = () => 'Hello World'
    return (
            <Terminal
                color='green'
                prompt={'red'}
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                    space_psych: () => onContentChange('SPACE_PSYCHOLOGY_ISSUES'),
                    emotional_ai: () => onContentChange('EMOTIONAL_AI'),
                    emotional_ai_issues: () => onContentChange('EMOTIONAL_AI_ISSUES'),
                    ai_deep_space_issues: () => onContentChange('EMOTIONAL_AI_IN_DEEP_SPACE_ISSUES'),
                    ai_deep_space_research: () => onContentChange('AI_DEEP_SPACE_RESEARCH')
                }}
                descriptions={{
                    space_psych: 'Common Psychological Issues in Space Missions',
                    emotional_ai: 'What is emotional AI and how does it work?',
                    emotional_ai_issues: 'Current issues with emotionally intelligent AI systems',
                    ai_deep_space_issues: 'Emotional AI in deep-space travel and potential issues',
                    ai_deep_space_research: 'Current on-going work in emotionally intelligent AIs for deep space exploration'
                }}
                msg={`Hello! I'm Scotty the chatbot, I am here to help you learn about using emotional AI for ` +
                `deep-space travel. You can write anything here, type help and hit enter to see your options`}
                showActions={false}
                startState={'maximised'}
            />
    );
}

export default ChatbotTerminal;
