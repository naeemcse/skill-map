"use client"
import React, {useEffect, useState} from 'react';
import PostSearchResult from "@/components/service/post/PostSearchResult";

const MyServices = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/servicePost/manage');
                if (response.ok) {
                    const { data } = await response.json();
                    setData(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <PostSearchResult service={data} />
        </div>
    );
};

export default MyServices;