import classes from './CoreLayout.scss';
import 'styles/app.scss';

export const CoreLayout = ({ children }) => (
  <div className='container-fluid'>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;