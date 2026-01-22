function voteTopic(id) {
  fetch(`/topics/${id}/vote`, { method: "POST" })
    .then(() => location.reload());
}

function voteLink(id) {
  fetch(`/links/${id}/vote`, { method: "POST" })
    .then(() => location.reload());
}

function deleteTopic(id) {
  fetch(`/topics/${id}`, { method: "DELETE" })
    .then(() => location.reload());
}

function deleteLink(id) {
  fetch(`/links/${id}`, { method: "DELETE" })
    .then(() => location.reload());
}

function showEditTopic(id) {
  document.getElementById(`edit-topic-${id}`).style.display = "block";
}

function updateTopic(id) {
  const value = document.getElementById(`input-topic-${id}`).value;

  fetch(`/topics/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: value })
  }).then(() => location.reload());
}

function showEditLink(id) {
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
