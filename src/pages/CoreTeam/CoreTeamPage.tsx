import React from 'react';
import './CoreTeamPage.css';
import CoreTeam from '@/components/CoreTeam/CoreTeam';

const CoreTeamPage: React.FC = () => {
    return (
        <div className='coreteam-page' id='coreteam'>
            <CoreTeam />
        </div>
    );
};

export default CoreTeamPage;