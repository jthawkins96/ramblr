import { ReactWrapper } from 'enzyme';
import { Component } from 'react';

export const findByText = (wrapper: ReactWrapper<any, any, Component<{}, {}, any>>, nodeType: string, text: string) => {
    return wrapper.findWhere(node => {
        return node.type() === nodeType && node.text() === text;
    });
};
