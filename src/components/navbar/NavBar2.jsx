// import React from 'react';
//  import { Container,  Nav, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

// const NavBar2 = ({ user, setUser, setToken }) => {

//     const handleLogout = () => {
//         setUser(null)
//         setToken(null)
//     }

//     return (
//         <NavBar2>
//             <Container>
//                 <NavBar2.Brand>
//                     <Nav.Link as={Link} to="/">Task Manager</Nav.Link>
//                 </NavBar2.Brand>
//                 { !user ?
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/login">
//                             Log in
//                         </Nav.Link>
//                         <Nav.Link as={Link} to="/signup">
//                             Sign up
//                         </Nav.Link>
//                     </Nav>
//                     :
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/profile">{user.username}</Nav.Link>
//                         <Button variant="outline-light"
//                         style={{ color: 'black' }}
//                         onClick={handleLogout}
//                         >Log out</Button>
//                     </Nav>
//                 }
//             </Container>
//         </NavBar2>
//     );
// };

// export default NavBar2;