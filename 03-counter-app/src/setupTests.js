import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import '@testing-library/jest-dom/extend-expect'; //Viene por default en react
import {createSerializer} from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));