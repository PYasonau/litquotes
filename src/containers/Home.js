import React from 'react';
import './Home.css';
import { Panel, Cell, List, PanelHeader, Group, Div, Button } from '@vkontakte/vkui';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: [this.props.items],
			currentImageIndex: 0
		};
		this.nextSlide = this.nextSlide.bind(this);
		console.log(this.state.photos);
	}

	// const random = (min, max) => {
	// 	Math.floor(Math.random() * max) + min
	// };

	nextSlide(e) {
		let newIndex = this.state.currentImageIndex
		if (e.currentTarget.dataset.direction === 'next'){
			newIndex = this.state.currentImageIndex + 1;
		} else {
			newIndex = this.state.currentImageIndex - 1;
		}
		this.setState({currentImageIndex: newIndex});
		console.log(this.state.currentImageIndex); // debug
	}

	render() {

		let {
			id, items
		} = this.props

	//		console.log(items);
		//	this.setState({ photos: items });

		const alt = 'something'

		return (
			<Panel id={id}>
				<PanelHeader>Literature quotes</PanelHeader>
				<Group className="centered">
					<List className="list">
						<Button data-direction='prev' onClick={this.nextSlide.bind(this)}>prev</Button>
						<Button data-direction='next' onClick={this.nextSlide.bind(this)}>next</Button>

					</List>
				</Group>
			</Panel>
		);
	}
}

// {items.map((data, index) => (
// 	<Cell className="photoNumber" key={index}>
// 		<img src={data.photo_604} alt={alt}/><div><p>{index+1}</p></div>
// </Cell>
// ))}
export default Home;
