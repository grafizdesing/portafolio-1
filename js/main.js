

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "USA",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(235, 22, 22, .7)"
                },
                {
                    label: "UK",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(235, 22, 22, .5)"
                },
                {
                    label: "AU",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(235, 22, 22, .3)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Salse",
                    data: [15, 30, 55, 45, 70, 65, 85],
                    backgroundColor: "rgba(235, 22, 22, .7)",
                    fill: true
                },
                {
                    label: "Revenue",
                    data: [99, 135, 170, 130, 190, 180, 270],
                    backgroundColor: "rgba(235, 22, 22, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            datasets: [{
                label: "Salse",
                fill: false,
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["Italy", "France", "Spain", "USA", "Argentina"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24, 15]
            }]
        },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

/////////////////////////////////////////   VENTANA NAVEGADOR DE IMAGENES ///////////////////////

// Función para mostrar las flechas cuando se abre el modal
function showArrows() {
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
}

// Función para ocultar las flechas cuando se cierra el modal
function hideArrows() {
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
}

// Función para mostrar la imagen en el modal
function showImage(img) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = img.src;
    showArrows(); // Mostrar las flechas cuando se abre el modal
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    hideArrows(); // Ocultar las flechas cuando se cierra el modal
}

// Función para mostrar la imagen anterior
function prevImage() {
    var modalImg = document.getElementById('modalImage');
    var currentIndex = getCurrentIndex(modalImg);
    var images = document.querySelectorAll('.gallery img');
    var newIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[newIndex].src;
}

// Función para mostrar la siguiente imagen
function nextImage() {
    var modalImg = document.getElementById('modalImage');
    var currentIndex = getCurrentIndex(modalImg);
    var images = document.querySelectorAll('.gallery img');
    var newIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[newIndex].src;
}

// Función auxiliar para obtener el índice de la imagen actual
function getCurrentIndex(img) {
    var images = document.querySelectorAll('.gallery img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].src === img.src) {
            return i;
        }
    }
    return -1;
}

// Funciones para mostrar todas las imágenes o filtrar por categoría
function showAll() {
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
        image.style.display = 'block';
    });
}

function filterImages(category) {
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
        if (image.dataset.category === category) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

/////////////////    GRAFIZ    ////////////////////////////

/////////////////    Datatable   /////////////////////

const dataTable = document.getElementById('dataTable');
const tableBody = document.getElementById('tableBody');
const pagination = document.getElementById('pagination');
const searchInput = document.getElementById('searchInput');

// Datos de ejemplo
const data = [
  { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 30, email: 'juan@example.com' },
  { id: 2, nombre: 'María', apellido: 'González', edad: 25, email: 'maria@example.com' },
  { id: 3, nombre: 'Carlos', apellido: 'López', edad: 35, email: 'carlos@example.com' },
  // Agrega más datos según sea necesario
];

const itemsPerPage = 10;
let currentPage = 1;

// Función para renderizar la tabla con los datos proporcionados
function renderTable(data) {
  tableBody.innerHTML = '';
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.nombre}</td>
      <td>${item.apellido}</td>
      <td>${item.edad}</td>
      <td>${item.email}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Función para generar los botones de paginación
function renderPagination(data) {
  pagination.innerHTML = '';
  const pageCount = Math.ceil(data.length / itemsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      renderTable(data);
      renderPagination(data);
    });
    pagination.appendChild(button);
  }
}

// Función para filtrar los datos según el término de búsqueda
function filterData(term) {
  return data.filter(item => {
    return Object.values(item).some(value =>
      value.toString().toLowerCase().includes(term.toLowerCase())
    );
  });
}

// Función para manejar el evento de búsqueda
searchInput.addEventListener('input', () => {
  const term = searchInput.value.trim();
  const filteredData = filterData(term);
  currentPage = 1;
  renderTable(filteredData);
  renderPagination(filteredData);
});

// Renderiza la tabla y la paginación al cargar la página
renderTable(data);
renderPagination(data);

///////////////////////// menu ////////////////////////////

$('section.awSlider .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});

///////////////////////////////////////////////