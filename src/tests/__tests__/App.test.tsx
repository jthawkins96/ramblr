import { mount, ReactWrapper } from 'enzyme';
import AccountMenu from 'components/TopNav/AccountMenu/AccountMenu';
import ChatLog from 'components/ChatLog/ChatLog';
import Sidebar from 'components/Sidebar/Sidebar';
import Root from 'components/Root/Root';
import Home from 'components/Home/Home';

let component: ReactWrapper;

beforeEach(() => {
    component = mount(
        <Root>
            <Home />
        </Root>
    );
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
