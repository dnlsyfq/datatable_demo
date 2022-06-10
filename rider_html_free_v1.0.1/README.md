
# file:///C:/Users/dania/Code/datatable/datatable_demo/rider_html_free_v1.0.1/theme/dist/documentation/getting-started/build/gulp.html


```
    <link href="assets/plugins/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css"/>
                           <table id="kt_datatable_example_1" class="table table-row-bordered gy-5">
                                <thead>
                                <tr class="fw-bold fs-6 text-muted">
                                    <th>Name</th>
									<th>Email</th>
									<th>Company</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Datetime</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                           </table>
    <script src="assets/plugins/custom/datatables/datatables.bundle.js"></script>
    <script src="assets/js/custom/general/datatable.js"></script>
```

```
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
```