/** @format */

import React, { useState, useEffect, useCallback, useRef } from 'react'
import ReactFlow, { addEdge, MiniMap, Controls, Background, useNodesState, useEdgesState, ReactFlowProvider, useReactFlow } from 'react-flow-renderer'
import { useDispatch, useSelector } from "react-redux";
import { nodes as initialNodes, edges as initialEdges } from './elements'
import { v4 as uuidv4 } from 'uuid'

// 	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [])

// 	const onLoad = (reactFlowInstance) => {
// 		console.log('flow loaded:', reactFlowInstance)
// 		reactFlowInstance.fitView()
// 	}


const AddNodeOnEdgeDrop = ({ setIsModalOpen }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)


  const getId = () => uuidv4()
	const reactFlowWrapper = useRef(null)
	const connectingNodeId = useRef(null)
	const { project } = useReactFlow()

  const onNodeClick = (event) => {
    setIsModalOpen(true)
  }

	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [])

	const onConnectStart = useCallback((_, { nodeId }) => {
		connectingNodeId.current = nodeId
	}, [])

	const onConnectStop = useCallback((event) => {
    const targetIsPane = event.target.classList.contains('react-flow__pane')

    if (targetIsPane) {
      // we need to remove the wrapper bounds, in order to get the correct position
      const { top, left } = reactFlowWrapper.current.getBoundingClientRect()
      const id = getId()
      const newNode = {
        id,
        // we are removing the half of the node width (75) to center the new node
        position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
        data: { label: `` },
      }

      setNodes((nds) => nds.concat(newNode))
      setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }))
    }
  }, [project])

	return (
		<div className='flow-wrapper' ref={reactFlowWrapper}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
        onNodeClick={onNodeClick}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				onConnectStart={onConnectStart}
				onConnectStop={onConnectStop}
				fitView
				fitViewOptions={{
					padding: 3,
				}}
			/>
      <MiniMap/>
      <Controls/>
		</div>
	)
}

export const SpiderMap = ({ setIsModalOpen }) => {
	return (
		<ReactFlowProvider>
			<AddNodeOnEdgeDrop setIsModalOpen={setIsModalOpen}/>
		</ReactFlowProvider>
	)
}
