import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

configure({ adapter: new Adapter() });
