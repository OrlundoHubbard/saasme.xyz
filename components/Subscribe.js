import React, { useState } from "react";
import axios from "axios";
"use client"

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/subsribe', { email });
        } catch (error) {

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-10">
                <input type="text" placeholder="Enter Your Email" className=" w-1/3 border border-slate-200 h-12 px-6" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="rounded-[3px] bg-violet-800 px-6 py-3  text-white" type="submit">Get SaaS Trends</button>
            </div>
        </form>
    )
}

export default Subscribe;