/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { AdminLayoutContext } from './context/adminLayoutContext';

const AppFooter = () => {
    const { layoutConfig } = useContext(AdminLayoutContext);

    return (
        <div className="layout-footer">
            <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">더블에스픽</span>
        </div>
    );
};

export default AppFooter;
