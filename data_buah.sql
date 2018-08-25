/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100121
Source Host           : localhost:3308
Source Database       : buah

Target Server Type    : MYSQL
Target Server Version : 100121
File Encoding         : 65001

Date: 2018-08-26 01:27:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data_buah
-- ----------------------------
DROP TABLE IF EXISTS `data_buah`;
CREATE TABLE `data_buah` (
  `buah_id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(25) DEFAULT NULL,
  `jumlah` int(3) DEFAULT NULL,
  PRIMARY KEY (`buah_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of data_buah
-- ----------------------------
INSERT INTO `data_buah` VALUES ('1', 'Jambu', '2');
INSERT INTO `data_buah` VALUES ('2', 'Mangga', '4');
