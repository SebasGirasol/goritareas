function App() {

    async function crearRutina() {

        console.log("React: haciendo llamada");

        try {

            const resultado =
                await window.api.rutina.crear({
                    nombre: "Rutina de prueba"
                });

            console.log("React: resultado", resultado);

        } catch (error) {

            console.error("React: error", error);

        }
    }

    return (
        <>
            <button onClick={crearRutina}>
                Crear rutina
            </button>
        </>
    );
}

export default App;