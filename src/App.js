/** @format */

import './App.css'
import CreateNodeModal from './CreateNodeModal'
import React, { useState, useEffect, useRef } from 'react'
import Cytoscape from 'cytoscape'
import CytoscapeComponent from 'react-cytoscapejs'
import COSEBilkent from 'cytoscape-cose-bilkent'

Cytoscape.use(COSEBilkent)

function App() {
	const elements = [
		{ data: { id: 'root', label: '개발자로 취업하기', type: 'root' } },
		{ data: { id: 'two', label: '기술면접', type: 'dep1' } },
		{ data: { id: 'three', label: '코딩테스트', type: 'dep1' } },
		{ data: { id: 'four', label: '포트폴리오', type: 'dep1' } },
		{ data: { id: 'five', label: '기술스택', type: 'dep1' } },
		{ data: { id: 'six', label: '알고리즘', type: 'dep2' } },
		{ data: { id: 'seven', label: '코드스테이츠', type: 'dep2' } },
		{ data: { id: 'eight', label: '리액트', type: 'dep3' } },
		{
			data: {
				source: 'root',
				target: 'two',
				label: 'Edge from Root to two',
			},
		},
	]
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [nodes, setNodes] = useState(elements)
	const [selectedNodes, setSelectedNodes] = React.useState([])

	const cy = React.useRef()
	React.useEffect(() => {
		if (cy.current) {
			window.cy = cy.current
			cy.current.off('taphold', 'node').on('taphold', 'node', (e) => {
				console.log('clicked', e.target.id())

				setSelectedNodes(Array.from(new Set([...selectedNodes, { name: e.target.id(), id: e.target.id() }])))
			})
		}
	}, [nodes, cy])

	return (
		<div className='App'>
			<header className='header'>What's in your mind?</header>
			<div className='container'>
				<CytoscapeComponent
					layout={{ name: 'cose-bilkent' }}
					cy={(ref) => {
						cy.current = ref
					}}
					elements={nodes}
					stylesheet={[
						{
							selector: 'node[type="root"]',
							style: {
								'background-color': '#FFC090',
								label: 'data(label)',
							},
						},
						{
							selector: 'node[type="dep1"]',
							style: {
								'background-color': '#7FB77E',
								label: 'data(label)',
							},
						},
						{
							selector: 'node[type="dep2"]',
							style: {
								'background-color': '#B1D7B4',
								label: 'data(label)',
							},
						},
						{
							selector: 'node[type="dep3"]',
							style: {
								'background-color': '#F7F6DC',
								label: 'data(label)',
							},
						},
						{
							selector: 'edge',
							style: {
								width: 1,
								'line-color': '#F7F6DC',
								'target-arrow-color': '#F7F6DC',
								'target-arrow-shape': 'triangle',
								'curve-style': 'bezier',
							},
						},
					]}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
			{/* {isModalOpen ? <CreateNodeModal /> : null} */}
		</div>
	)
}

export default App
