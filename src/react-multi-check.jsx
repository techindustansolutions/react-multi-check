import React from 'react';

const Checkable = ({label, onSelect, selected, onClick}) => {
	return (
		<div onClick={onClick && onClick} className={"checkable" + ( selected ? ' active' : '')}>
			<span className="label">{label}</span>
			{selected ? onSelect : null}
		</div>
	)
}

export default class MultiCheck extends React.Component {

	onElemSelect = (index) => {
		console.log(index)
	}

	render() {
		let {elements} = this.props;
		return (
			<div className="react-multi-check">
				{elements ? elements.map((element, index) => {
					return <Checkable label={element.label} onSelect={"selected"} onClick={() => console.log(index)} selected={true} />
				}) : null}
			</div>
		)
	}
}