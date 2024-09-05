"use client"
import { store } from '@/redux/store';
import React from 'react';

const Providers = ({children}:{children: React.ReactNode}) => {
    return (
        <Providers store={store}>
            {children}
        </Providers>
    );
};

export default Providers;