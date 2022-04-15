import './App.css';

export const ChatRender = (chat_id) => {
    const messages = [];
    for(let i = 0; i < 10; i++) {
        messages.push(
            <>
                <div className='message-from'>
                    chat is here
                </div>
                <div className='message-to'>
                    chat is here
                </div>
            </>
        );
    }

    return (
        <div id='messenger-div'>
            {messages}
        </div>
    );
}