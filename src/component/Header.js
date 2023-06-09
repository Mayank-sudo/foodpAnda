import React from 'react'
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem';
import  { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';


const Header = () => {
     
  const getdata = useSelector((state)=> state.cartreducer.carts)
  console.log(getdata)
    


   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
   };
   const handleClose = () => {
    setAnchorEl(null);
   }



  return (
    <div>
        <Navbar bg="dark" variant="dark" style={{height: '60px'}}>
        <Container>
          <NavLink to="/home" className="text-decoration-none text-light mx-3">Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="primary"
           id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
          >
          <i class="fa-solid fa-cart-shopping text-light"  style={{fontSize:24,cursor: 'pointer'}}></i>
    </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-handlledby': 'basic-button',
        }}
       
        
      >
       

       {

        getdata.length ? 
        <div className='card_details' style={{width: '25rem',padding:10}}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restraunt Name</th>
                </tr>
              </thead>
              <tbody>
                    {
                      getdata.map((e)=> {
                        return (
                          <>
                            <tr>
                              <td>
                             <NavLink to={`/cart/${e.id}`}>
                             <img src={e.imgdata} style={{width: '5rem', height: "5rem"}}alt="" />
                             </NavLink> 
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price : ₹ {e.price}</p>
                                <p>Quantity :  {e.qnty}</p>
                                <p style={{color:'red', fontSize:20,cursor:'pointer'}}>
                                  <i className='fas fa-trash smalltrash' ></i>
                                </p>
                                <td className='mt-5' style={{color:'red',fontSize:20,cursor: 'pointer'}}>
                                <i className='fas fa-trash largetrash' ></i>
                                </td>


                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                    <p className='text-center'>Total ₹ 300</p>

              </tbody>
            </Table>
        </div>:
        <div className="card_details d-flex justify-content-center align-item-center" style={{width:"24rem",padding:10,position:'relative'}}>
       <i className='fas fa-close smallclose'
       onClick={handleClose}
        style={{position: 'absolute',top:2,right:20,fontSize:23, cursor:'pointer'}}></i>
         <p style={{fontSize:22}}>your cart is Empty</p>
         <img src="https://react-redux-cart-youtube.netlify.app/cart.gif" className='emptycart_img' style={{width:"5rem",padding:10}} alt='' />
       </div>

       }



       

       
      </Menu>

      </Navbar>
    </div>
  )
}

export default Header