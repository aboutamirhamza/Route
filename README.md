# React Route

```Install React Router
npm i react-router
```

File Stracture:

src
    --components
                --Layout.jsx
                --Navbar.jsx
    --pages
          --Home.jsx
          --About.jsx
          --Contact.jsx
          --Member.jsx
          --MemberDetails.jsx


# App.jsx

```
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

```

# Layout.jsx
```
import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
```
# Navbar.jsx
```
import React from 'react'
import { Link } from 'react-router'

function Navbar() {

  return (
    <div style={{
      display: "flex",
      gap: "16px",
      marginBottom: "60px",
      fontSize: "30px",
      color: "white",
    }}>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link>|
      <Link to="/member">Member</Link>|
      <Link to="/member/member-details/123456/AmirHamza">Member Details</Link>|
    </div>
  )
}

export default Navbar;
```
# Home.jsx
```
import React from 'react'

function Home() {
  return (
    <div><h1>Home</h1></div>
  )
}

export default Home
```
# About.jsx
```
import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div><h1>About</h1></div>
  )
}

export default About
```
# Contact.jsx
```
import React from 'react'

function Contact() {
  return (
    <div><h1>Contact</h1></div>
  )
}

export default Contact
```
# Member.jsx
```
import React from 'react'

function Member() {
  return (
    <div><h1>Member</h1></div>
  )
}

export default Member
```
# MemberDetails.jsx
```
import React from 'react'
import { useParams, useSearchParams } from 'react-router'

function MemberDetails() {
    const {memberId, memberName} = useParams();
    const [search] = useSearchParams();
  return (
    <>
    <div><h1>MemberDetails</h1></div>
    <div><h2>MemberID: {memberId}</h2></div>
    <div><h2>MemberName: {memberName}</h2></div>
    <div><h2>SortBy: {search.get("sortBy")}</h2></div>
    <div><h2>SortDirection: {search.get("sortDirection")}</h2></div>
    </>
  )
}

export default MemberDetails
```
# MemberDetails Link Copy Paste useParams() and useSearchParams()
```
http://localhost:5173/member/member-details/123456/AmirHamza?sortBy=name&sortDirection=asc
```
