const listUDM = [
  {id: '1', name: 'Riwayat Jabatan'},
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

for(i=0; i<listUDM.length; i++){
  var title = listUDM[i].name;
  document.getElementById("loopHere").innerHTML += ' <div class="list-item"> <div class="me-3">  <i class="bi bi-grid-3x3-gap-fill"></i> </div><div class="">'+title+'</div><div class="ms-auto"><i class="bi bi-chevron-right"></i></div></div>'
}

