
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    
    labels: ['Integritas', 'Kerjasama', 'Komunikasi', 'Orientasi pada hasil', 'Pelayanan publik', 'Pengembangan diri <br> & orla', 'Mengelola perubahan', 'Pengambilan keputusan', 'Perekat bangsa'],
    datasets: [{
      label: 'Unit Kerja',
      data: [4.5, 4.5, 3, 10, 4, 2, 6, 5, 8],
      backgroundColor: [
        'rgba(225,241,244,1)'
      ],
      
      borderColor: [
        'rgba(29,186,212,1)'
      ],
      borderWidth: 3
    },{
      label: 'JPT',
      data: [8, 8, 3, 4, 5, 6, 7, 8, 10],
      backgroundColor: [
        'rgba(238,227,249,1)'
      ],
      borderColor: [
        'rgba(179,103,255,1)'
      ],
      borderWidth: 3
    }]
  },
  options: {
    label:{
      display: false
    },
    elements:{
      porint:{
        radius: 0,
      }
    },
    scaleShowLabels: false,
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display:false
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display:false
        }
      }]
    }
  }
});