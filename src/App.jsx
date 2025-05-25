import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from  './pages/NotFound';
import Privacy from   './pages/Privacy';
import Terms from     './pages/Terms';
import Aboutus from   './pages/Aboutus';
import Name from './pages/name';





import ProtectedRoute from './components/ProtectedRoute';




import Docs from './pages/Docs';




import DashboardC from './pages/DashboardC';


import PricingBasic from './pages/PricingBasic';
import PricingEnterprice from './pages/PricingEnterprice';
import PricingPro from './pages/PricingPro';









function App() {
  return (  
    <Routes>
     <Route path="/admin/*" element={<DashboardC />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="docs" element={<Docs />} />

          
        
          
            
          
        
          
      <Route path="pricing" element={<Pricing />} />
     
      
        <Route element={<ProtectedRoute />}>

 <Route path="pricing/basic" element={<PricingBasic />} />
                    <Route path="pricing/standard" element={<PricingEnterprice />} />
                    <Route path="pricing/premium" element={<PricingPro />} />
        <Route path="/pages/name" element={<Name />} />
   



        
      
          



        
          
        </Route>
        
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="privacy" element={<Privacy/>} />
        <Route path="terms" element={<Terms/>} />
        <Route path="aboutus" element={<Aboutus/>} />
        
        
        <Route path="*" element={<NotFound />} />
      
      
      


      </Route>
    </Routes>
  );
}

export default App;