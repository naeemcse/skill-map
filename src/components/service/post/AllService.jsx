"use client"
import React, { useState, useEffect } from 'react';
import PostSearchResult from "@/components/service/post/PostSearchResult";

const MyComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/servicePost/allService');
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

export default MyComponent;
