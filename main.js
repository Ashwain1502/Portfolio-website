let tablinks = document.querySelector('.tab-links');
let tabcontents = document.querySelector('.tab-contents');

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classlist.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classlist.remove("active-tab");
  }
  event.currentTarget.classlist.add("active-link");
  document.getElementById(tabname).classlist.add("active-tab");
}
