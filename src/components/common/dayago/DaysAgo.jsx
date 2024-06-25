import React from 'react';
import {format, formatDistanceToNow, parseISO} from 'date-fns';

const DaysAgo = ({ createdAt }) => {
    const date = parseISO(createdAt);
    const daysAgo = formatDistanceToNow(date, { addSuffix: true });
    return (
        <>
            {daysAgo}
        </>
    );
};

export const FormatedDate = ({ createdAt }) => {
    const formattedDate = format(new Date(createdAt), 'dd MMMM yyyy');
    return (
        <>
            {formattedDate}
        </>
    );
};

export default DaysAgo;