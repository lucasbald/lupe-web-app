import React from 'react';
import { MDBCol, MDBContainer, MDBFooter, MDBIcon } from "mdbreact";
 
const Footer = () => {
    return (
        <MDBFooter color="mdb-color darken-2" className="font-small">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
            <MDBCol md="12">
              <h6 className="title">Lup3 Marketing and Tecnology</h6>
              <p>
                Email para contato: lucas.sbaldin@gmail.com
              </p>
            </MDBCol>

              &copy; {new Date().getFullYear()} Copyright 
              <a href="https://github.com/lucasbald/lupe-web-app" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="github" />
              </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      );
}
 
export default Footer;