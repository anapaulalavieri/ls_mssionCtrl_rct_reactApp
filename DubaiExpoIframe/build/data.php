<?php
header('Access-Control-Allow-Origin: *');

$ch1 = curl_init();
$ch2 = curl_init();
$ch3 = curl_init();

curl_setopt_array($ch1, array(CURLOPT_URL => 'https://ZIBPSAC:jPqnzS4WCUzgzwLWNEDsgqAZNyrxtPAdVw=CZlnr@my304038-api.scmibp1.ondemand.com/sap/opu/odata/IBP/EXTRACT_ODATA_SRV/DUBAIEXPO?$format=json&$select=LOCTYPE,LOCREGION,LOCID,LOCDESCR,EXPPLANTAVAILRATEDTD&$filter=PERIODID1%20eq%20%272021%27%20and%20LOCTYPE%20eq%20%27PLANT%27', CURLOPT_RETURNTRANSFER => true, CURLOPT_HTTPHEADER => array()));
curl_setopt_array($ch2, array(CURLOPT_URL => 'https://ZIBPSAC:jPqnzS4WCUzgzwLWNEDsgqAZNyrxtPAdVw=CZlnr@my304038-api.scmibp1.ondemand.com/sap/opu/odata/IBP/EXTRACT_ODATA_SRV/DUBAIEXPO?$format=json&$select=LOCID,LOCDESCR,EXPLINE,EXPLINEAVAILRATEDTD&$filter=PERIODID1%20eq%20%272021%27%20and%20%28LOCDESCR%20eq%20%27Plant%20Frankfurt%27%20or%20LOCDESCR%20eq%20%27Plant%20Beijing%27%20or%20LOCDESCR%20eq%20%27Plant%20Atlanta%27%29', CURLOPT_RETURNTRANSFER => true, CURLOPT_HTTPHEADER => array()));
curl_setopt_array($ch3, array(CURLOPT_URL => 'https://ZIBPSAC:jPqnzS4WCUzgzwLWNEDsgqAZNyrxtPAdVw=CZlnr@my304038-api.scmibp1.ondemand.com/sap/opu/odata/IBP/EXTRACT_ODATA_SRV/DUBAIEXPO?$format=json&$select=EXPLINE,LOCID,LOCDESCR,RESID,EXPAVAILRATEDTD&$filter=PERIODID1%20eq%20%272021%27%20and%20%28LOCDESCR%20eq%20%27Plant%20Frankfurt%27%20or%20LOCDESCR%20eq%20%27Plant%20Beijing%27%20or%20LOCDESCR%20eq%20%27Plant%20Atlanta%27%29', CURLOPT_RETURNTRANSFER => true, CURLOPT_HTTPHEADER => array()));

$mh = curl_multi_init();

curl_multi_add_handle($mh,$ch1);
curl_multi_add_handle($mh,$ch2);
curl_multi_add_handle($mh,$ch3);

do {
  $status = curl_multi_exec($mh, $active);
  if ($active) {
    curl_multi_select($mh);
  }
} while ($active && $status == CURLM_OK);


echo json_encode(array(
  json_decode(curl_multi_getcontent($ch1), true)["d"]["results"],
  json_decode(curl_multi_getcontent($ch2), true)["d"]["results"],
  json_decode(curl_multi_getcontent($ch3), true)["d"]["results"]
));

curl_multi_remove_handle($mh, $ch1);
curl_multi_remove_handle($mh, $ch2);
curl_multi_remove_handle($mh, $ch3);
curl_multi_close($mh);


