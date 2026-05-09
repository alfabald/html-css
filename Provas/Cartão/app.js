// "Base de dados"
const users = [
  {
    name: "Alfa Baldé",
    role: "Software Developer",
    id: "VDG-001",
    date: "2026"
  },
  {
    name: "Braima Seidi",
    role: "Manager",
    id: "VDG-002",
    date: "2026"
  },
   {
    name: "Sumae Embalo",
    role: "Software Developer",
    id: "VDG-003",
    date: "2026"
  }
];

// escolher usuário (simples)
const user = users[0];

// inserir dados no cartão
document.getElementById("name").innerText = user.name;
document.getElementById("role").innerText = user.role;
document.getElementById("id").innerText = "ID: " + user.id;
document.getElementById("date").innerText = "Emissão: " + user.date;

// gerar QR
document.getElementById("qr").src =
  "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=" +
  encodeURIComponent("https://vision.com/user/" + user.id);