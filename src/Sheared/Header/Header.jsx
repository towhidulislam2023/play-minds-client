import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logout }=useContext(AuthProviderContext)
    const handelLogout=()=>{
        logout()

    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/"}>All Toys</Link></li>

                        <li><Link to={"/"}>Blogs</Link></li>
                        <div className="divider lg:divider-horizontal"></div>
                        {
                            user ? <div className='flex flex-col justify-center items-center gap-4'> <div className="tooltip tooltip-bottom" data-tip={user?.email}>
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                        <span>MX</span>
                                    </div>
                                </div>
                            </div>
                                <li><Link to={"/"}>My Toyssss</Link></li>
                                <li><Link to={"/"}>Add A Toy</Link></li>
                                <button onClick={handelLogout} className='btn btn-success'>Logout</button>
                            </div>

                                : <li><Link className='btn btn-error' to={"/login"}>Login</Link></li>
                        }

                    </ul>
                </div>
                <img className='w-24 mr-5' src="https://i.ibb.co/cDBkm6J/playminds-removebg-preview.png" alt="playminds-removebg-preview" border="0"/>
                <a className=" hidden md:inline-block text-3xl font-bold text-black">Playminds Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/"}>All Toys</Link></li>
                   
                    <li><Link to={"/"}>Blogs</Link></li>
                    <div className="divider lg:divider-horizontal"></div> 
                    {
                        user ? <div className='flex items-center gap-4'> <div className="tooltip tooltip-bottom" data-tip={`${user?.email}`}>
                            <div className="avatar placeholder">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <span>MX</span>
                                </div>
                            </div>
                        </div> 
                            <li><Link to={"/"}>My Toys</Link></li>
                            <li><Link to={"/"}>Add A Toy</Link></li>
                            <button onClick={handelLogout} className='btn btn-success'>Logout</button>
                        </div>
                        
                        : <Link to={"/login"}>
                            
                            <button className='btn btn-error'>Login</button>
                        </Link>
                    }
                   
                   
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='btn btn-warning'>Learn More</Link>
            </div>
        </div>
    );
};

export default Header;