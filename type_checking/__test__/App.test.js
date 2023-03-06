import React from 'react';
import renderer from 'react-test-renderer';
import App from 'App';
describe('<App />', function () {
    var component = renderer.create(React.createElement(App, null));
    test('Should render App component', function () {
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=App.test.js.map