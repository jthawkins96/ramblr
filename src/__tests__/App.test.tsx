import { shallow, ShallowWrapper } from 'enzyme';
import App from 'components/Root/App';
import AccountMenu from 'components/AccountMenu/AccountMenu';
import ChatLog from 'components/ChatLog/ChatLog';
import Sidebar from 'components/Sidebar/Sidebar';

let component: ShallowWrapper;

beforeEach(() => {
    component = shallow(<App />);
});

it('shows an account menu', () => {
    expect(component.find(AccountMenu).length).toEqual(1);
});

it('shows a chat log', () => {
    expect(component.find(ChatLog).length).toEqual(1);
});

it('shows a sidebar', () => {
    expect(component.find(Sidebar).length).toEqual(1);
});
