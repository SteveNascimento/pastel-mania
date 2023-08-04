import './app.css';
import Logo from '../assets/logo.png';
import Pasteis from '../assets/pasteis.png';
import Linhas from '../assets/linhas.png';
import Order from '../assets/order.png';
import Delivery from '../assets/delivery.png';
import Courier from '../assets/courier.png';
import type { MenuProps } from 'antd';

import { WhatsAppOutlined } from '@ant-design/icons';

import { Menu, ConfigProvider, Col, Row, Typography, Grid, Drawer, Divider, Button } from 'antd';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function App() {
  const screens = useBreakpoint();

  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'about',
      label: 'Sobre',
    },
    {
      key: 'contact',
      label: 'Contato',
    },
  ];

  const MenuTab = () => (
    <Menu
      style={{
        flex: 'auto',
        maxWidth: '230px',
        backgroundColor: '#FFF9EA',
        borderBottom: 'none',
      }}
      mode='horizontal'
      defaultActiveFirst={true}
      items={items}
    />
  );

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FFCB45',
            fontFamily: 'Readex Pro',
          },
          components: {
            Menu: {
              fontFamily: 'Readex Pro',
              fontWeightStrong: 500,
            },
          },
        }}
      >
        <header
          style={{
            backgroundColor: '#FFF9EA',
            padding: screens.md ? '1rem 10rem' : '1rem 2rem',
            display: 'flex',
            justifyContent: screens.md ? 'space-between' : 'center',
            alignItems: 'center',
          }}
        >
          <img alt='logo' src={Logo} height={screens.md ? 70 : 80} />
          {screens.md ? (
            <MenuTab />
          ) : (
            <Drawer>
              <MenuTab />
            </Drawer>
          )}
        </header>
        <section>
          <Row
            style={{
              padding: screens.md ? '5rem 5rem' : '2rem 2rem',
              backgroundColor: '#FFF9EA',
            }}
            wrap={screens.md ? false : true}
            gutter={screens.md ? [0, 0] : [0, 50]}
            align={'middle'}
          >
            <Col flex={12}>
              <div style={{ maxWidth: '550px' }}>
                <Title>Do tamanho da sua fome!</Title>
                <Text>
                  Aqui você encontra os melhores pastéis da região, com uma massa crocante e
                  recheios deliciosos, feitos com ingredientes frescos e selecionados. Experimente!
                </Text>
              </div>
              {screens.md && (
                <img
                  src={Linhas}
                  style={{
                    position: 'absolute',
                    left: '0px',
                    top: '260px',
                  }}
                />
              )}
            </Col>
            <Col
              flex={12}
              style={{
                textAlign: 'center',
              }}
            >
              <img
                src={Pasteis}
                width={'100%'}
                style={{
                  maxWidth: screens.md ? '600px' : '400px',
                }}
                alt='Cesta de Pastéis'
              />
            </Col>
          </Row>
        </section>
        <section
          style={{
            backgroundColor: '#FFF9EA',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '350px',
              margin: '0 2rem',
            }}
          >
            <Title
              level={5}
              style={{
                color: '#FFCB45',
                margin: 0,
              }}
            >
              Como funciona
            </Title>
            <Text>
              A qualidade do produto é nossa prioridade e garantimos rapidez e segurança até que
              esteja em suas mãos.
            </Text>
          </div>
          <Button
            type='primary'
            href='https://wa.me/558594303633'
            icon={<WhatsAppOutlined />}
            style={{
              marginTop: '2rem',
            }}
          >
            Peça agora
          </Button>
          <Row
            style={{
              padding: screens.md ? '5rem 5rem' : '2rem 2rem',
              textAlign: 'center',
            }}
            wrap={screens.md ? false : true}
            gutter={[30, 50]}
            align={'top'}
            justify={'center'}
          >
            <Col
              flex={8}
              style={{
                maxWidth: '300px',
              }}
            >
              <img height={120} src={Order} />
              <Title level={4}>Faça seu pedido</Title>
              <Text>
                Escolha os seus pastéis favoritos e faça seu pedido online. É rápido e fácil!
              </Text>
            </Col>
            <Col
              style={{
                maxWidth: '300px',
              }}
              flex={8}
            >
              <img height={120} src={Delivery} />
              <Title level={4}>Receba em casa</Title>
              <Text>Receba seu pedido em casa, com rapidez e segurança!</Text>
            </Col>
            <Col
              style={{
                maxWidth: '300px',
              }}
              flex={8}
            >
              <img height={120} src={Courier} />
              <Title level={4}>Aproveite!</Title>
              <Text>
                Aproveite os melhores pastéis da região, com uma massa crocante e recheios
                deliciosos!
              </Text>
            </Col>
          </Row>
        </section>
        <footer
          style={{
            backgroundColor: '#FFF9EA',
          }}
        >
          <Row>
            <Divider />
            <Col
              style={{
                textAlign: 'center',
                padding: '2rem',
              }}
              flex={12}
            >
              <Text>© 2023 - Pastel Mania - Todos os direitos reservados</Text>
            </Col>
          </Row>
        </footer>
      </ConfigProvider>
    </div>
  );
}
