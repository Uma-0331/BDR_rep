-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: lifelink
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_module_adminmodule`
--

DROP TABLE IF EXISTS `admin_module_adminmodule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_module_adminmodule` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `admin_id` varchar(20) NOT NULL,
  `admin_name` varchar(100) NOT NULL,
  `admin_email` varchar(254) NOT NULL,
  `admin_phone` varchar(15) NOT NULL,
  `department` varchar(100) NOT NULL,
  `hospital_name` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_module_adminmodule`
--

LOCK TABLES `admin_module_adminmodule` WRITE;
/*!40000 ALTER TABLE `admin_module_adminmodule` DISABLE KEYS */;
INSERT INTO `admin_module_adminmodule` VALUES (1,'T01','UMA','uma@gmail.com','123456889','General','General','Active'),(2,'T02','MUKESH','mukesh@gmail.com','987654321','General','General','Active'),(3,'T03','KAAVIYA','kaaviya@gmail.com','998877667','General','General','Active'),(6,'ADM001','ANIKA','ANIKA@gmail.com','9876543210','General','General','Active'),(7,'ADM001','Uma','uma@gmail.com','9876543210','General','General','Active'),(8,'T01','UMA','umaumikaa@gmail.com','987654321','General','General','Active'),(9,'T01','Anika','umaumikaa@gmail.com','987654321','General','General','Active');
/*!40000 ALTER TABLE `admin_module_adminmodule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-29 19:16:45
