import PropTypes from 'prop-types';

export default function Layout(props) {
  return <div>{props.children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
