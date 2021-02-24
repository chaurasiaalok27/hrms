import React from 'react';
import authenticate from '../../hoc/authentication';
function Recruitment() {
    return (
        <div>
            This is recruitment
        </div>
    )
}

export default authenticate(Recruitment);