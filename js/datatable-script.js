function main(){
	//for faq.html
	$('faq-table').DataTable();
	
	
	//I'll be honest, I copied this and changed it accordingly from
	//https://datatables.net/examples/api/multi_filter.html
	
	$('#faq-table tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#faq-table').DataTable();
 
    // Apply the search
    table.columns().every( function () {
        var that = this;
 
        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
}
$(document).ready(main);