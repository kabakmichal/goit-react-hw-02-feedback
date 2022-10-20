import PropTypes from 'prop-types';
import SectionCSS from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={SectionCSS.container}>
    <h2 className={SectionCSS.headerSecond}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
