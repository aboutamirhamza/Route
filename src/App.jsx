
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Layout from './components/Layout';
import Member from './pages/Member';
import MemberDetails from './pages/MemberDetails';

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path='member'>
                    <Route index element={<Member />} />
                    <Route path='member-details/:memberId/:memberName' element={<MemberDetails />} />
                </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
