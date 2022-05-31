import { Connection, createConnection, getConnectionOptions } from "typeorm";

// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = "rentx"; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });
export default async (host = "database"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
      // Aqui nessa linha está sendo colocado uma verificação para a trabalhar com o BD de teste, no arquivo (package.json), no script de test incluir (NODE_ENV=test), para poder rodar o BD de teste.
    }),
  );
};
