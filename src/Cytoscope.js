
import React from 'react'
import Cytoscape from 'cytoscape';
import CytoscapeComponent from "react-cytoscapejs";
import COSEBilkent from 'cytoscape-cose-bilkent';

Cytoscape.use(COSEBilkent);

export class Mindmap extends React.Component {
  initListeners()  {
    this.cy.on('tap', 'node', event => {
      var node = event.target;
      console.log('tapped ' + node.id());
    })
  }
  componentWillUnmount() {
    console.log('remove listeners')
    if (this.cy) {
      this.cy.removeAllListeners()
    }
  }
  render() {

    const layout = { name: 'cose-bilkent' };

    return (
      <CytoscapeComponent
        // elements={elements}
        layout={layout}
        cy={cy => {
          this.cy = cy
          this.initListeners()
        }}
        stylesheet={[
          {
            selector: 'node1',
            style: {
              'background-color': '#7FB77E',
              'label': 'data(label)',
            }
          },
          {
            selector: 'node2',
            style: {
              'background-color': '#B1D7B4',
              'label': 'data(label)',
            }
          },
          {
            selector: 'node3',
            style: {
              'background-color': '#F7F6DC',
              'label': 'data(label)',
            }
          },
          {
            selector: 'edge',
            style: {
              'width': 1,
              'line-color': '#F7F6DC',
              'target-arrow-color': '#F7F6DC',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier'
            }
          }
        ]}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    );
  }
}