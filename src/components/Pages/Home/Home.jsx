import React, { useState } from 'react'
import { Header } from '../../layouts/Header/Header'
import { PictureProfile } from '../../PictureProfile/PictureProfile'
import { Navbar } from '../../Navbar/Navbar'
import { Item } from '../../Item/Item'
import { PictureSena } from '../../PictureSena/PictureSena'
import {Networks} from '../../Networks/Networks.jsx'
import { Main } from '../../layouts/Main/Main.jsx'
import { SectionHeadings } from '../../SectionHeadings/SectionHeadings.jsx'
import { MyInformation } from '../../MyInformation/MyInformation.jsx'
import { ContentCards } from '../../ContentCards/ContentCards.jsx'
import { ProyectsCards } from '../../ProyectsCards/ProyectsCards.jsx'
import { ReferencesCard } from '../../ReferencesCard/ReferencesCard.jsx'
import { ExperienceCards } from '../../ExperienceCards/ExperienceCards.jsx'
import javaScript from '../../../assets/javaScript.png'
import Java from '../../../assets/Java.png'
import mongodb from '../../../assets/mongodb.png'
import mysql from '../../../assets/mysql.png'
import { FaX, FaBars } from 'react-icons/fa6';
import Apptastico from '../../../assets/Apptastico.png'
import Bleux from '../../../assets/Bleux.png'
import './Home.css'

export const Home = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
        <Header visible={isMenuOpen ? 'y-visible' : 'n-visible'}>
            <FaX id='closeMenu' onClick={() => setIsMenuOpen(false)}/>
            <PictureProfile />
            <Navbar>
                <Item content='Inicio'/>
                <Item route='#profile' content='Perfil'/>
                <Item route='#Projects' content='Proyectos'/>
                <Item route='#References' content='Referencias'/>
                <Item route='#Experience' content='Experiencia'/>
            </Navbar>
            <PictureSena />
            <Networks />
        </Header>
  

        <Main>
            <FaBars id='openMenu' onClick={toggleMenu} />
            <SectionHeadings id='profile' content='PERFIL'/>
            <MyInformation />
            <SectionHeadings id='Projects' content='PROYECTOS'/>
                <ContentCards> 
                    <ProyectsCards linkP='https://xgomezx.github.io/BLEUX/' titule='BLEUX' imgP={Bleux} description='Proyecto de maquetado usando solamente HTML y CSS puro sin ningun uso de frameworks' />
                    <ProyectsCards linkP='https://xgomezx.github.io/Apptastico/' titule='Apptasctico' imgP={Apptastico} description='Proyecto de maquetado usando solamente HTML y CSS puro sin ningun uso de frameworks' />
                </ContentCards>
            <SectionHeadings id='References' content='REFERENCIAS'/>
                <ContentCards> 
                    <ReferencesCard name='Rocio Ocampo' position='Ama de casa'  phone='3206698029' email='mariarocioocampo1223@gmail.com' />
                    <ReferencesCard name='Noman Ladino' position='Administrador Agricola'  phone='3205133047' email='normanladino4@gmail.com' />
                </ContentCards>
            <SectionHeadings id='Experience' content='EXPERIENCIA'/>
                <ContentCards> 
                    <ExperienceCards img={javaScript} valueP='70' progress='Intermedio' />
                    <ExperienceCards img={Java} valueP='70' progress='Intermedio' />
                    <ExperienceCards img={mongodb} valueP='50' progress='Bases' />
                    <ExperienceCards img={mysql} valueP='60' progress='Bases' />
                </ContentCards>
        </Main>
    </>
  )
}
