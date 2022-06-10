// $("#kt_datatable_example_1").DataTable();

// $("#kt_datatable_example_1").DataTable({
//     "scrollY":"500px",
//     "scrollCollapse":true,
//     "paging":false,
//     "dom":"<'table-responsive'tr>",
//     "order":[],
//     "columnDefs":[
//         {orderable: false, targets: 0},
//         {orderable: false, targets: 3},
//         {orderable: false, targets: 4},
//         {orderable: false, targets: 5}
//     ]
// });

$("#kt_datatable_example_1").DataTable({
    "orders":[],
    "ajax":{
        url:"https://preview.keenthemes.com/api/datatables.php" // endpoint
    },
    "columns":[
        {data:'Name'},
        {data:'Email'},
        {data:'Company'},
        {data:'City'},
        {data:'Country'},
        {data:'Datetime'},

    ],
    "columnDefs":[
        {className:'w-150px',target:5}
    ]
});

