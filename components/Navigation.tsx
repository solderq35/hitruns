import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navigation.module.scss';


type Props = {
  className?: string;
};

const Navigation = ({ className }: Props): JSX.Element => (

  <Navbar className={`${styles.navigation} ${className}`} expand="sm" variant="dark">
  
    <Navbar.Toggle aria-controls="navbar" className={styles['navigation-toggle']} />
    <Navbar.Collapse id="navbar">
      <Nav className={`px-0`}>
        <Link href="/" passHref>
          <Nav.Link className="py-2 px-3">Home</Nav.Link>
        </Link>
        <Link href="/s3_sa_p" passHref>
          <Nav.Link className="py-2 px-3">Full Game Leaderboards</Nav.Link>
        </Link>
		 <Link href="/leaderboard" passHref>
          <Nav.Link className="py-2 px-3">IL Leaderboard</Nav.Link>
        </Link>
        <Link href="/guides" passHref>
          <Nav.Link className="py-2 px-3">Guides</Nav.Link>
        </Link>


	
	
        <Link href="/resources" passHref>
          <Nav.Link className="py-2 px-3">Resources</Nav.Link>
        </Link>
		<a href="https://speedrun.com/hitman_3" className="py-2 px-3" target="_blank" rel="noreferrer">H3 Speedrun.com</a>
		<a href="https://github.com/solderq35/hitruns" className="py-2 px-3" target="_blank" rel="noreferrer">Github</a>
		
		
		
      </Nav>


    </Navbar.Collapse>
  </Navbar>
 


  
);

export default Navigation;