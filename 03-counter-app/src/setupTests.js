import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import '@testing-library/jest-dom/extend-expect'; //Viene por default en react

Enzyme.configure({ adapter: new Adapter() });