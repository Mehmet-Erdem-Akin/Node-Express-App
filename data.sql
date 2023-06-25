-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: localhost    Database: ubybs23
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `ev_sahipleri`
--

DROP TABLE IF EXISTS `ev_sahipleri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ev_sahipleri` (
  `ev_sahibi_id` int NOT NULL AUTO_INCREMENT,
  `ev_sahibi_adi` varchar(100) DEFAULT NULL,
  `telefon` bigint DEFAULT NULL,
  PRIMARY KEY (`ev_sahibi_id`),
  UNIQUE KEY `ev_sahibi_id_UNIQUE` (`ev_sahibi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ev_sahipleri`
--

LOCK TABLES `ev_sahipleri` WRITE;
/*!40000 ALTER TABLE `ev_sahipleri` DISABLE KEYS */;
INSERT INTO `ev_sahipleri` VALUES (1,'AAAA Reis',4555454),(2,'AAAA Değişti',1111000),(3,'AAAA Reis2',23323232),(4,'AAAA 5555',1111000),(5,'AAAA Reis2',12345678912332),(6,'AAAA Reis2',32324323230000),(7,'AAAA Reis2',NULL),(9,'AAAA Reis4',32324323230000);
/*!40000 ALTER TABLE `ev_sahipleri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evler`
--

DROP TABLE IF EXISTS `evler`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evler` (
  `ev_id` int NOT NULL AUTO_INCREMENT,
  `ev_sahibi_id` int DEFAULT NULL,
  `sehir` varchar(50) DEFAULT NULL,
  `oda_sayisi` int DEFAULT NULL,
  `haftalik_ucret` int DEFAULT NULL,
  PRIMARY KEY (`ev_id`),
  UNIQUE KEY `ev_id_UNIQUE` (`ev_id`),
  KEY `ev_sahibi_id_idx` (`ev_sahibi_id`),
  CONSTRAINT `ev_id` FOREIGN KEY (`ev_id`) REFERENCES `rezervasyonlar` (`ev_id`),
  CONSTRAINT `ev_sahibi_id` FOREIGN KEY (`ev_sahibi_id`) REFERENCES `ev_sahipleri` (`ev_sahibi_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evler`
--

LOCK TABLES `evler` WRITE;
/*!40000 ALTER TABLE `evler` DISABLE KEYS */;
/*!40000 ALTER TABLE `evler` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rezervasyonlar`
--

DROP TABLE IF EXISTS `rezervasyonlar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rezervasyonlar` (
  `rezervasyon_id` int NOT NULL AUTO_INCREMENT,
  `uye_id` int DEFAULT NULL,
  `ev_id` int DEFAULT NULL,
  `baslangic_tarihi` date DEFAULT NULL,
  `bitis_tarihi` date DEFAULT NULL,
  PRIMARY KEY (`rezervasyon_id`),
  UNIQUE KEY `rezervasyon_id_UNIQUE` (`rezervasyon_id`),
  KEY `uye_id_idx` (`uye_id`),
  KEY `ev_id_idx` (`ev_id`),
  CONSTRAINT `uye_id` FOREIGN KEY (`uye_id`) REFERENCES `uyeler` (`uye_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rezervasyonlar`
--

LOCK TABLES `rezervasyonlar` WRITE;
/*!40000 ALTER TABLE `rezervasyonlar` DISABLE KEYS */;
INSERT INTO `rezervasyonlar` VALUES (3,2,8,'2023-07-11','2023-05-20'),(4,2,3,'2023-05-11','2023-05-20'),(5,2,4,'2023-05-11','2023-05-20'),(6,5,5,'2023-05-11','2023-05-20'),(7,5,6,'2023-05-11','2023-05-20');
/*!40000 ALTER TABLE `rezervasyonlar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uyeler`
--

DROP TABLE IF EXISTS `uyeler`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uyeler` (
  `uye_id` int NOT NULL AUTO_INCREMENT,
  `uye_adi` varchar(100) DEFAULT NULL,
  `eposta` varchar(100) DEFAULT NULL,
  `parola` varchar(100) DEFAULT NULL,
  `tarih` date DEFAULT NULL,
  `saat` time DEFAULT NULL,
  PRIMARY KEY (`uye_id`),
  UNIQUE KEY `uye_id_UNIQUE` (`uye_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uyeler`
--

LOCK TABLES `uyeler` WRITE;
/*!40000 ALTER TABLE `uyeler` DISABLE KEYS */;
INSERT INTO `uyeler` VALUES (1,'Ahmesst00','aaa','fd16149c94cf3d0a1e5fe75b061a8423b562971c',NULL,NULL),(2,'Ahmesst3','aaa','fd16149c94cf3d0a1e5fe75b061a8423b562971c','2023-05-16','23:59:31'),(3,'Ahmesst3','aaa','fd16149c94cf3d0a1e5fe75b061a8423b562971c','2023-05-17','00:01:12'),(4,'Ahmesst4','aaa','fd16149c94cf3d0a1e5fe75b061a8423b562971c','2023-05-17','00:01:40'),(5,'AAAA5','aaa@aaa.com','2083aaf14684c0bdcc1278135b90ece84d4b5951','2023-05-17','00:04:15'),(6,'AAAA7','aaa@aaa.com','2083aaf14684c0bdcc1278135b90ece84d4b5951','2023-05-17','00:06:58'),(7,'AAAA8','aaa@aaa.com','2083aaf14684c0bdcc1278135b90ece84d4b5951','2023-05-17','00:21:34'),(8,'AAAA9','aaa@aaa.com','2083aaf14684c0bdcc1278135b90ece84d4b5951','2023-05-17','01:01:13'),(9,'AAAA11','aaa@aaa.com','2083aaf14684c0bdcc1278135b90ece84d4b5951','2023-05-17','01:01:19');
/*!40000 ALTER TABLE `uyeler` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-17 22:38:01
