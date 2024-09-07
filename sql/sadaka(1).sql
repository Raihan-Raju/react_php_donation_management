-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2024 at 08:28 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sadaka`
--

-- --------------------------------------------------------

--
-- Table structure for table `donnetions`
--

CREATE TABLE `donnetions` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donnetions`
--

INSERT INTO `donnetions` (`id`, `amount`, `firstName`, `lastName`, `email`, `phone`, `address`, `note`) VALUES
(25, '32242.00', 'fa', 'dfasd', 'ds@dfg.com', '232423', 'dhaka', 'sdfas'),
(33, '0.00', 'akter', '', 'fd@yahoo.com', '01687070714', 'Hajinogar', 'donrhhhhhhhhhh'),
(34, '0.00', 'akter', '', 'email@gm', '01687070714', 'Hajinogar', 'bfg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `phone` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `phone`, `email`, `username`, `address`, `password`, `photo`) VALUES
(6, 'sdf', 'sdf', 'dsg', 'sdf', 'sdf', 'Aysha Fashion facebook cover.jpg'),
(7, '01687070714', 's@gmail.com', 'ffffffffff', 'Hajinogar\r\nDemra', '123', 'usestate-4.png'),
(8, '01687070714', 'farha@gmail.com', 'farhanasdf admin', 'undefined', '123', 'dolly-tag1.jpg'),
(9, '01687070714', 'dddddd', 'ttttttttttt 5555555555', 'undefined', '2222', 'star.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `volunteers`
--

CREATE TABLE `volunteers` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `volunteers`
--

INSERT INTO `volunteers` (`id`, `fname`, `lname`, `email`, `phone`, `address`, `note`) VALUES
(1, 'raihan', 'raju', 'raju@gmail.com', '01545444', 'lalbagh', 'goooood'),
(2, 'raihan', 'raju', 'raju@gmail.com', '01545444', 'lalbagh', 'goooood');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donnetions`
--
ALTER TABLE `donnetions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `volunteers`
--
ALTER TABLE `volunteers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donnetions`
--
ALTER TABLE `donnetions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `volunteers`
--
ALTER TABLE `volunteers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
