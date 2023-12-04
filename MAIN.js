function actualizarFecha() {
    // Obtiene la fecha y hora actual
    var fechaFormateada = new Date().toLocaleString('ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // Utiliza formato AM/PM
    });

    // Muestra la fecha y hora en el elemento con el id "fecha"
    document.getElementById("fecha").innerHTML = fechaFormateada;
}
// Actualiza la fecha y hora cada segundo (1000 milisegundos)
setInterval(actualizarFecha, 1000);
// Llama a la función por primera vez para mostrar la fecha y hora inicial
actualizarFecha();



// Obtiene la fecha actual en formato ISO (YYYY-MM-DD)
var fechaActual = new Date().toISOString().split('T')[0];
// Establece la fecha actual como el valor por defecto del input
document.getElementById('select_date').value = fechaActual;



function controlarVisibilidad() {
    var selectValue = document.getElementById("select_TipoCon").value;

    var lbl_Teti = document.getElementById("lbl_Teti");
    var text_Teti = document.getElementById("text_Teti");
    var lbl_SucAge = document.getElementById("lbl_SucAge");
    var select_SucAge = document.getElementById("select_SucAge");

    // Configurar propiedades de visualización predeterminadas
    lbl_Teti.style.display = "block";
    text_Teti.style.display = "block";
    lbl_SucAge.style.display = "block";
    select_SucAge.style.display = "block";

    // Ajustar propiedades de visualización según el valor seleccionado
    if (selectValue === "2") {
        lbl_Teti.style.display = "none";
        text_Teti.style.display = "none";
    } else if (selectValue === "3") {
        lbl_Teti.style.display = "none";
        text_Teti.style.display = "none";
        lbl_SucAge.style.display = "none";
        select_SucAge.style.display = "none";
    }
}


// para controlar la visibilidad de las columnas
function controlarVisibilidadSwitch() {
    // Obtener el valor del interruptor
    var valorInterruptor = document.getElementById("Report_Detalle").checked;

    // Obtener todas las celdas en las columnas que deseas ocultar
    var columnasAOcultar = document.querySelectorAll('.columna5, .columna3');

    // Alternar la visibilidad de las celdas según el valor del interruptor
    columnasAOcultar.forEach(function(celda) {
        celda.style.display = valorInterruptor ? 'none' : 'table-cell';
    });
}


//
// function Export2Doc(element, filename = '') {
//     // Obtén el contenido HTML del elemento
//     var content = document.getElementById(element).innerHTML;

//     // Crea un contenedor temporal para el contenido y aplica estilos adicionales si es necesario
//     var tempDiv = document.createElement("div");
//     tempDiv.innerHTML = "<html><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>" + content + "</body></html>";

//     // Elimina estilos no deseados o conflictivos
//     var styleTags = tempDiv.getElementsByTagName("style");
//     for (var i = 0; i < styleTags.length; i++) {
//         styleTags[i].parentNode.removeChild(styleTags[i]);
//     }

//     // Obtén el HTML actualizado después de realizar cambios
//     var html = tempDiv.innerHTML;

//     // Crea un Blob con el contenido
//     var blob = new Blob(['\ufeff', html], {
//         type: 'application/msword'
//     });

//     // Crea un enlace de descarga
//     var downloadLink = document.createElement("a");
//     downloadLink.href = URL.createObjectURL(blob);
//     downloadLink.download = filename ? filename + '.doc' : 'document.doc';

//     // Simula un clic en el enlace para iniciar la descarga
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
// }

// EXCEL
function Export2Excel(element, filename = '') {
    var tableHtml = document.getElementById(element).outerHTML;

    var excelData = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"></head><body>';
    excelData += '<table>' + tableHtml + '</table>';
    excelData += '</body></html>';

    var blob = new Blob(['\ufeff', excelData], {
        type: 'application/vnd.ms-excel'
    });

    var url = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelData);

    filename = filename ? filename + '.xls' : 'document.xls';

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        downloadLink.href = url;
        downloadLink.download = filename;
        downloadLink.click();
    }

    document.body.removeChild(downloadLink);
}



// Crear un nuevo documento jsPDF

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js"></script> */}


// function exportarPDF() {
//     // Crear un nuevo documento jsPDF
//     var doc = new jsPDF();

//     // Obtener el contenido HTML del elemento con id 'content'
//     var elementHTML = document.getElementById('report_data');

//     // Configurar la posición y tamaño del contenido en el PDF
//     var margin = {
//         top: 15,
//         left: 15,
//         right: 15,
//         bottom: 15
//     };

//     // Convertir el contenido HTML a PDF
//     doc.fromHTML(elementHTML, margin.left, margin.top, {
//         'width': 170
//     });

//     // Guardar el PDF con un nombre específico
//     doc.save('documento.pdf');
// }

// <!-- Tu contenido HTML, incluida la tabla con id 'content' -->
//     <div id="content">
//         <table border="1">
//             <tr>
//                 <td>Columna 1</td>
//                 <td>Columna 2</td>
//             </tr>
//             <tr>
//                 <td>Dato 1</td>
//                 <td>Dato 2</td>
//             </tr>
//             <!-- Puedes agregar más filas según tus necesidades -->
//         </table>
//     </div>

//     <!-- Botón para exportar a PDF -->
//     <button onclick="exportarPDF()">Exportar a PDF</button>
