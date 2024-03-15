-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Mar 14, 2024 at 02:55 AM
-- Server version: 8.3.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `age` int NOT NULL,
  `gender` enum('ชาย','หญิง','ไม่ระบุ') CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `interests` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `age`, `gender`, `interests`, `description`) VALUES
(1, 'aaa', 'aaa', 22, 'หญิง', 'aaa', 'aaa'),
(3, 'bbb', 'bbb', 11, 'หญิง', 'bbb', 'bbb'),
(4, 'bbb', 'bbb', 11, 'หญิง', 'bbb', 'bbb'),
(5, 'bbb', 'bbb', 11, 'หญิง', 'bbb', 'bbb'),
(6, 'bbb', 'bbb', 11, 'หญิง', 'bbb', 'bbb'),
(7, 'uuu', 'uuu', 20, 'ชาย', 'uuu', 'uuu'),
(8, 'ข้อมูลใหม่', 'ข้อมูลใหม่', 30, 'ชาย', 'ข้อมูลใหม่', 'ข้อมูลใหม่'),
(10, 'ข้อมูลใหม่มาก', 'ข้อมูลใหม่มาก', 30, 'ชาย', 'ข้อมูลใหม่มาก', 'ข้อมูลใหม่มาก'),
(11, 'Archeron', 'Yomi', 23, 'หญิง', 'วิดีโอเกม', 'ifit'),
(12, 'ant', 'super', 26, 'ชาย', 'วิดีโอเกม', 'beru'),
(13, 'fffff', 'ffff', 15, 'ชาย', 'วิดีโอเกม', 'aaaaa'),
(14, 'ผม', 'เอง', 21, 'ชาย', 'การเมือง', 'ผมเอง'),
(15, 'เอง', 'ผม', 25, 'ชาย', 'หนังสือ, วิดีโอเกม, การเมือง', 'เองผม');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
