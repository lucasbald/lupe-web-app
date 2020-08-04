import React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import ImageRounded from "react-rounded-image";
import lucasImage from '../../assets/lucas-image.jpg';
 
const About = () => {
    return (
      <MDBCard className="px-5 pb-1 text-center" color="grey lighten-3">
      <MDBCardBody>        
        <br />
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <ImageRounded
                image={lucasImage}
                roundedColor="#321124"
                imageWidth="200"
                imageHeight="200"
                roundedSize="3"
              />

            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Lucas Baldin</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Ingeniero de Software
              </h6>
              <p className="grey-text">
                Me llamo Lucas Baldin y soy brasileño. Soy informático y tengo una licenciatura en informática. Tengo 25 años.
              </p>
              <a href="https://www.linkedin.com/in/lbaldin/" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="https://github.com/lucasbald" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="github" />
              </a>
              <a href="https://www.instagram.com/lucasbald/" className="p-2 fa-lg dribbble-ic">
                <MDBIcon fab icon="instagram" />
              </a>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    );
}
 
export default About;