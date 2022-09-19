/** @format */

import './App.css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faSpider } from '@fortawesome/free-solid-svg-icons'
import { SpiderMap } from './SpiderMap'


function App() {
  const dispatch = useDispatch()
  const { nodeName, nodeBg, edgeStyle } = useSelector(state => state);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nodeChangeHandler = () => {

  }

  const nodeBgChangeHandler = (e) => {
    dispatch()
  }

  const edgeStyleChangeHandler = (e) => {
    dispatch()
  }

	return (
		<div className='App'>
			<header className='header'>
				<h1>
					<FontAwesomeIcon icon={faSpider} /> <span className='title'>Spider Map</span>
				</h1>
			</header>
			<div className='container'>
				<SpiderMap setIsModalOpen={setIsModalOpen} />
			</div>
			<div className={`modal${isModalOpen ? ' active' : ''}`}>
				<div className='modal-dimmed' onClick={() => {setIsModalOpen(false)}}></div>
				<div className='modal-contents'>
          <i className="close" onClick={() => {setIsModalOpen(false)}}><FontAwesomeIcon icon={faClose} /></i>
					<div className='form-row'>
						<label className='label'>Name</label>
						<div className="form-group">
              <input type="text" value={nodeName} onChange={(e) => dispatch()} />
            </div>
					</div>
					<div className='form-row'>
						<label className='label'>Background Color</label>
            <div className="form-group">
						  <input type="radio" name="nodeBg" id="nodeBg1" onClick={(e) => nodeBgChangeHandler(e)} />
              <label htmlFor="nodeBg1">Bg Color Style 1</label>
						  <input type="radio" name="nodeBg" id="nodeBg2" onClick={(e) => nodeBgChangeHandler(e)} />
              <label htmlFor="nodeBg2">Bg Color Style 2</label>
						  <input type="radio" name="nodeBg" id="nodeBg3" onClick={(e) => nodeBgChangeHandler(e)} />
              <label htmlFor="nodeBg3">Bg Color Style 3</label>
            </div>
					</div>
					<div className='form-row'>
						<label className='label'>Edge Style</label>
            <div className="form-group">
						  <input type="radio" name="edgeStyle" id="edgeStyle1" onClick={(e) => edgeStyleChangeHandler(e)} />
              <label htmlFor="edgeStyle1">Edge Style 1</label>
						  <input type="radio" name="edgeStyle" id="edgeStyle2" onClick={(e) => edgeStyleChangeHandler(e)} />
              <label htmlFor="edgeStyle2">Edge Style 2</label>
						  <input type="radio" name="edgeStyle" id="edgeStyle3" onClick={(e) => edgeStyleChangeHandler(e)} />
              <label htmlFor="edgeStyle3">Edge Style 31</label>
            </div>
					</div>
          <div className='form-row'>
            <button className="form-node-change" onClick={nodeChangeHandler}>Save</button>
          </div>
				</div>
			</div>
		</div>
	)
}

export default App
