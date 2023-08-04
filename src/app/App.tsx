import './app.css';
import type { MenuProps } from 'antd';

import { Menu, ConfigProvider } from 'antd';

export default function App() {
  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'about',
      label: 'About',
    },
    {
      key: 'contact',
      label: 'Contact',
    },
  ];

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <header
          style={{
            backgroundColor: '#FFF9EA',
            padding: '0 5rem',
            height: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <img alt='logo' src='https://via.placeholder.com/50' />
          {/* Menu */}
          <Menu mode='horizontal' items={items} />
        </header>
      </ConfigProvider>
    </div>
  );
}
