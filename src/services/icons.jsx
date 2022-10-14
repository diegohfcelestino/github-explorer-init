import React from 'react';
import {
  FaSignOutAlt,
  FaSearch,
  FaMapMarkerAlt,
  FaTwitter,
  FaFileCode,
  FaUserFriends,
  FaUsers,
  FaLinkedinIn,
  FaUserAlt,
  FaLink,
} from 'react-icons/fa';

export const IconLogout = (props) => {
  return <FaSignOutAlt {...props} />;
};

export const IconSearch = (props) => {
  return <FaSearch {...props} />;
};

export const IconLocalization = (props) => {
  return <FaMapMarkerAlt {...props} />;
};

export const IconTwitter = (props) => {
  return <FaTwitter {...props} />;
};

export const IconRepository = (props) => {
  return <FaFileCode {...props} />;
};

export const IconFollowing = (props) => {
  return <FaUserFriends {...props} />;
};

export const IconFollowers = (props) => {
  return <FaUsers {...props} />;
};

export const IconLinkedin = (props) => {
  return <FaLinkedinIn {...props} />;
};

export const IconUser = (props) => {
  return <FaUserAlt {...props} />;
};
export const IconLink = (props) => {
  return <FaLink {...props} />;
};
