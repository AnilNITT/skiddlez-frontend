import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ModalTypes from '../constants/ModalTypes';
import FixedContainer from '../containers/FixedContainer';

import StaticContainer from '../containers/StaticContainer';
import UsersModalContainer from '../containers/UsersModalContainer';
import NotificationsModalContainer from '../containers/NotificationsModalContainer';
import UserSettingsModalContainer from '../containers/UserSettingsModalContainer';
import ProjectAddModalContainer from '../containers/ProjectAddModalContainer';
import Background from './Background';
import SidebarWrapper from './SidebarWrapper';
// import UsersListWrapper from './UsersListWrapper';
import img1 from "../assets/images/img1.jpg";
import Footer from '../containers/Footer';

const Core = ({ currentModal, currentProject, theme, loadUI, header, sidebar }) => {
  const [background, setBackground] = useState({});
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);
  useEffect(() => {
    loadUI();
  });

  let an = []

  
  if(currentModal === "USER_SETTINGS"){
    an = <UserSettingsModalContainer />;
  } else if(currentModal === "USERS"){
    an = <UsersModalContainer />
  } else {
    an = <StaticContainer />
  }
  
  useEffect(() => {
    if(currentProject && !currentProject.background) {
      
      switch(theme){
        
        case theme === 'bg-light':
          setBackground({
            background : "#2E98CA"
          })
          break;

        case theme === 'bg-dark':
          setBackground({
            background : "#212121"
          })
        break;

        case theme === 'bg-default':
          setBackground({
            background : "#0065A5"
          })
        break;

        default:
          setBackground({
            background : "#212121"
          })
      }
    
    } else if(currentProject && currentProject.background) {
      setBackground({});
      if(currentProject.backgroundImage && currentProject.backgroundImage.url) {
        if(process.env.NODE_ENV === "development") {
          setBackgroundImageUrl(currentProject.backgroundImage.url.replace("http://localhost:3000/", "http://localhost:1337/"));
        } else {
          setBackgroundImageUrl(currentProject.backgroundImage.url)
        }
      }
    } else {
      setBackground({})
    }
  }, [currentProject,currentModal, theme])


  return (
  <>
    <div className = {classNames('content-boxx',theme,( header ? 'header-active' : "header-inactive"))} style = {(currentProject && currentProject.background) ? {} : background}>
        <FixedContainer />
    </div>

    <div id = "content-box" className = {classNames('content-box', theme,( header ? 'header-active' : "header-inactive"), sidebar ? 'sidebar-active' : "sidebar-inactive")} style = {(currentProject && currentProject.background) ? {} : background}>

      {currentProject && currentProject.background && (
        <Background
          type={currentProject.background.type}
          name={currentProject.background.name}
          imageUrl={backgroundImageUrl}
        />
      )}
      {currentProject === undefined && (    
      <Background
      type='image'
      name='backround'
      imageUrl={img1}
    />)}
        <SidebarWrapper />
        {/* <UsersListWrapper /> */}
        {/* <StaticContainer /> */}
        {/* {currentModal ? <UserSettingsModalContainer /> : <StaticContainer />} */}
        {an}
        {currentModal === ModalTypes.PROJECT_ADD && <ProjectAddModalContainer />}
        {currentModal === ModalTypes.NOTIFICATIONS && <NotificationsModalContainer />}

        {/* {currentModal === ModalTypes.USERS && <UsersModalContainer />}
        {currentModal === ModalTypes.NOTIFICATIONS && <NotificationsModalContainer />}
        {currentModal === ModalTypes.USER_SETTINGS && <UserSettingsModalContainer />}
        {currentModal === ModalTypes.PROJECT_ADD && <ProjectAddModalContainer />}
       */}
    </div>

    <div className = {classNames(theme,"footer")} style={{"margin-top": "-5rem"}}>
          <Footer/>
    </div>
  </>
)}


Core.propTypes = {
  currentModal: PropTypes.oneOf(Object.values(ModalTypes)),
  currentProject: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme : PropTypes.string.isRequired,
  loadUI: PropTypes.func.isRequired,
  header: PropTypes.bool.isRequired,
  sidebar: PropTypes.bool.isRequired
  // fullscreen: PropTypes.func.isRequired,
  // windowscreen: PropTypes.func.isRequired,
  // setLightUI: PropTypes.func.isRequired,
  // setDarkUI: PropTypes.func.isRequired
};

Core.defaultProps = {
  currentModal: undefined,
  currentProject: undefined,
};

export default Core;
