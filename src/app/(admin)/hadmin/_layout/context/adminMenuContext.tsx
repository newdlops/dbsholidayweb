import React, { useState, createContext } from 'react';
import { ChildContainerProps, MenuContextProps } from '../../../../../types/types';

export const AdminMenuContext = createContext({} as MenuContextProps);

export const AdminMenuProvider = ({ children }: ChildContainerProps) => {
    const [activeMenu, setActiveMenu] = useState('');

    const value = {
        activeMenu,
        setActiveMenu
    };

    return <AdminMenuContext.Provider value={value}>{children}</AdminMenuContext.Provider>;
};
