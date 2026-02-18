//se ejecuta cuando se hace clic en boton en ejs
//fetch es una func del navegador para enviar peticiones http al servidor
function voteTopic(id) {
  fetch(`/topics/${id}/vote`, { method: "POST" })
    .then(() => location.reload());    //cuando el back responde, recarga la pag para ver el voto actualizado
}

function voteLink(id) {
  fetch(`/links/${id}/vote`, { method: "POST" })
    .then(() => location.reload());    //location representa la url actual del navegador
}

function deleteTopic(id) {
  fetch(`/topics/${id}`, { method: "DELETE" })
    .then(() => location.reload());
}

function deleteLink(id) {
  fetch(`/links/${id}`, { method: "DELETE" })
    .then(() => location.reload());
}

function showEditTopic(id) {      //se ejecuta en el navegador y no en el servidor
  document.getElementById(`edit-topic-${id}`).style.display = "block";  //doc es un objeto que representa el html, para acceder al contenido de la pag
}                         //Busca un elemento html tenga ese atributo y devuelve el div
                          //con block se muestra ese elemento
function updateTopic(id) {
  const value = document.getElementById(`input-topic-${id}`).value;    //Se ejecuta cuando haces click en guardar

  fetch(`/topics/${id}`, {     //hace una peticion http
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: value })    //se conviertes el objeto js en texto json
  }).then(() => location.reload());
}

function showEditLink(id) {    //para mostrar el input oculto
  document.getElementById(`edit-link-${id}`).style.display = "block";
}

function updateLink(id) {
  const value = document.getElementById(`input-link-${id}`).value;

  fetch(`/links/${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: value })
  }).then(() => location.reload());
}
