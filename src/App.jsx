import { useState } from "react";
import { supabase } from "./supabaseClient";
import "./App.css";

export default function App() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [mac, setMac] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    const { error } = await supabase.from("dispositivos").insert([
      {
        nombres,
        apellidos,
        mac,
        tipo,
        fechaRegistro: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase error:", error.message);
      setMensaje("❌ Error al registrar: " + error.message);
    } else {
      setMensaje("✅ Registro guardado correctamente");
      setNombres("");
      setApellidos("");
      setMac("");
      setTipo("");
    }
  };

  return (
    <div className="fondo">
      <div className="form-card">
        <h1>Registro de Direccion Mac</h1>
        <p className="subtitulo">Área de Sistemas - Agroexport</p>

        <form onSubmit={handleSubmit}>
          <label>Nombres</label>
          <input
            type="text"
            placeholder="Ingrese nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            required
          />

          <label>Apellidos</label>
          <input
            type="text"
            placeholder="Ingrese apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />

          <label>MAC</label>
          <input
            type="text"
            placeholder="Ejemplo: 00:1B:44:11:3A:B7"
            value={mac}
            onChange={(e) => setMac(e.target.value)}
            required
          />

          <label>Tipo</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            required
          >
            <option value="">Seleccione un tipo</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">PC</option>
            <option value="Celular">Celular</option>
            <option value="Tablet">Tablet</option>
          </select>

          <button type="submit" className="btn-guardar">
            Guardar Registro
          </button>
        </form>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>
      <footer>© {new Date().getFullYear()} - Sistema Interno</footer>
    </div>
  );
}





