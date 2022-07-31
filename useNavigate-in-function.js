import { useNavigate } from 'react-router-dom';
class MyBackButton extends React.Component {
  render() {
    // Get it from props
    const { navigate } = this.props;
  }
}

// Wrap and export
export default function(props) {
  const navigate = useNavigate();

  return <MyBackButton {...props} navigate />;
}
