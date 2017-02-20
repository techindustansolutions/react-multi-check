import React from 'react';

const Checkable = ({label, onSelect, selected, onClick, elemActiveStyle, elemStyle}) => {
	return (
		<div onClick={onClick && onClick} style={selected ? elemActiveStyle && elemActiveStyle : elemStyle && elemStyle} className={"checkable" + ( selected ? ' active' : '')}>
			<span className="checkable-label">{label}</span>
			{selected ? onSelect : null}
		</div>
	)
}

export default class MultiCheck extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			selected: []
		}
	}

	updateMultipleSelect = (index) => {

		let exist = false;
		let list = this.state.selected;
		let {onSelect} = this.props;

		for(let i = 0; i < list.length; i++) {
			 if(list[i] == index) {
			 	list.splice(i, 1);
			 	exist = true;
			 	break;
			 }
		}

		if(!exist) {
			list = list.concat(index)
		}

		this.setState({
			selected: list
		})

		onSelect(list);

	}

	isSelected = (idx) => {
		let {selected} = this.state;
    	return selected.filter(elem => {
			return elem == idx;
		}).length;
    }

	render() {
		let {elements, selectItem, elemActiveStyle, elemStyle} = this.props;
		return (
			<div className="react-multi-check">
				{elements ? elements.map((element, index) => {
					return <Checkable elemActiveStyle={elemActiveStyle} elemStyle={elemStyle} key={index} label={element.label} onSelect={selectItem} onClick={() => this.updateMultipleSelect(index)} selected={this.isSelected(index)} />
				}) : null}
			</div>
		)
	}
}