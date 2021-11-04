import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth();

    return (
        <div className='border-bottom'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='py-1'>
                    <Navbar.Brand className='fs-3 fw-bold text-dark ms-2' style={{ fontFamily: 'Charmonman' }}>Unwind</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav className="ms-lg-5 me-auto">
                            <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/home'>Home</Link>
                            </div>
                            {user.email && <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/myOrders'>My orders</Link>
                            </div>}
                            {user.email && <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/managerOrders'>Manage all orders</Link>
                            </div>}
                            {user.email && <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/addNewService'>Add a new room</Link>
                            </div>}
                        </nav>
                        <hr className='d-md-block d-lg-none' />
                        <div>
                            <span>{user.displayName}</span>
                        </div>
                        {user.email ? <button onClick={logOut} className='btn btn-dark ms-3'>
                            Log out
                        </button> :
                            <button className='btn btn-dark ms-3'>
                                <Link className='text-light text-decoration-none' to='/login'>Login</Link>
                            </button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;