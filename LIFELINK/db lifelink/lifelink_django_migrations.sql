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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'Admin_module','0001_initial','2026-06-24 17:14:23.094187'),(2,'contenttypes','0001_initial','2026-06-24 17:14:23.196982'),(3,'auth','0001_initial','2026-06-24 17:14:24.248330'),(4,'admin','0001_initial','2026-06-24 17:14:24.449944'),(5,'admin','0002_logentry_remove_auto_add','2026-06-24 17:14:24.460971'),(6,'admin','0003_logentry_add_action_flag_choices','2026-06-24 17:14:24.502941'),(7,'contenttypes','0002_remove_content_type_name','2026-06-24 17:14:24.690234'),(8,'auth','0002_alter_permission_name_max_length','2026-06-24 17:14:24.781420'),(9,'auth','0003_alter_user_email_max_length','2026-06-24 17:14:24.814188'),(10,'auth','0004_alter_user_username_opts','2026-06-24 17:14:24.825500'),(11,'auth','0005_alter_user_last_login_null','2026-06-24 17:14:24.905654'),(12,'auth','0006_require_contenttypes_0002','2026-06-24 17:14:24.910424'),(13,'auth','0007_alter_validators_add_error_messages','2026-06-24 17:14:24.922539'),(14,'auth','0008_alter_user_username_max_length','2026-06-24 17:14:25.020045'),(15,'auth','0009_alter_user_last_name_max_length','2026-06-24 17:14:25.115003'),(16,'auth','0010_alter_group_name_max_length','2026-06-24 17:14:25.143020'),(17,'auth','0011_update_proxy_permissions','2026-06-24 17:14:25.157117'),(18,'auth','0012_alter_user_first_name_max_length','2026-06-24 17:14:25.442248'),(19,'sessions','0001_initial','2026-06-24 17:14:25.490442'),(20,'blood_request','0001_initial','2026-06-29 08:06:03.396576'),(22,'patient','0001_initial','2026-06-29 08:06:03.423712'),(23,'patient','0002_remove_patient_address','2026-06-29 08:06:03.459858'),(24,'Admin_module','0002_adminmodule_department_adminmodule_hospital_name_and_more','2026-06-29 10:09:13.094740'),(25,'blood_request','0002_bloodrequest_created_at_and_more','2026-06-29 10:31:34.140217'),(26,'donor','0002_remove_donor_address_remove_donor_email_and_more','2026-06-29 10:31:34.250695'),(27,'patient','0003_patient_created_at','2026-06-29 11:42:28.062370'),(28,'blood_request','0003_remove_bloodrequest_created_at','2026-06-29 11:47:55.681740'),(29,'donor','0001_initial','2026-06-29 13:18:52.361302'),(30,'patient','0004_remove_patient_patient_id_patient_city_and_more','2026-06-29 17:40:52.837132');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
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
