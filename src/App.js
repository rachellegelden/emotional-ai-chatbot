import React, {useState} from 'react';
import ChatbotTerminal from "./ChatbotTerminal";
import SpacePsychologyIssues from "./content/SpacePsychologyIssues";
import EmotionalAI from "./content/EmotionalAI";
import EmotionalAiIssues from "./content/EmotionalAiIssues";
import AiDeepSpaceIssues from "./content/AiDeepSpaceIssues";
import AiDeepSpaceResearch from "./content/AiDeepSpaceResearch";

const App = () => {

    const [content, setContent] = useState('');

    const displayContent = state => {
        switch (state) {
            case 'SPACE_PSYCHOLOGY_ISSUES':
                return <SpacePsychologyIssues/>;
            case 'EMOTIONAL_AI':
                return <EmotionalAI/>
            case 'EMOTIONAL_AI_ISSUES':
                return <EmotionalAiIssues/>
            case 'EMOTIONAL_AI_IN_DEEP_SPACE_ISSUES':
                return <AiDeepSpaceIssues/>
            case 'AI_DEEP_SPACE_RESEARCH':
                return <AiDeepSpaceResearch/>
            default:
                return <div>Please use Scotty to learn more!</div>;
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'black'
            }}
        >
            <div
                style={{
                    height: "100vh",
                    width: "33%",
                }}
            >
                <ChatbotTerminal onContentChange={setContent}/>
            </div>
                <div
                    style={{
                        paddingRight: '15px',
                        paddingLeft: '15px',
                        margin: '30px',
                        width: '66%',
                        color: 'green',
                        fontFamily: 'courier',
                        borderWith: '3px',
                        borderStyle: 'solid',
                        borderColor: 'green'
                    }}
                >
                    {displayContent(content)}
                </div>
        </div>
    )
}

export default App;
