import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './Home';
import connect from '@vkontakte/vkui-connect';
import fetchJsonp from 'fetch-jsonp';
import { Panel, PanelHeader, Group, List, Cell, View } from '@vkontakte/vkui';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
			authToken : null,
			items : []
		};

		this.getItems = this.getItems.bind(this);
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				case 'VKWebAppAccessTokenReceived':
					this.setState({ authToken : e.detail.data.access_token });
					this.getItems();
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		connect.send("VKWebAppGetAuthToken", {"app_id": 7539872, "scope": "photos"});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};
	getItems() {
		const ownerId = 196914612
		let api = `https://api.vk.com/method/photos.get?v=5.52&access_token=${this.state.authToken}&owner_id=-${ownerId}&album_id=wall&count=1000`
		fetchJsonp(api)
		.then(res => res.json())
		.then(data => data.response.items.map(data => {this.setState({ items: data.photo_604 })}))//.map(data => {this.setState({ items: data })})) //this.setState({ items: data.response.items })
		.catch(e => []);
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" items={this.state.items} fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
	}
}

export default App;
