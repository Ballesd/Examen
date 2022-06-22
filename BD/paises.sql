-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-06-2022 a las 20:01:31
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `capital` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idioma` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `poblacion` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `nombre`, `capital`, `idioma`, `poblacion`, `created_at`, `updated_at`) VALUES
(1, 'Colombia', 'Bogotá', 'Español', 50000000, NULL, NULL),
(2, 'Venezuela', 'Caracas', 'Español', 28000000, NULL, NULL),
(3, 'España', 'Madrid', 'Español', 47000000, NULL, NULL),
(4, 'Portugal', 'Lisboa', 'portugués', 11000000, NULL, NULL),
(5, 'Rusia', 'Moscú', 'Ruso', 144000000, NULL, NULL),
(6, 'Finlandia', 'Helsinki', 'Fines', 5500000, NULL, NULL),
(7, 'Puerto Rico', 'San Juan', 'Español', 3100000, NULL, NULL),
(8, 'Cuba', 'La Habana', 'Español', 11300000, NULL, NULL),
(9, 'Sudán', 'Jartum', 'Árabe', 44000000, NULL, NULL),
(10, 'Brasil', 'Brasilia ', 'Portugués', 212000000, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
