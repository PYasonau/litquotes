import React from 'react';
import './Home.css';
import { Panel, Cell, List, PanelHeader, Group, Div, Button } from '@vkontakte/vkui';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			currentImageIndex: 3,
			canGoPrev: false,
			canGoNext: true
		};
		this.nextPrevSlide = this.nextPrevSlide.bind(this);
	}

// const random = (min, max) => {
// 	Math.floor(Math.random() * max) + min
// };
//
//
// TODO: пересмотреть этот код, а то что-то NEXT переключает сколько хочет
//
//
	nextPrevSlide(e) {
		const photoLength = this.state.photos.length
		let newIndex = this.state.currentImageIndex
		console.log(photoLength, newIndex);
		if (e.currentTarget.dataset.direction === 'next'){
			if (newIndex < photoLength - 1) {
				newIndex = newIndex + 1;
				this.setState({ canGoPrev: true });
			}

			if (newIndex === photoLength - 1) {
				this.setState({ canGoNext: false });
			}
		} else {
			if (newIndex > 3) {
				newIndex = newIndex - 1;
				this.setState({ canGoNext: true });
			}

			if (newIndex === 3) {
				this.setState({ canGoPrev: false });
			}
		}
		this.setState({currentImageIndex: newIndex});
	}


	render() {
		   let { id, items }  = this.props



			//**** следующие две строки сработали и у меня получилось ****//
			const urls = this.props.items
			this.state.photos.push(urls);


		const alt = 'something'

		return (
			<Panel id={this.props.id}>
				<PanelHeader>Literature quotes</PanelHeader>
				<Group className="centered">
					<List>
						{this.state.currentImageIndex - 2}
							<Cell className='testClass'><img src={this.state.photos[this.state.currentImageIndex]} alt="" /></Cell>
							<Cell className="buttons">
							<Button disabled={!this.state.canGoPrev} data-direction='prev' onClick={this.nextPrevSlide.bind(this)}>Пред.</Button>
							<Button disabled={!this.state.canGoNext} data-direction='next' onClick={this.nextPrevSlide.bind(this)}>След.</Button>
							</Cell>
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
