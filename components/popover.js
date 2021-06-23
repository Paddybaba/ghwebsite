import React from 'react'
import tachyons from 'tachyons'
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import styles from '../styles/Components.module.css'
// import PopoverContent from 'react-bootstrap/PopoverContent'
// import PopoverTitle from 'react-bootstrap/PopoverTitle'

const popover = (
    <Popover className={styles.pop}>
      {/* <Popover.Title as="h3">Contact Us</Popover.Title> */}
      <Popover.Content >
          <div>
            {/* <p>Gupta hospital Dhamtari</p>
            <p>Ratnabandha Road</p>
            <p>Phone : 07722-237361</p>        */}
            <img style={{width:300, borderRadius:5}} src="/contact.png"></img>
          </div>
      </Popover.Content>
    </Popover>
  );
  
  const ContactPop = () => (
    <OverlayTrigger  trigger={['hover','focus']} placement="bottom" overlay={popover}>
      <h3 className="mr2 pointer">Contact</h3>
    </OverlayTrigger>
  );
  
  export default ContactPop ;
