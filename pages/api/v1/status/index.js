function status(request, response) {
  response.status(200).json({ chave: "Tudo ok" });
}

export default status;
