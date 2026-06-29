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
-- Table structure for table `patient_patient`
--

DROP TABLE IF EXISTS `patient_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_patient` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(100) NOT NULL,
  `age` int DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `blood_group` varchar(10) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `city` varchar(100) DEFAULT NULL,
  `hospital` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_patient`
--

LOCK TABLES `patient_patient` WRITE;
/*!40000 ALTER TABLE `patient_patient` DISABLE KEYS */;
INSERT INTO `patient_patient` VALUES (2,'John',24,'Male','A+','1234567891','2026-06-29 11:42:28.020361',NULL,NULL),(4,'Joe',19,'Male','O+','1234567891','2026-06-29 11:42:28.020361',NULL,NULL),(5,'Ram',40,'Male','B+','1234567891','2026-06-29 11:44:48.821581',NULL,NULL),(10,'jack',29,'Male','A+','1234567891','2026-06-29 11:48:41.479124',NULL,NULL),(11,'ravi',NULL,'','AB+','','2026-06-29 17:51:02.605608','Chennai',''),(12,'ravi',NULL,'','AB+','','2026-06-29 17:59:13.325472','Chennai',''),(13,'Shiv',NULL,'','B+','','2026-06-29 18:16:53.863136','chennai',''),(14,'ravi',NULL,'','AB+','','2026-06-29 18:25:41.226372','Chennai','');
/*!40000 ALTER TABLE `patient_patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-30  0:05:14
