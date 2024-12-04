import { useAllNames } from "./hooks/api/use-all-names";

export default function Nombres() {

    const { isLoading, names, refetch } = useAllNames();

  return (
    <>
        <button onClick={refetch} disabled={isLoading}>Recargar</button>
        {
            isLoading && <p>Cargando...</p>
        }
        <ul>
            {names?.map((nombre) => (
                <li>{nombre}</li>
            ))}
        </ul>
    </>
  );
}
