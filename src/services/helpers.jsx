import swal from "sweetalert";

export const handleError = (error, action) => {
  if (!error) {
    return swal(
      "Algo de errado aconteceu!",
      "Verifique sua conexão de internet.",
      "error"
    );
  }

  const { data = "" } = error;
  let message = "";
  let status = "";

  if (data) {
    status = data.status;

    const errorMessage = Object.keys(data.errors).map(key => data.errors[key]);
    // eslint-disable-next-line no-useless-escape
    message = `${status} - ${errorMessage.join(",").replace(/\,/, ", ")}`;
  } else {
    status = error.status;
  }

  switch (status) {
    case 400:
      message = message ? message : "Verifique os dados enviados";
      break;
    case 409:
      break;
    case 401:
      break;
    case 404:
      console.log("Não encontrado");
      break;
    case 500:
      message = "Erro no servidor";
      break;
    default:
      message = "Erro desconhecido!";
  }

  if (message) swal("Algo de errado aconteceu!", message, "error");

  if (action) action();
};

export function handleErrorForm(method, error) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (!error?.response) error = { response: { data: false, status: false } };
  const { data, status } = error?.response;
  let message = "";

  if (data) {
    const errorMessage = Object.keys(data.errors).map(key => data.errors[key]);
    // eslint-disable-next-line no-useless-escape
    message =
      typeof errorMessage[0] === "object"
        ? errorMessage[0][0]
        : // eslint-disable-next-line no-useless-escape
          errorMessage.join(",").replace(/\,/, ", ");
  }

  switch (status) {
    case 400:
      message = message ?? "Verifique os dados enviados";
      break;
    case 401:
      break;
    case 404:
      message = "Nenhum registro encontrado!";
      break;
    case 409:
      message = message ?? "Conflito na atualização do registro!";
      break;
    case 500:
      message = message ?? "Erro no servidor";
      break;
    default:
      message = "Erro desconhecido!";
      break;
  }

  if (message) return `${method} (${status}) - ${message}`;
}

export default function removerAcentos(newStringComAcento) {
  let string = newStringComAcento.toLowerCase();
  let mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g,
    n: /\xF1/g
  };

  for (let letra in mapaAcentosHex) {
    let expressaoRegular = mapaAcentosHex[letra];
    string = string.replace(expressaoRegular, letra);
  }

  return string;
}

export function removerAcentosEspacos(newStringComAcentoEspaco) {
  return newStringComAcentoEspaco.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
}
