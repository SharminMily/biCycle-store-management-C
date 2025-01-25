import { Layout, Menu, theme } from 'antd';

const { Header } = Layout;

const items = [
        {
          key: 'asdfgh',
          label: 'home'
        },
        {
          key: 'contact',
          label: 'contact'
        },
        {
          key: 'about',
          label: 'about'
        },        
]

const Navbar = () => {
    
    
  return (
    <Layout>
    <Header style={{ display: 'flex', alignItems: '' }}>
      <div className="text-4" style={{color: 'red'}}> LOgo </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
   
   
  </Layout>
);
};


export default Navbar