/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { AdminLayoutContext } from './context/adminLayoutContext';
import { AdminMenuProvider } from './context/adminMenuContext';
import Link from 'next/link';
import { AppMenuItem } from '../../../../types/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(AdminLayoutContext);

    const model: AppMenuItem[] = [
        {
            label: '상품',
            items: [
                { label: '상품', icon: 'pi pi-fw pi-gift', to: '/'}
            ]
        },
        {
            label: '주문',
            items: [
                { label: '주문', icon: 'pi pi-fw pi-cart-arrow-down', to: '/'}
            ]
        },
        {
            label: '배송',
            items: [
                { label: '배송', icon: 'pi pi-fw pi-box', to: '/'}
            ]
        },
    ];

    return (
        <AdminMenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </AdminMenuProvider>
    );
};

export default AppMenu;
