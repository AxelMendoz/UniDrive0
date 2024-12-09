import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { HiMiniHome } from "react-icons/hi2";
import { FaCarSide } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    console.log("Sesión cerrada");
    navigate("/login");
    setShowConfirm(false);
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          <img
            src="/Images/Foto-dashboard.jpeg"
            alt="Perfil"
            className="profile-img"
          />
          <h2 className="profile-name">Kiriko S.</h2>
          <Link to="/profile">
            <button className="profile-button">Mi Perfil</button>
          </Link>
        </div>

        <nav className="nav">
          <Link to="/dashboard-inicio" className="nav-link">
            <HiMiniHome size={20} />
            <span>Inicio</span>
          </Link>
          <Link to="/crear-ride" className="nav-link">
            <FaCarSide size={20} />
            <span>Iniciar viaje</span>
          </Link>
          <Link to="/historial-viajes" className="nav-link">
            <MdWorkHistory size={20} />
            <span>Historial de viajes</span>
          </Link>
        </nav>

        <div className="logout-section">
          <button className="logout-button" onClick={handleLogoutClick}>
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <header className="main-header">
          <h1>¡Qué bien verte de nuevo, Kiriko!</h1>
        </header>

        <section className="quote-and-image section">
          <h2>¡Esperamos tengas un excelente día!</h2>
          <h3>La frase del día:</h3>
          <p className="daily-quote">"El viaje más largo comienza con el primer paso." - Lao Tzu</p>
        </section>

        <section className="lugares-sugeridos">
          <h2>Viajes sugeridos</h2>
          <div className="image-container">
            <img src="\Images\UT.png" alt="Lugar 1" />
            <img src="\Images\Salle.png" alt="Lugar 2" />
            <img src="\Images\Anahuac.png" alt="Lugar 3" />
          </div>
        </section>

        <section className="additional-info section">
          <h3>Resumen de tu cuenta</h3>
          <p>
            <strong>Viajes realizados:</strong> 5
          </p>
          <p>
            <strong>Viajes tomados:</strong> 2
          </p>
        </section>
      </main>

      {showConfirm && (
        <div className="logout-confirmation-overlay">
          <div className="logout-confirmation">
            <p>¿Estás seguro de que deseas cerrar sesión?</p>
            <button className="confirm-button" onClick={confirmLogout}>
              Sí
            </button>
            <button className="cancel-button" onClick={cancelLogout}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
