React Multi Check
=====================
> Select multiple options at once

A very simple React Component to enable multiple select.

Installation
------------
```sh
npm install react-multi-check --save
````
Usage
---
````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MultiCheck from 'react-multi-check';

let elements = [
	{
		label: 'option 1',
	}, {
		label: 'option 2',
	}
]

ReactDOM.render(<MultiCheck onSelect={selected => console.log(selected)} selectedItem={'selected'} elements={elements} elemStyle={{ color: 'red' }} elemActiveStyle={{ color: 'black' }} />, document.getElementById('page'));
````
Props
-----
## onSelect
Get called when any element is selected with indexes of selected elements.
```html
<MultiCheck onSelect={selected => console.log(selected)} />
// output [0, 4, 5]
```
## selectedItem
Custom element to show when an element is selected in front of selected element.
```html
<MultiCheck selectedItem={'selected'} />
```

## elements
List of options to show.
```js
let elements = [
	{
		label: 'option 1',
	}, {
		label: 'option 2',
	}
]
```
```html
<MultiCheck elements={elements} />
```

## elemStyle
Each individual element style when unselected.
```html
<MultiCheck elemStyle={{ color: 'red' }} />
```

## elemActiveStyle
element style when selected.
```html
<MultiCheck elemActiveStyle={{ color: 'black' }} />
```
If your are using this component then please star this component and feel free to contribute.
