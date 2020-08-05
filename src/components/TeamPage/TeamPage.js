import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import ImageRounded from "react-rounded-image";
import lucasImage from '../../assets/lucas-image.jpg';
import pedroImage from '../../assets/pedro-image.png';


const TeamPage = () => {
  return (
    <MDBCard className="px-5 pb-1 text-center" color="grey lighten-3">
      <MDBCardBody>
        <h3 className="h3-responsive font-weight-bold my-5">
          Bem vindos ao nosso mundo de soluções tecnológicas!
        </h3>
        
        <br />
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <ImageRounded
                image={lucasImage}
                roundedColor="#321124"
                imageWidth="200"
                imageHeight="200"
                roundedSize="5"
              />

            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Lucas Baldin</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Engenheiro de Software
              </h6>
              <p className="grey-text">
                Graduado em Ciências da Computação pela UNESP - Rio Claro, Diretor executivo da empresa júnior Info Jr durante 3 anos e formado pela ETEC Deputado Salim Sedeh em Informática.
                Trabalhando há 3 anos na Ci&T em Campinas, atualmente como Engenheiro de Software voltado para qualidade.
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

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
              <ImageRounded
                image={pedroImage}
                roundedColor="#321124"
                imageWidth="200"
                imageHeight="200"
                roundedSize="5"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Pedro A. S. Broglio</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Analista de Marketing 
              </h6>
              <p className="grey-text">
                Graduado em Ciências do Esporte pela Universidade Estadual de Campinas - Unicamp, Vice-Presidente da CENS Jr, analista de marketing há 2 anos na Internacional de Limeira e finalista do prêmio INOVA Unicamp.
              </p>
              <a href="https://www.linkedin.com/in/pedro-antonio-siqueira-broglio-a3b456138/" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="https://www.instagram.com/pa.broglio" className="p-2 fa-lg yt-ic">
                <MDBIcon fab icon="instagram" />
              </a>
            </MDBCol>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default TeamPage;