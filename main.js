var columnDefs = [
    {headerName: 'Nom usuel', field: 'name', sortable: true, filter: true, rowGroup: true, editable: true},
    {headerName: 'Description et Observation', field: 'description', sortable: true, filter: true, editable: true},
    {headerName: 'Progression', field: 'progress', sortable: true, filter: true, editable: true},
    {headerName: 'Typologie', field: 'typology', sortable: true, filter: true, editable: true},
    {headerName: 'Approbation', field: 'approval', sortable: true, filter: true, editable: true},
    {headerName: 'Domaine', field: 'domain', sortable: true, filter: true, editable: true},
    {headerName: 'Typologie SI', field: 'sitypology', sortable: true, filter: true, editable: true},
    {headerName: 'Localisation', field: 'location', sortable: true, filter: true, editable: true},
    {headerName: 'Entité', field: 'entity', sortable: true, filter: true, editable: true},
    {headerName: 'Technologie', field: 'technology', sortable: true, filter: true, editable: true},
    {headerName: 'Network', field: 'name', sortable: true, filter: true, editable: true},
];

var rowData = [
    {name: 'Griffon', description: 'Véhicule terrestre', progress: 'En cours', typology: 'AY-21-3', approval:'oui', domain:'SIS', sitypology:'SII', location: 'Bourges', entity:'Requin', technology:'arme à munition solide', name:'Griffon'},
    {name: 'Caesar', description: 'Véhicule terrestre', progress: 'Annulé', typology: 'S-117', approval:'oui', domain:'SSE', sitypology:'SII', location: 'Paris', entity:'Licorne', technology:'arme à munition solide', name:'Caesar'},
    {name: 'Hammer', description: 'Véhicule aérien', progress: 'Terminé', typology: 'EP-2', approval:'Non', domain:'TBTT', sitypology:'SII', location: 'Londres', entity:'Magie', technology:'Hélicoptère', name:'Hammer'},
    {name: 'Mjollnir', description: 'Véhicule aérien', progress: 'En cours de progression', typology: '63-63', approval:'oui', domain:'TRTT', sitypology:'SII', location: 'Pékin', entity:'Renard', technology:'Avion ultra sonique', name:'Mjollnir'},
    {name: 'Kraken', description: 'Véhicule marin', progress: 'En cours de production', typology: 'R2-D2', approval:'Non', domain:'ARC170', sitypology:'SII', location: 'Moscou', entity:'Dragon', technology:'Frégate', name:'Kraken'},
    {name: 'Jormundgand', description: 'Véhicule marin', progress: 'En cours', typology: 'Z6PO', approval:'En cours de validation', domain:'MC80', sitypology:'SII', location: 'Washingtown DC', entity:'Manager', technology:'Croiseur', name:'Jormundgand'},

    {name: 'Griffon', description: 'Véhicule terrestre', progress: 'En cours', typology: 'AY-21-3', approval:'oui', domain:'SIS', sitypology:'SII', location: 'Bourges', entity:'Requin', technology:'arme à munition solide', name:'Griffon'},
    {name: 'Caesar', description: 'Véhicule terrestre', progress: 'Annulé', typology: 'S-117', approval:'oui', domain:'SSE', sitypology:'SII', location: 'Paris', entity:'Licorne', technology:'arme à munition solide', name:'Caesar'},
    {name: 'Hammer', description: 'Véhicule aérien', progress: 'Terminé', typology: 'EP-2', approval:'Non', domain:'TBTT', sitypology:'SII', location: 'Londres', entity:'Magie', technology:'Hélicoptère', name:'Hammer'},
    {name: 'Mjollnir', description: 'Véhicule aérien', progress: 'En cours de progression', typology: '63-63', approval:'oui', domain:'TRTT', sitypology:'SII', location: 'Pékin', entity:'Renard', technology:'Avion ultra sonique', name:'Mjollnir'},
    {name: 'Kraken', description: 'Véhicule marin', progress: 'En cours de production', typology: 'R2-D2', approval:'Non', domain:'ARC170', sitypology:'SII', location: 'Moscou', entity:'Dragon', technology:'Frégate', name:'Kraken'},
    {name: 'Jormundgand', description: 'Véhicule marin', progress: 'En cours', typology: 'Z6PO', approval:'En cours de validation', domain:'MC80', sitypology:'SII', location: 'Washingtown DC', entity:'Manager', technology:'Croiseur', name:'Jormundgand'},

    {name: 'Griffon', description: 'Véhicule terrestre', progress: 'En cours', typology: 'AY-21-3', approval:'oui', domain:'SIS', sitypology:'SII', location: 'Bourges', entity:'Requin', technology:'arme à munition solide', name:'Griffon'},
    {name: 'Caesar', description: 'Véhicule terrestre', progress: 'Annulé', typology: 'S-117', approval:'oui', domain:'SSE', sitypology:'SII', location: 'Paris', entity:'Licorne', technology:'arme à munition solide', name:'Caesar'},
    {name: 'Hammer', description: 'Véhicule aérien', progress: 'Terminé', typology: 'EP-2', approval:'Non', domain:'TBTT', sitypology:'SII', location: 'Londres', entity:'Magie', technology:'Hélicoptère', name:'Hammer'},
    {name: 'Mjollnir', description: 'Véhicule aérien', progress: 'En cours de progression', typology: '63-63', approval:'oui', domain:'TRTT', sitypology:'SII', location: 'Pékin', entity:'Renard', technology:'Avion ultra sonique', name:'Mjollnir'},
    {name: 'Kraken', description: 'Véhicule marin', progress: 'En cours de production', typology: 'R2-D2', approval:'Non', domain:'ARC170', sitypology:'SII', location: 'Moscou', entity:'Dragon', technology:'Frégate', name:'Kraken'},
    {name: 'Jormundgand', description: 'Véhicule marin', progress: 'En cours', typology: 'Z6PO', approval:'En cours de validation', domain:'MC80', sitypology:'SII', location: 'Washingtown DC', entity:'Manager', technology:'Croiseur', name:'Jormundgand'},

    {name: 'Griffon', description: 'Véhicule terrestre', progress: 'En cours', typology: 'AY-21-3', approval:'oui', domain:'SIS', sitypology:'SII', location: 'Bourges', entity:'Requin', technology:'arme à munition solide', name:'Griffon'},
    {name: 'Caesar', description: 'Véhicule terrestre', progress: 'Annulé', typology: 'S-117', approval:'oui', domain:'SSE', sitypology:'SII', location: 'Paris', entity:'Licorne', technology:'arme à munition solide', name:'Caesar'},
    {name: 'Hammer', description: 'Véhicule aérien', progress: 'Terminé', typology: 'EP-2', approval:'Non', domain:'TBTT', sitypology:'SII', location: 'Londres', entity:'Magie', technology:'Hélicoptère', name:'Hammer'},
    {name: 'Mjollnir', description: 'Véhicule aérien', progress: 'En cours de progression', typology: '63-63', approval:'oui', domain:'TRTT', sitypology:'SII', location: 'Pékin', entity:'Renard', technology:'Avion ultra sonique', name:'Mjollnir'},
    {name: 'Kraken', description: 'Véhicule marin', progress: 'En cours de production', typology: 'R2-D2', approval:'Non', domain:'ARC170', sitypology:'SII', location: 'Moscou', entity:'Dragon', technology:'Frégate', name:'Kraken'},
    {name: 'Jormundgand', description: 'Véhicule marin', progress: 'En cours', typology: 'Z6PO', approval:'En cours de validation', domain:'MC80', sitypology:'SII', location: 'Washingtown DC', entity:'Manager', technology:'Croiseur', name:'Jormundgand'},

    {name: 'Griffon', description: 'Véhicule terrestre', progress: 'En cours', typology: 'AY-21-3', approval:'oui', domain:'SIS', sitypology:'SII', location: 'Bourges', entity:'Requin', technology:'arme à munition solide', name:'Griffon'},
    {name: 'Caesar', description: 'Véhicule terrestre', progress: 'Annulé', typology: 'S-117', approval:'oui', domain:'SSE', sitypology:'SII', location: 'Paris', entity:'Licorne', technology:'arme à munition solide', name:'Caesar'},
    {name: 'Hammer', description: 'Véhicule aérien', progress: 'Terminé', typology: 'EP-2', approval:'Non', domain:'TBTT', sitypology:'SII', location: 'Londres', entity:'Magie', technology:'Hélicoptère', name:'Hammer'},
    {name: 'Mjollnir', description: 'Véhicule aérien', progress: 'En cours de progression', typology: '63-63', approval:'oui', domain:'TRTT', sitypology:'SII', location: 'Pékin', entity:'Renard', technology:'Avion ultra sonique', name:'Mjollnir'},
    {name: 'Kraken', description: 'Véhicule marin', progress: 'En cours de production', typology: 'R2-D2', approval:'Non', domain:'ARC170', sitypology:'SII', location: 'Moscou', entity:'Dragon', technology:'Frégate', name:'Kraken'},
    {name: 'Jormundgand', description: 'Véhicule marin', progress: 'En cours', typology: 'Z6PO', approval:'En cours de validation', domain:'MC80', sitypology:'SII', location: 'Washingtown DC', entity:'Manager', technology:'Croiseur', name:'Jormundgand'},

];

var autoGroupColumnDef = {
    headerName: 'Nom usuel',
    field: 'name',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true,
    }
}

var gridOptions = {

    columnDefs: columnDefs,
    autoGroupColumnDef: autoGroupColumnDef,
    rowData: rowData,
    rowSelection: 'multiple',
    rowDeselection: true,
    autocomplete:true,
    groupSelectsChildren: true,
    editable: true,
    resizable: true,
    filter: true,
    sortable: true,
    onSelectionChanged: onSelectionChanged,
};

function ObjectCellRenderer() {
}ObjectCellRenderer.prototype.init = function (params) {
    this.span = document.createElement('span');
	this.refresh(params);
};

ObjectCellRenderer.prototype.refresh = function(params) {
	this.span.innerHTML = '';
	var nb = 1;
	if(params.value) {
		var val = '';
		val = params.value.val.split(';');
		nb = val.length;
		console.log("Nb=" + nb);
		val = val.join('<br>');
		this.span.innerHTML = val;
		params.node.setRowHeight(25*nb);
		params.api.onRowHeightChanged();
	}
}

ObjectCellRenderer.prototype.getGui = function () {
    return this.span;
};

    function ObjectEditor() {}var onKeyDown = function(event) {
        var key = event.which || event.keyCode;
        if (key == 37 ||  // left
            key == 39 || // right
            key == 38 || // up
            key == 40 || // down
            key == 9 ) {  // tab
            event.stopPropagation();
        }
    }

    function onSelectionChanged() {
        var selectedRows = gridOptions.api.getSelectedRows();
        document.querySelector('#selectedRows').innerHTML =
          selectedRows.length === 1 ? selectedRows[0].description : '';
      }

    function onQuickFilterChanged() {
        gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value);
    }

var eGridDiv = document.querySelector('#myGrid');

new agGrid.Grid(eGridDiv, gridOptions);

document.querySelector('#addRow').addEventListener("click", function() {
    gridOptions.api.addItems([{}]);
})

// agGrid.simpleHttpRequest ({
//     url: 'https://api.myjson.com/bins/ly7d1'
// })
//     .then(function(data){
//         gridOptions.api.setRowData(data);
//     })

// function getSelectedRows() {
//     var selectedNodes = gridOptions.api.getSelectedNodes();
//     var selectedData = SelectedNodes.map(node => node.data);
//     var selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
//     alert('Selected nodes: ' + selectedDataStringPresentation);
// }
