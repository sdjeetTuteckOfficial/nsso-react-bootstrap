import PropTypes from 'prop-types';
import SideBar from '../sidebar/Sidebar';

export default function Layout(props) {
  return (
    <div>
      <SideBar />
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
