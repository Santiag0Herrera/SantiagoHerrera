import React, { useEffect, useState } from 'react'
import {
    ExperimentOutlined,
    UserOutlined,
    FolderOpenOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    BgColorsOutlined,
} from '@ant-design/icons';
import { Layout, Menu, FloatButton } from 'antd';
import { useGlobalContext } from '../../Context/context';
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout;

const SideBar = () => {
    const { state, dispatch } = useGlobalContext();
    const navigate = useNavigate();

    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                dispatch({ type: 'CHANGE_TAB', payload: '0' })
                break;
            case '/about':
                dispatch({ type: 'CHANGE_TAB', payload: '1' })
                break;
            case '/experience':
                dispatch({ type: 'CHANGE_TAB', payload: '2' })
                break;
            case '/projects':
                dispatch({ type: 'CHANGE_TAB', payload: '3' })
                break;
            case '/contact':
                dispatch({ type: 'CHANGE_TAB', payload: '4' })
                break;
        }
    }, [])

    useEffect(()=>{
        window.screen.width > 1000 ? setCollapse(false) : setCollapse(true)
    }, [window.screen.width])

    const menuItemStyle = (key) => {
        return {
            height: '70px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: state.activeTab === key ? (state.theme === 'light' ? '#1e2125' : '#e9dfce') : (state.theme === 'light' ? '#e9dfce' : '#1e2125'),
        }
    }
    const menuStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: state.theme === 'light' ? '#1e2125' : '#e9dfce',
        paddingTop: '3%',
        position: 'fixed',
        width: '15%',
    }
    const menuItems = [
        {
            key: '0',
            icon: <HomeOutlined />,
            label: 'Home',
            style: menuItemStyle('0'),
            path: '/',
            onClick: () => navigate('/')
        },
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'About Me',
            style: menuItemStyle('1'),
            path: '/about',
            onClick: () => navigate('/about')
        },
        {
            key: '2',
            icon: <FolderOpenOutlined />,
            label: 'Experience',
            style: menuItemStyle('2'),
            path: '/experience',
            onClick: () => navigate('/experience')
        },
        {
            key: '3',
            icon: <ExperimentOutlined />,
            label: 'Projects',
            style: menuItemStyle('3'),
            path: '/projects',
            onClick: () => navigate('/projects')
        },
        {
            key: '4',
            icon: <InfoCircleOutlined />,
            label: 'Contact Info',
            style: menuItemStyle('4'),
            path: '/contact',
            onClick: () => navigate('/contact')
        }
    ]

    return (
        <Sider trigger={null} collapsible collapsed={collapse} style={{ backgroundColor: 'transparent'   }}>
            <Menu
                defaultSelectedKeys={[menuItems.find(item => item.path === window.location.pathname).key]}
                theme={state.theme}
                mode="inline"
                style={menuStyle}
                items={menuItems}
                onSelect={item => dispatch({ type: 'CHANGE_TAB', payload: item.key })}
            />
            <FloatButton
                icon={<BgColorsOutlined style={{ color: state.theme === 'light' ? '#e9dfce' : '#1e2125' }} />}
                onClick={() => dispatch({ type: 'THEME' })}
                type='primary'
                style={{ height: '50px', width: '50px' }}
            />
        </Sider>
    )
}

export default SideBar