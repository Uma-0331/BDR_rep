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
-- Table structure for table `blood_request_bloodrequest`
--

DROP TABLE IF EXISTS `blood_request_bloodrequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blood_request_bloodrequest` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(100) NOT NULL,
  `blood_group` varchar(5) NOT NULL,
  `units_required` int unsigned NOT NULL,
  `city` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `blood_request_bloodrequest_units_required_5dfcd46f_check` CHECK ((`units_required` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blood_request_bloodrequest`
--

LOCK TABLES `blood_request_bloodrequest` WRITE;
/*!40000 ALTER TABLE `blood_request_bloodrequest` DISABLE KEYS */;
INSERT INTO `blood_request_bloodrequest` VALUES (1,'Ram','O+ve ',4,'Kanchipuram','Rejected'),(2,'Joe','A+ve',3,'chennai','Approved'),(3,'John','B+ve',5,'Chennai','Rejected'),(5,'Ram','O+ve ',2,'Kanchipuram','Pending'),(6,'Ram','B+',1,'Unknown','Pending'),(7,'jack','A+',1,'Unknown','Pending'),(8,'ravi','AB+',6,'Chennai','Approved'),(9,'ravi','AB+',6,'Chennai','Approved'),(10,'Shiv','B+',7,'chennai','Pending'),(11,'ravi','AB+',6,'Chennai','Approved');
/*!40000 ALTER TABLE `blood_request_bloodrequest` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-30  0:05:13
