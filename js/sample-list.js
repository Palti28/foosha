const listUDM = [
  {id: '1', name: 'Riwayat Jabatan', url:'riwayat-jabatan/list-riwayat-jabatan.html'},
  {id: '2', name: 'Riwayat Pendidikan'},
  {id: '3', name: 'Riwayat SKP'},
  {id: '4', name: 'Riwayat Diklat'},
  {id: '4', name: 'Riwayat Prestasi'},
  {id: '4', name: 'Riwayat Penghargaan'},
  {id: '4', name: 'Riwayat Kursus'},
  {id: '4', name: 'Riwayat Golongan'},
  {id: '4', name: 'Riwayat Keluarga'},
  {id: '4', name: 'Riwayat Peninjauan Masa Kerja'},
  {id: '4', name: 'Riwayat Pindah Instansi'},
  {id: '4', name: 'Riwayat CLTN'},
  {id: '4', name: 'Riwayat CPNS/PNS'},
  {id: '4', name: 'Riwayat Angka Kredit'},
  {id: '4', name: 'Riwayat Kesehatan'},
  {id: '4', name: 'Riwayat Profesi'},
  {id: '4', name: 'Riwayat Organisasi'},
  {id: '4', name: 'Riwayat Kepanitiaan'}
]

function navigateTo(here){
  console.log(here);
  window.location.href = here;
};

// goo = (e)=>{
//   e.preventDefault();
//   alert('hehe');
// }

const loopList = document.getElementById("loopHere");
const loopGrid = document.getElementById("loopGridHere");
if(document.body.contains(loopList)){
  for(i=0; i<listUDM.length; i++){
    var title = listUDM[i].name;
    var link = listUDM[i].url;
    loopList.innerHTML += ' <a class="list-item" href="'+link+'"> <div class="me-3">  <i class="bi bi-grid-3x3-gap-fill"></i> </div><div class="">'+title+'</div><div class="ms-auto"><i class="bi bi-chevron-right"></i></div></a>'
  }
}


if(document.body.contains(loopGrid)){
  for(i=0 ; i<listUDM.length; i++){
    var title = listUDM[i].name;
    var link = listUDM[i].url;
    loopGrid.innerHTML += '<div class="widget widget-light" ><div class="widget-body"><div class="widget-icon"><i class="bi bi-archive"></i></div><div class="pb-3">'+title+'</div></div></div>'
  }
}

function navigateTo(here){
  window.location.href = here
};
goo = ()=>{
  alert('hehe')
}