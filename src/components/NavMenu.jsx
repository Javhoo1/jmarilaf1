import React from 'react';
import {Link} from 'react-router-dom';


export default function NavMenu (props){
  return (
    <header>
      <div>
        <ul>
          {props.links.map((link, key) => <Link to={link.href}><button>{link.title}</button></Link>)}
        </ul>
      </div>
    </header>
  );
}