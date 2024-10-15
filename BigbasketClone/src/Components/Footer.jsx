import { background } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    const Styles = {
        container:{
          backgroundColor:'black',
          color:'white',
          display:'flex',
          justifyContent:'space-around',
          padding:'40px'
        }
        
    }
  return (
    <>
    <div  className='container1' style={Styles.container}>
        <div>
            <h2><a href="/">
            Bigbasket
            </a></h2>
            <p>About Us</p>
            <p>Become A Bigbasket Rider</p>
            <p>In News</p>
            <p>Green bigbasket</p>
            <p>Privacy Policy</p>
            <p>Term and Conditions</p>
            <p>Careers At bigbasket</p>
            <p>bb instant</p>
            <p>bb Daily</p>
            <p>bb Blog</p>
            <p>bbnow</p>
        </div>
        <div>
        <h2><a href="/">
            Help
            </a></h2>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>bb Wallet FAQs</p>
            <p>bb Wallet T&Cs</p>
            <p>Vendor connect</p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwj_xzAyU-ijichVGDmPxRKeDOmAmqzUD__S6R3PFcDr2zTViXKGx9HCJbu6DjkadSzO0&usqp=CAU" alt="" />
          <div style={{display:'flex',  marginTop:'50px'}}>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s" alt="" width={190}/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStq4VH0D27JKyfSH8B1uAebw5D2KsaS2q9jQ&s" alt="" width={120}/>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default Footer
