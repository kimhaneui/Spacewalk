import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='text'>404</div>
      <div>
        <Link to='/home'>Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
