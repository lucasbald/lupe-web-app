import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
 
const Footer = () => {
    return (
        <MDBFooter color="mdb-color darken-2" className="font-small pt-4">
          <MDBContainer fluid className="text-center">
            <MDBRow>
              <MDBCol md="12">
                <h6 className="title">Lup3 Marketing and Tecnology</h6>
                <p>
                  Email para contato: lucas.sbaldin@gmail.com
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
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