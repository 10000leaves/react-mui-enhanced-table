import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

function createData(secCode, company, industry, count, page) {
  return { secCode, company, industry, count, page };
}

const rows = [
  createData(1111, 'あああ株式会社', '水産・農林業',159, 'P.4、P.5、P.12、P.15'),
  createData(1112, 'あああ株式会社', '水産・農林業',237, 'P.4、P.5、P.12、P.15'),
  createData(1113, 'あああ株式会社', '水産・農林業',262, 'P.4、P.5、P.12、P.15'),
  createData(1114, 'あああ株式会社', '水産・農林業',305, 'P.4、P.5、P.12、P.15'),
  createData(1115, 'あああ株式会社', '水産・農林業',356, 'P.4、P.5、P.12、P.15'),
  createData(1116, 'あああ株式会社', '水産・農林業',159, 'P.4、P.5、P.12、P.15'),
  createData(1117, 'あああ株式会社', '水産・農林業',237, 'P.4、P.5、P.12、P.15'),
  createData(1118, 'あああ株式会社', '水産・農林業',262, 'P.4、P.5、P.12、P.15'),
  createData(1119, 'あああ株式会社', '水産・農林業',305, 'P.4、P.5、P.12、P.15'),
  createData(1120, 'あああ株式会社', '水産・農林業',292, 'P.4、P.5、P.12、P.16'),
  createData(1121, 'あああ株式会社', '水産・農林業',299, 'P.4、P.5、P.12、P.17'),
  createData(1122, 'あああ株式会社', '水産・農林業',307, 'P.4、P.5、P.12、P.18'),
  createData(1123, 'あああ株式会社', '水産・農林業',315, 'P.4、P.5、P.12、P.19'),
  createData(1124, 'あああ株式会社', '水産・農林業',323, 'P.4、P.5、P.12、P.20'),
  createData(1125, 'あああ株式会社', '水産・農林業',330, 'P.4、P.5、P.12、P.21'),
  createData(1126, 'あああ株式会社', '水産・農林業',338, 'P.4、P.5、P.12、P.22'),
  createData(1127, 'あああ株式会社', '水産・農林業',346, 'P.4、P.5、P.12、P.23'),
  createData(1128, 'あああ株式会社', '水産・農林業',353, 'P.4、P.5、P.12、P.24'),
  createData(1129, 'あああ株式会社', '水産・農林業',361, 'P.4、P.5、P.12、P.25'),
  createData(1130, 'あああ株式会社', '水産・農林業',369, 'P.4、P.5、P.12、P.26'),
  createData(1131, 'あああ株式会社', '水産・農林業',377, 'P.4、P.5、P.12、P.27'),
  createData(1132, 'あああ株式会社', '水産・農林業',384, 'P.4、P.5、P.12、P.28'),
  createData(1133, 'あああ株式会社', '水産・農林業',392, 'P.4、P.5、P.12、P.29'),
  createData(1134, 'あああ株式会社', '水産・農林業',400, 'P.4、P.5、P.12、P.30'),
  createData(1135, 'あああ株式会社', '水産・農林業',407, 'P.4、P.5、P.12、P.31'),
  createData(1136, 'あああ株式会社', '水産・農林業',415, 'P.4、P.5、P.12、P.32'),
  createData(1137, 'あああ株式会社', '水産・農林業',423, 'P.4、P.5、P.12、P.33'),
  createData(1138, 'あああ株式会社', '水産・農林業',431, 'P.4、P.5、P.12、P.34'),
  createData(1139, 'あああ株式会社', '水産・農林業',438, 'P.4、P.5、P.12、P.35'),
  createData(1140, 'あああ株式会社', '水産・農林業',446, 'P.4、P.5、P.12、P.36'),
  createData(1141, 'あああ株式会社', '水産・農林業',454, 'P.4、P.5、P.12、P.37'),
  createData(1142, 'あああ株式会社', '水産・農林業',461, 'P.4、P.5、P.12、P.38'),
  createData(1143, 'あああ株式会社', '水産・農林業',469, 'P.4、P.5、P.12、P.39'),
  createData(1144, 'あああ株式会社', '水産・農林業',477, 'P.4、P.5、P.12、P.40'),
  createData(1145, 'あああ株式会社', '水産・農林業',485, 'P.4、P.5、P.12、P.41'),
  createData(1146, 'あああ株式会社', '水産・農林業',492, 'P.4、P.5、P.12、P.42'),
  createData(1147, 'あああ株式会社', '水産・農林業',500, 'P.4、P.5、P.12、P.43'),
  createData(1148, 'あああ株式会社', '水産・農林業',508, 'P.4、P.5、P.12、P.44'),
  createData(1149, 'あああ株式会社', '水産・農林業',515, 'P.4、P.5、P.12、P.45'),
  createData(1150, 'あああ株式会社', '水産・農林業',523, 'P.4、P.5、P.12、P.46'),
  createData(1151, 'あああ株式会社', '水産・農林業',531, 'P.4、P.5、P.12、P.47'),
  createData(1152, 'あああ株式会社', '水産・農林業',539, 'P.4、P.5、P.12、P.48'),
  createData(1153, 'あああ株式会社', '水産・農林業',546, 'P.4、P.5、P.12、P.49'),
  createData(1154, 'あああ株式会社', '水産・農林業',554, 'P.4、P.5、P.12、P.50'),
  createData(1155, 'あああ株式会社', '水産・農林業',562, 'P.4、P.5、P.12、P.51'),
  createData(1156, 'あああ株式会社', '水産・農林業',569, 'P.4、P.5、P.12、P.52'),
  createData(1157, 'あああ株式会社', '水産・農林業',577, 'P.4、P.5、P.12、P.53'),
  createData(1158, 'あああ株式会社', '水産・農林業',585, 'P.4、P.5、P.12、P.54'),
  createData(1159, 'あああ株式会社', '水産・農林業',593, 'P.4、P.5、P.12、P.55'),
  createData(1160, 'あああ株式会社', '水産・農林業',600, 'P.4、P.5、P.12、P.56'),
  createData(1161, 'あああ株式会社', '水産・農林業',608, 'P.4、P.5、P.12、P.57'),
  createData(1162, 'あああ株式会社', '水産・農林業',616, 'P.4、P.5、P.12、P.58'),
  createData(1163, 'あああ株式会社', '水産・農林業',623, 'P.4、P.5、P.12、P.59'),
  createData(1164, 'あああ株式会社', '水産・農林業',631, 'P.4、P.5、P.12、P.60'),
  createData(1165, 'あああ株式会社', '水産・農林業',639, 'P.4、P.5、P.12、P.61'),
  createData(1166, 'あああ株式会社', '水産・農林業',647, 'P.4、P.5、P.12、P.62'),
  createData(1167, 'あああ株式会社', '水産・農林業',654, 'P.4、P.5、P.12、P.63'),
  createData(1168, 'あああ株式会社', '水産・農林業',662, 'P.4、P.5、P.12、P.64'),
  createData(1169, 'あああ株式会社', '水産・農林業',670, 'P.4、P.5、P.12、P.65'),
  createData(1170, 'あああ株式会社', '水産・農林業',677, 'P.4、P.5、P.12、P.66'),
  createData(1171, 'あああ株式会社', '水産・農林業',685, 'P.4、P.5、P.12、P.67'),
  createData(1172, 'あああ株式会社', '水産・農林業',693, 'P.4、P.5、P.12、P.68'),
  createData(1173, 'あああ株式会社', '水産・農林業',701, 'P.4、P.5、P.12、P.69'),
  createData(1174, 'あああ株式会社', '水産・農林業',708, 'P.4、P.5、P.12、P.70'),
  createData(1175, 'あああ株式会社', '水産・農林業',716, 'P.4、P.5、P.12、P.71'),
  createData(1176, 'あああ株式会社', '水産・農林業',724, 'P.4、P.5、P.12、P.72'),
  createData(1177, 'あああ株式会社', '水産・農林業',731, 'P.4、P.5、P.12、P.73'),
  createData(1178, 'あああ株式会社', '水産・農林業',739, 'P.4、P.5、P.12、P.74'),
  createData(1179, 'あああ株式会社', '水産・農林業',747, 'P.4、P.5、P.12、P.75'),
  createData(1180, 'あああ株式会社', '水産・農林業',755, 'P.4、P.5、P.12、P.76'),
  createData(1181, 'あああ株式会社', '水産・農林業',762, 'P.4、P.5、P.12、P.77'),
  createData(1182, 'あああ株式会社', '水産・農林業',770, 'P.4、P.5、P.12、P.78'),
  createData(1183, 'あああ株式会社', '水産・農林業',778, 'P.4、P.5、P.12、P.79'),
  createData(1184, 'あああ株式会社', '水産・農林業',786, 'P.4、P.5、P.12、P.80'),
  createData(1185, 'あああ株式会社', '水産・農林業',793, 'P.4、P.5、P.12、P.81'),
  createData(1186, 'あああ株式会社', '水産・農林業',801, 'P.4、P.5、P.12、P.82'),
  createData(1187, 'あああ株式会社', '水産・農林業',809, 'P.4、P.5、P.12、P.83'),
  createData(1188, 'あああ株式会社', '水産・農林業',816, 'P.4、P.5、P.12、P.84'),
  createData(1189, 'あああ株式会社', '水産・農林業',824, 'P.4、P.5、P.12、P.85'),
  createData(1190, 'あああ株式会社', '水産・農林業',832, 'P.4、P.5、P.12、P.86'),
  createData(1191, 'あああ株式会社', '水産・農林業',840, 'P.4、P.5、P.12、P.87'),
  createData(1192, 'あああ株式会社', '水産・農林業',847, 'P.4、P.5、P.12、P.88'),
  createData(1193, 'あああ株式会社', '水産・農林業',855, 'P.4、P.5、P.12、P.89'),
  createData(1194, 'あああ株式会社', '水産・農林業',863, 'P.4、P.5、P.12、P.90'),
  createData(1195, 'あああ株式会社', '水産・農林業',870, 'P.4、P.5、P.12、P.91'),
  createData(1196, 'あああ株式会社', '水産・農林業',878, 'P.4、P.5、P.12、P.92'),
  createData(1197, 'あああ株式会社', '水産・農林業',886, 'P.4、P.5、P.12、P.93'),
  createData(1198, 'あああ株式会社', '水産・農林業',894, 'P.4、P.5、P.12、P.94'),
  createData(1199, 'あああ株式会社', '水産・農林業',901, 'P.4、P.5、P.12、P.95'),
  createData(1200, 'あああ株式会社', '水産・農林業',909, 'P.4、P.5、P.12、P.96'),
  createData(1201, 'あああ株式会社', '水産・農林業',917, 'P.4、P.5、P.12、P.97'),
  createData(1202, 'あああ株式会社', '水産・農林業',924, 'P.4、P.5、P.12、P.98'),
  createData(1203, 'あああ株式会社', '水産・農林業',932, 'P.4、P.5、P.12、P.99'),
  createData(1204, 'あああ株式会社', '水産・農林業',940, 'P.4、P.5、P.12、P.100'),
  createData(1205, 'あああ株式会社', '水産・農林業',948, 'P.4、P.5、P.12、P.101'),
  createData(1206, 'あああ株式会社', '水産・農林業',955, 'P.4、P.5、P.12、P.102'),
  createData(1207, 'あああ株式会社', '水産・農林業',963, 'P.4、P.5、P.12、P.103'),
  createData(1208, 'あああ株式会社', '水産・農林業',971, 'P.4、P.5、P.12、P.104'),
  createData(1209, 'あああ株式会社', '水産・農林業',978, 'P.4、P.5、P.12、P.105'),
  createData(1210, 'あああ株式会社', '水産・農林業',986, 'P.4、P.5、P.12、P.106'),
  createData(1211, 'あああ株式会社', '水産・農林業',994, 'P.4、P.5、P.12、P.107'),
  createData(1212, 'あああ株式会社', '水産・農林業',100, 'P.4、P.5、P.12、P.108'),
  createData(1213, 'あああ株式会社', '水産・農林業',100, 'P.4、P.5、P.12、P.109'),
  createData(1214, 'あああ株式会社', '水産・農林業',101, 'P.4、P.5、P.12、P.110'),
  createData(1215, 'あああ株式会社', '水産・農林業',102, 'P.4、P.5、P.12、P.111'),
  createData(1216, 'あああ株式会社', '水産・農林業',103, 'P.4、P.5、P.12、P.112'),
  createData(1217, 'あああ株式会社', '水産・農林業',104, 'P.4、P.5、P.12、P.113'),
  createData(1218, 'あああ株式会社', '水産・農林業',104, 'P.4、P.5、P.12、P.114'),
  createData(1219, 'あああ株式会社', '水産・農林業',105, 'P.4、P.5、P.12、P.115'),
  createData(1220, 'あああ株式会社', '水産・農林業',106, 'P.4、P.5、P.12、P.116'),
  createData(1221, 'あああ株式会社', '水産・農林業',107, 'P.4、P.5、P.12、P.117'),
  createData(1222, 'あああ株式会社', '水産・農林業',107, 'P.4、P.5、P.12、P.118'),
  createData(1223, 'あああ株式会社', '水産・農林業',108, 'P.4、P.5、P.12、P.119'),
  createData(1224, 'あああ株式会社', '水産・農林業',109, 'P.4、P.5、P.12、P.120'),
  createData(1225, 'あああ株式会社', '水産・農林業',110, 'P.4、P.5、P.12、P.121'),
  createData(1226, 'あああ株式会社', '水産・農林業',111, 'P.4、P.5、P.12、P.122'),
  createData(1227, 'あああ株式会社', '水産・農林業',111, 'P.4、P.5、P.12、P.123'),
  createData(1228, 'あああ株式会社', '水産・農林業',112, 'P.4、P.5、P.12、P.124'),
  createData(1229, 'あああ株式会社', '水産・農林業',113, 'P.4、P.5、P.12、P.125'),
  createData(1230, 'あああ株式会社', '水産・農林業',114, 'P.4、P.5、P.12、P.126'),
  createData(1231, 'あああ株式会社', '水産・農林業',114, 'P.4、P.5、P.12、P.127'),
  createData(1232, 'あああ株式会社', '水産・農林業',115, 'P.4、P.5、P.12、P.128'),
  createData(1233, 'あああ株式会社', '水産・農林業',116, 'P.4、P.5、P.12、P.129'),
  createData(1234, 'あああ株式会社', '水産・農林業',117, 'P.4、P.5、P.12、P.130'),
  createData(1235, 'あああ株式会社', '水産・農林業',117, 'P.4、P.5、P.12、P.131'),
  createData(1236, 'あああ株式会社', '水産・農林業',118, 'P.4、P.5、P.12、P.132'),
  createData(1237, 'あああ株式会社', '水産・農林業',119, 'P.4、P.5、P.12、P.133'),
  createData(1238, 'あああ株式会社', '水産・農林業',120, 'P.4、P.5、P.12、P.134'),
  createData(1239, 'あああ株式会社', '水産・農林業',121, 'P.4、P.5、P.12、P.135'),
  createData(1240, 'あああ株式会社', '水産・農林業',121, 'P.4、P.5、P.12、P.136'),
  createData(1241, 'あああ株式会社', '水産・農林業',122, 'P.4、P.5、P.12、P.137'),
  createData(1242, 'あああ株式会社', '水産・農林業',123, 'P.4、P.5、P.12、P.138'),
  createData(1243, 'あああ株式会社', '水産・農林業',124, 'P.4、P.5、P.12、P.139'),
  createData(1244, 'あああ株式会社', '水産・農林業',124, 'P.4、P.5、P.12、P.140'),
  createData(1245, 'あああ株式会社', '水産・農林業',125, 'P.4、P.5、P.12、P.141'),
  createData(1246, 'あああ株式会社', '水産・農林業',126, 'P.4、P.5、P.12、P.142'),
  createData(1247, 'あああ株式会社', '水産・農林業',127, 'P.4、P.5、P.12、P.143'),
  createData(1248, 'あああ株式会社', '水産・農林業',127, 'P.4、P.5、P.12、P.144'),
  createData(1249, 'あああ株式会社', '水産・農林業',128, 'P.4、P.5、P.12、P.145'),
  createData(1250, 'あああ株式会社', '水産・農林業',129, 'P.4、P.5、P.12、P.146'),
  createData(1251, 'あああ株式会社', '水産・農林業',130, 'P.4、P.5、P.12、P.147'),
  createData(1252, 'あああ株式会社', '水産・農林業',131, 'P.4、P.5、P.12、P.148'),
  createData(1253, 'あああ株式会社', '水産・農林業',131, 'P.4、P.5、P.12、P.149'),
  createData(1254, 'あああ株式会社', '水産・農林業',132, 'P.4、P.5、P.12、P.150'),
  createData(1255, 'あああ株式会社', '水産・農林業',133, 'P.4、P.5、P.12、P.151'),
  createData(1256, 'あああ株式会社', '水産・農林業',134, 'P.4、P.5、P.12、P.152'),
  createData(1257, 'あああ株式会社', '水産・農林業',134, 'P.4、P.5、P.12、P.153'),
  createData(1258, 'あああ株式会社', '水産・農林業',135, 'P.4、P.5、P.12、P.154'),
  createData(1259, 'あああ株式会社', '水産・農林業',136, 'P.4、P.5、P.12、P.155'),
  createData(1260, 'あああ株式会社', '水産・農林業',137, 'P.4、P.5、P.12、P.156'),
  createData(1261, 'あああ株式会社', '水産・農林業',138, 'P.4、P.5、P.12、P.157'),
  createData(1262, 'あああ株式会社', '水産・農林業',138, 'P.4、P.5、P.12、P.158'),
  createData(1263, 'あああ株式会社', '水産・農林業',139, 'P.4、P.5、P.12、P.159'),
  createData(1264, 'あああ株式会社', '水産・農林業',140, 'P.4、P.5、P.12、P.160'),
  createData(1265, 'あああ株式会社', '水産・農林業',141, 'P.4、P.5、P.12、P.161'),
  createData(1266, 'あああ株式会社', '水産・農林業',141, 'P.4、P.5、P.12、P.162'),
  createData(1267, 'あああ株式会社', '水産・農林業',142, 'P.4、P.5、P.12、P.163'),
  createData(1268, 'あああ株式会社', '水産・農林業',143, 'P.4、P.5、P.12、P.164'),
  createData(1269, 'あああ株式会社', '水産・農林業',144, 'P.4、P.5、P.12、P.165'),
  createData(1270, 'あああ株式会社', '水産・農林業',144, 'P.4、P.5、P.12、P.166'),
  createData(1271, 'あああ株式会社', '水産・農林業',145, 'P.4、P.5、P.12、P.167'),
  createData(1272, 'あああ株式会社', '水産・農林業',146, 'P.4、P.5、P.12、P.168'),
  createData(1273, 'あああ株式会社', '水産・農林業',147, 'P.4、P.5、P.12、P.169'),
  createData(1274, 'あああ株式会社', '水産・農林業',148, 'P.4、P.5、P.12、P.170'),
  createData(1275, 'あああ株式会社', '水産・農林業',148, 'P.4、P.5、P.12、P.171'),
  createData(1276, 'あああ株式会社', '水産・農林業',149, 'P.4、P.5、P.12、P.172'),
  createData(1277, 'あああ株式会社', '水産・農林業',150, 'P.4、P.5、P.12、P.173'),
  createData(1278, 'あああ株式会社', '水産・農林業',151, 'P.4、P.5、P.12、P.174'),
  createData(1279, 'あああ株式会社', '水産・農林業',151, 'P.4、P.5、P.12、P.175'),
  createData(1280, 'あああ株式会社', '水産・農林業',152, 'P.4、P.5、P.12、P.176'),
  createData(1281, 'あああ株式会社', '水産・農林業',153, 'P.4、P.5、P.12、P.177'),
  createData(1282, 'あああ株式会社', '水産・農林業',154, 'P.4、P.5、P.12、P.178'),
  createData(1283, 'あああ株式会社', '水産・農林業',154, 'P.4、P.5、P.12、P.179'),
  createData(1284, 'あああ株式会社', '水産・農林業',155, 'P.4、P.5、P.12、P.180'),
  createData(1285, 'あああ株式会社', '水産・農林業',156, 'P.4、P.5、P.12、P.181'),
  createData(1286, 'あああ株式会社', '水産・農林業',157, 'P.4、P.5、P.12、P.182'),
  createData(1287, 'あああ株式会社', '水産・農林業',158, 'P.4、P.5、P.12、P.183'),
  createData(1288, 'あああ株式会社', '水産・農林業',158, 'P.4、P.5、P.12、P.184'),
  createData(1289, 'あああ株式会社', '水産・農林業',159, 'P.4、P.5、P.12、P.185'),
  createData(1290, 'あああ株式会社', '水産・農林業',160, 'P.4、P.5、P.12、P.186'),
  createData(1291, 'あああ株式会社', '水産・農林業',161, 'P.4、P.5、P.12、P.187'),
  createData(1292, 'あああ株式会社', '水産・農林業',161, 'P.4、P.5、P.12、P.188'),
  createData(1293, 'あああ株式会社', '水産・農林業',162, 'P.4、P.5、P.12、P.189'),
  createData(1294, 'あああ株式会社', '水産・農林業',163, 'P.4、P.5、P.12、P.190'),
  createData(1295, 'あああ株式会社', '水産・農林業',164, 'P.4、P.5、P.12、P.191'),
  createData(1296, 'あああ株式会社', '水産・農林業',165, 'P.4、P.5、P.12、P.192'),
  createData(1297, 'あああ株式会社', '水産・農林業',165, 'P.4、P.5、P.12、P.193'),
  createData(1298, 'あああ株式会社', '水産・農林業',166, 'P.4、P.5、P.12、P.194'),
  createData(1299, 'あああ株式会社', '水産・農林業',167, 'P.4、P.5、P.12、P.195'),
  createData(1300, 'あああ株式会社', '水産・農林業',168, 'P.4、P.5、P.12、P.196'),
  createData(1301, 'あああ株式会社', '水産・農林業',168, 'P.4、P.5、P.12、P.197'),
  createData(1302, 'あああ株式会社', '水産・農林業',169, 'P.4、P.5、P.12、P.198'),
  createData(1303, 'あああ株式会社', '水産・農林業',170, 'P.4、P.5、P.12、P.199'),
  createData(1304, 'あああ株式会社', '水産・農林業',171, 'P.4、P.5、P.12、P.200'),
  createData(1305, 'あああ株式会社', '水産・農林業',171, 'P.4、P.5、P.12、P.201'),
  createData(1306, 'あああ株式会社', '水産・農林業',172, 'P.4、P.5、P.12、P.202'),
  createData(1307, 'あああ株式会社', '水産・農林業',173, 'P.4、P.5、P.12、P.203'),
  createData(1308, 'あああ株式会社', '水産・農林業',174, 'P.4、P.5、P.12、P.204'),
  createData(1309, 'あああ株式会社', '水産・農林業',175, 'P.4、P.5、P.12、P.205'),
  createData(1310, 'あああ株式会社', '水産・農林業',175, 'P.4、P.5、P.12、P.206'),
  createData(1311, 'あああ株式会社', '水産・農林業',176, 'P.4、P.5、P.12、P.207'),
  createData(1312, 'あああ株式会社', '水産・農林業',177, 'P.4、P.5、P.12、P.208'),
  createData(1313, 'あああ株式会社', '水産・農林業',178, 'P.4、P.5、P.12、P.209'),
  createData(1314, 'あああ株式会社', '水産・農林業',178, 'P.4、P.5、P.12、P.210'),
  createData(1315, 'あああ株式会社', '水産・農林業',179, 'P.4、P.5、P.12、P.211'),
  createData(1316, 'あああ株式会社', '水産・農林業',180, 'P.4、P.5、P.12、P.212'),
  createData(1317, 'あああ株式会社', '水産・農林業',181, 'P.4、P.5、P.12、P.213'),
  createData(1318, 'あああ株式会社', '水産・農林業',182, 'P.4、P.5、P.12、P.214'),
  createData(1319, 'あああ株式会社', '水産・農林業',182, 'P.4、P.5、P.12、P.215'),
  createData(1320, 'あああ株式会社', '水産・農林業',183, 'P.4、P.5、P.12、P.216'),
  createData(1321, 'あああ株式会社', '水産・農林業',184, 'P.4、P.5、P.12、P.217'),
  createData(1322, 'あああ株式会社', '水産・農林業',185, 'P.4、P.5、P.12、P.218'),
  createData(1323, 'あああ株式会社', '水産・農林業',185, 'P.4、P.5、P.12、P.219'),
  createData(1324, 'あああ株式会社', '水産・農林業',186, 'P.4、P.5、P.12、P.220'),
  createData(1325, 'あああ株式会社', '水産・農林業',187, 'P.4、P.5、P.12、P.221'),
  createData(1326, 'あああ株式会社', '水産・農林業',188, 'P.4、P.5、P.12、P.222'),
  createData(1327, 'あああ株式会社', '水産・農林業',188, 'P.4、P.5、P.12、P.223'),
  createData(1328, 'あああ株式会社', '水産・農林業',189, 'P.4、P.5、P.12、P.224'),
  createData(1329, 'あああ株式会社', '水産・農林業',190, 'P.4、P.5、P.12、P.225'),
  createData(1330, 'あああ株式会社', '水産・農林業',191, 'P.4、P.5、P.12、P.226'),
  createData(1331, 'あああ株式会社', '水産・農林業',192, 'P.4、P.5、P.12、P.227'),
  createData(1332, 'あああ株式会社', '水産・農林業',192, 'P.4、P.5、P.12、P.228'),
  createData(1333, 'あああ株式会社', '水産・農林業',193, 'P.4、P.5、P.12、P.229'),
  createData(1334, 'あああ株式会社', '水産・農林業',194, 'P.4、P.5、P.12、P.230'),
  createData(1335, 'あああ株式会社', '水産・農林業',195, 'P.4、P.5、P.12、P.231'),
  createData(1336, 'あああ株式会社', '水産・農林業',195, 'P.4、P.5、P.12、P.232'),
  createData(1337, 'あああ株式会社', '水産・農林業',196, 'P.4、P.5、P.12、P.233'),
  createData(1338, 'あああ株式会社', '水産・農林業',197, 'P.4、P.5、P.12、P.234'),
  createData(1339, 'あああ株式会社', '水産・農林業',198, 'P.4、P.5、P.12、P.235'),
  createData(1340, 'あああ株式会社', '水産・農林業',198, 'P.4、P.5、P.12、P.236'),
  createData(1341, 'あああ株式会社', '水産・農林業',199, 'P.4、P.5、P.12、P.237'),
  createData(1342, 'あああ株式会社', '水産・農林業',200, 'P.4、P.5、P.12、P.238'),
  createData(1343, 'あああ株式会社', '水産・農林業',201, 'P.4、P.5、P.12、P.239'),
  createData(1344, 'あああ株式会社', '水産・農林業',202, 'P.4、P.5、P.12、P.240'),
  createData(1345, 'あああ株式会社', '水産・農林業',202, 'P.4、P.5、P.12、P.241'),
  createData(1346, 'あああ株式会社', '水産・農林業',203, 'P.4、P.5、P.12、P.242'),
  createData(1347, 'あああ株式会社', '水産・農林業',204, 'P.4、P.5、P.12、P.243'),
  createData(1348, 'あああ株式会社', '水産・農林業',205, 'P.4、P.5、P.12、P.244'),
  createData(1349, 'あああ株式会社', '水産・農林業',205, 'P.4、P.5、P.12、P.245'),
  createData(1350, 'あああ株式会社', '水産・農林業',206, 'P.4、P.5、P.12、P.246'),
  createData(1351, 'あああ株式会社', '水産・農林業',207, 'P.4、P.5、P.12、P.247'),
  createData(1352, 'あああ株式会社', '水産・農林業',208, 'P.4、P.5、P.12、P.248'),
  createData(1353, 'あああ株式会社', '水産・農林業',209, 'P.4、P.5、P.12、P.249'),
  createData(1354, 'あああ株式会社', '水産・農林業',209, 'P.4、P.5、P.12、P.250'),
  createData(1355, 'あああ株式会社', '水産・農林業',210, 'P.4、P.5、P.12、P.251'),
  createData(1356, 'あああ株式会社', '水産・農林業',211, 'P.4、P.5、P.12、P.252'),
  createData(1357, 'あああ株式会社', '水産・農林業',212, 'P.4、P.5、P.12、P.253'),
  createData(1358, 'あああ株式会社', '水産・農林業',212, 'P.4、P.5、P.12、P.254'),
  createData(1359, 'あああ株式会社', '水産・農林業',213, 'P.4、P.5、P.12、P.255'),
  createData(1360, 'あああ株式会社', '水産・農林業',214, 'P.4、P.5、P.12、P.256'),
  createData(1361, 'あああ株式会社', '水産・農林業',215, 'P.4、P.5、P.12、P.257'),
  createData(1362, 'あああ株式会社', '水産・農林業',215, 'P.4、P.5、P.12、P.258'),
  createData(1363, 'あああ株式会社', '水産・農林業',216, 'P.4、P.5、P.12、P.259'),
  createData(1364, 'あああ株式会社', '水産・農林業',217, 'P.4、P.5、P.12、P.260'),
  createData(1365, 'あああ株式会社', '水産・農林業',218, 'P.4、P.5、P.12、P.261'),
  createData(1366, 'あああ株式会社', '水産・農林業',219, 'P.4、P.5、P.12、P.262'),
  createData(1367, 'あああ株式会社', '水産・農林業',219, 'P.4、P.5、P.12、P.263'),
  createData(1368, 'あああ株式会社', '水産・農林業',220, 'P.4、P.5、P.12、P.264'),
  createData(1369, 'あああ株式会社', '水産・農林業',221, 'P.4、P.5、P.12、P.265'),
  createData(1370, 'あああ株式会社', '水産・農林業',222, 'P.4、P.5、P.12、P.266'),
  createData(1371, 'あああ株式会社', '水産・農林業',222, 'P.4、P.5、P.12、P.267'),
  createData(1372, 'あああ株式会社', '水産・農林業',223, 'P.4、P.5、P.12、P.268'),
  createData(1373, 'あああ株式会社', '水産・農林業',224, 'P.4、P.5、P.12、P.269'),
  createData(1374, 'あああ株式会社', '水産・農林業',225, 'P.4、P.5、P.12、P.270'),
  createData(1375, 'あああ株式会社', '水産・農林業',225, 'P.4、P.5、P.12、P.271'),
  createData(1376, 'あああ株式会社', '水産・農林業',226, 'P.4、P.5、P.12、P.272'),
  createData(1377, 'あああ株式会社', '水産・農林業',227, 'P.4、P.5、P.12、P.273'),
  createData(1378, 'あああ株式会社', '水産・農林業',228, 'P.4、P.5、P.12、P.274'),
  createData(1379, 'あああ株式会社', '水産・農林業',229, 'P.4、P.5、P.12、P.275'),
  createData(1380, 'あああ株式会社', '水産・農林業',229, 'P.4、P.5、P.12、P.276'),
  createData(1381, 'あああ株式会社', '水産・農林業',230, 'P.4、P.5、P.12、P.277'),
  createData(1382, 'あああ株式会社', '水産・農林業',231, 'P.4、P.5、P.12、P.278'),
  createData(1383, 'あああ株式会社', '水産・農林業',232, 'P.4、P.5、P.12、P.279'),
  createData(1384, 'あああ株式会社', '水産・農林業',232, 'P.4、P.5、P.12、P.280'),
  createData(1385, 'あああ株式会社', '水産・農林業',233, 'P.4、P.5、P.12、P.281'),
  createData(1386, 'あああ株式会社', '水産・農林業',234, 'P.4、P.5、P.12、P.282'),
  createData(1387, 'あああ株式会社', '水産・農林業',235, 'P.4、P.5、P.12、P.283'),
  createData(1388, 'あああ株式会社', '水産・農林業',236, 'P.4、P.5、P.12、P.284'),
  createData(1389, 'あああ株式会社', '水産・農林業',236, 'P.4、P.5、P.12、P.285'),
  createData(1390, 'あああ株式会社', '水産・農林業',237, 'P.4、P.5、P.12、P.286'),
  createData(1391, 'あああ株式会社', '水産・農林業',238, 'P.4、P.5、P.12、P.287'),
  createData(1392, 'あああ株式会社', '水産・農林業',239, 'P.4、P.5、P.12、P.288'),
  createData(1393, 'あああ株式会社', '水産・農林業',239, 'P.4、P.5、P.12、P.289'),
  createData(1394, 'あああ株式会社', '水産・農林業',240, 'P.4、P.5、P.12、P.290'),
  createData(1395, 'あああ株式会社', '水産・農林業',241, 'P.4、P.5、P.12、P.291'),
  createData(1396, 'あああ株式会社', '水産・農林業',242, 'P.4、P.5、P.12、P.292'),
  createData(1397, 'あああ株式会社', '水産・農林業',242, 'P.4、P.5、P.12、P.293'),
  createData(1398, 'あああ株式会社', '水産・農林業',243, 'P.4、P.5、P.12、P.294'),
  createData(1399, 'あああ株式会社', '水産・農林業',244, 'P.4、P.5、P.12、P.295'),
  createData(1400, 'あああ株式会社', '水産・農林業',245, 'P.4、P.5、P.12、P.296'),
  createData(1401, 'あああ株式会社', '水産・農林業',246, 'P.4、P.5、P.12、P.297'),
  createData(1402, 'あああ株式会社', '水産・農林業',246, 'P.4、P.5、P.12、P.298'),
  createData(1403, 'あああ株式会社', '水産・農林業',247, 'P.4、P.5、P.12、P.299'),
  createData(1404, 'あああ株式会社', '水産・農林業',248, 'P.4、P.5、P.12、P.300'),
  createData(1405, 'あああ株式会社', '水産・農林業',249, 'P.4、P.5、P.12、P.301'),
  createData(1406, 'あああ株式会社', '水産・農林業',249, 'P.4、P.5、P.12、P.302'),
  createData(1407, 'あああ株式会社', '水産・農林業',250, 'P.4、P.5、P.12、P.303'),
  createData(1408, 'あああ株式会社', '水産・農林業',251, 'P.4、P.5、P.12、P.304'),
  createData(1409, 'あああ株式会社', '水産・農林業',252, 'P.4、P.5、P.12、P.305'),
  createData(1410, 'あああ株式会社', '水産・農林業',252, 'P.4、P.5、P.12、P.306'),
];

const headCells = [
  {
    id: 'secCode',
    numeric: false,
    disablePadding: true,
    label: '銘柄コード',
  },
  {
    id: 'company',
    numeric: true,
    disablePadding: false,
    label: '会社名',
  },
  {
    id: 'industry',
    numeric: true,
    disablePadding: false,
    label: '業種',
  },
  {
    id: 'count',
    numeric: true,
    disablePadding: false,
    label: '単語出現数',
  },
  {
    id: 'page',
    numeric: true,
    disablePadding: false,
    label: '単語出現ページ数',
  },
];


function BasicTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

BasicTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function BasicTable(props) {
  const { searchedYears, handleSelectRow } = props;
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('count');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleClick = (secCode) => {
    console.log(searchedYears + '年\n' + secCode)
    handleSelectRow(searchedYears, secCode);
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          size={'small'}
        >
          <BasicTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    key={row.secCode}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                    hover
                    onClick={() => {
                      handleClick(row.secCode)
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.secCode}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.company}
                    </TableCell>
                    <TableCell component="th" scope="row">{row.industry}</TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell component="th" scope="row">{row.page}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (33) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 30, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        showFirstButton
        showLastButton
        labelRowsPerPage="ページに表示する行数："
      />
    </div>
  );
}