import PropTypes from 'prop-types';
import SideBar from '../sidebar/Sidebar';

export default function Layout(props) {
  return (
    <div className='container-fluid d-flex'>
      <SideBar />
      <div className="SiteContent">
         {props.children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
