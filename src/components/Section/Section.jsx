import PropTypes from 'prop-types';
import SectionCSS from './Section.module.css';

const Section = ({ title, children }) => {
  <div className={SectionCSS.container}>
    <h2 className={SectionCSS.secondHeader}>{title}</h2>
    {children}
  </div>;
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
