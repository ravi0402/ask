//#region Global Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
//#endregion Global Imports

//#region Local Imports
import { Heading } from '@Components';
import { HomeActions } from '@Actions';
import './index.scss';
//#region Local Imports

//#region Interface Imports
import { IHomePage, IStore } from '@Interfaces';
//#endregion Interface Imports

export class HomePage extends React.Component<IHomePage.IProps, IHomePage.IState> {
	constructor(props: IHomePage.IProps) {
		super(props);
	}

	componentDidMount() {
		const { GetApod } = this.props;
		GetApod({ params: { hd: true } });
	}

	public render(): JSX.Element {

		return (
			<div className="container">
				<div className="container__top">
					<img src="/static/images/pankod-logo.png" />
				</div>
				<div className="container__middle">
					<div className="container__middle__right">
						<span className="container__top_text">{'Hello'}</span>
						<Heading text={'World'} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: IStore) => state.home;

const mapDispatchToProps = (dispatch: Dispatch) => ({
	Map: bindActionCreators(HomeActions.Map, dispatch),
	GetApod: bindActionCreators(HomeActions.GetApod, dispatch),
});


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomePage);
