import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class AgGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowHeight: 70,
      defaultColDef: {
        cellStyle: { "white-space": "normal" },
        autoHeight: true,
        sortable: true,
        filter: true,
        resizable: true,
      },
      columnDefs: [
        {
          headerName:
            "Make Toyota. ag-Grid is the industry standard for React Enterprise Applications. Developers using ag-Grid are building applications that would not be possible if ag-Grid did not exist.",
          field: "make",
          width: 500,
          // checkboxSelection: true,
        },
        {
          headerName: "Model",
          field: "model",
          width: 500,
        },
        {
          headerName: "Price",
          field: "price",
          width: 500,
        },
      ],
      rowData: [
        {
          make:
            "Toyota. ag-Grid is the industry standard for React Enterprise Applications. Developers using ag-Grid are building applications that would not be possible if ag-Grid did not exist.",
          model: "Celica",
          price: 35000,
        },
        {
          make: "Ford",
          model: "Mondeo",
          price: 32000,
        },
        {
          make: "Porsche",
          model: "Boxter",
          price: 72000,
        },
      ],
    };
  }

  onColumnResized = (params) => {
    params.api.resetRowHeights();
  };

  onButtonClick = (e) => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + " " + node.model)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  render() {
    return (
      <div
        className='ag-theme-balham'
        style={{
          height: "250px",
        }}
      >
        <button onClick={this.onButtonClick}>Get selected rows</button>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          defaultColDef={this.state.defaultColDef}
          rowData={this.state.rowData}
          rowSelection='multiple'
          immutableData
          getRowNodeId={(data) => data.price}
          rowHeight={this.state.rowHeight}
          onGridReady={(params) => (this.gridApi = params.api)}
          onColumnResized={this.onColumnResized.bind(this)}
        ></AgGridReact>
      </div>
    );
  }
}

export default AgGrid;
