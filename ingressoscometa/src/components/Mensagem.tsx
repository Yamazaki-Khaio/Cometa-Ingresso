import React from 'react';

function Message(props:{mensagem?: string, visibilidade?: boolean} ) {
    if (visibilidade == true){
        return (
            <div>
            mensagem
            </div>
        );
    }
}

export default Message;