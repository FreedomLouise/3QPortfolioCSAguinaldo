let acctString = localStorage.getItem("accounts");
let accountList = acctString ? JSON.parse(acctString) : {};

const form = document.getElementById("dForm");

form.addEventListener("submit", function (e) {
  if (!confirm("Sure You Want To Save Your Work?")) {
    e.preventDefault();
    return;
  }

  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());

  accountList[obj.uname] = {
    bday: obj.bday,
    email: obj.email,
    num: obj.num,
    grade: obj.grade,
    idkwhattheycalled: obj.idkwhattheycalled,
    club: obj.club,
    about: obj.about
  };

  localStorage.setItem("accounts", JSON.stringify(accountList));
});
