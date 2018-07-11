import AddPlayer from './AddPlayer';
import React from 'react';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
    shallow(<AddPlayer />);
});

it ('should call Marta when onPlayerAdd', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();
    nameInput.value = 'Marta';
    const form = addPlayerComponent.find('form');
    form.simulate('submit');
    expect(onPlayerAdd).toBeCalledWith('Marta');
});
