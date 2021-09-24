import { mount, ReactWrapper } from 'enzyme';
import Root from 'components/Root/Root';
import Login from 'components/Login/Login';
import { findByText } from '../helperFunctions';
import { login, signInWithGoogle } from 'firebase/firebase.utils';

jest.mock('firebase/firebase.utils');

let component: ReactWrapper<typeof Login>;

beforeEach(() => {
    component = mount(
        <Root>
            <Login />
        </Root>
    );
});

it('shows the email text input', () => {
    expect(component.find('#email').hostNodes().length).toEqual(1);
});

it('shows the password text input', () => {
    expect(component.find('#password').hostNodes().length).toEqual(1);
});

it('shows the sign in button', () => {
    expect(component.find('#sign-in-button').hostNodes().length).toEqual(1);
});

it('shows the sign in with google button', () => {
    expect(component.find('#google-sign-in-button').hostNodes().length).toEqual(1);
});

describe('the text inputs', () => {
    let email = 'jthawkins96@gmail.com';
    let password = 'password';

    beforeEach(() => {
        component
            .find('#email')
            .hostNodes()
            .simulate('change', { target: { value: email } });
        component
            .find('#password')
            .hostNodes()
            .simulate('change', { target: { value: password } });
        component.update();
    });

    it('updates the textarea', () => {
        component.update();
        expect(component.find('#email').hostNodes().prop('value')).toEqual(email);
        expect(component.find('#password').hostNodes().prop('value')).toEqual(password);
    });

    it('shows validation messages', () => {
        component
            .find('#email')
            .hostNodes()
            .simulate('change', { target: { value: '' } });
        component
            .find('#password')
            .hostNodes()
            .simulate('change', { target: { value: '' } });
        component.update();
        component.find('form').simulate('submit', { preventDefault: () => null });
        component.update();
        expect(findByText(component, 'span', 'Username is required.').length).toEqual(1);
        expect(findByText(component, 'span', 'Password is required.').length).toEqual(1);
    });

    it('submits the form', () => {
        component.update();
        component.find('form').simulate('submit', { preventDefault: () => null });
        component.update();
        expect(login).toHaveBeenCalled();
    });

    it('runs google sign in', () => {
        component.find('#google-sign-in-button').hostNodes().simulate('click');
        component.update();
        expect(signInWithGoogle).toHaveBeenCalled();
    });
});
