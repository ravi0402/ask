// #region Global Imports
import * as React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
// #endregion Global Imports

// #region Local Imports
import HomePage from '../home/index';
import initStore from '@Redux/store';
// #endregion Local Imports

describe('HomePage', () => {
	it('should render without throwing an error', () => {
		const wrap = shallow(<HomePage />);
		expect(wrap).toBeTruthy();
	});

	it('should render without throwing an error', () => {
		const wrap = mount(
			<Provider store={initStore()}>
				<HomePage />
			</Provider>,
		);

		expect(wrap.find('.container')).toHaveLength(1);
		expect(wrap.find('.container__top')).toHaveLength(1);
		expect(wrap.find('.container__middle')).toHaveLength(1);
		expect(wrap.find('.title')).toHaveLength(1);
		expect(wrap.find('.button')).toHaveLength(3);
	});
});
