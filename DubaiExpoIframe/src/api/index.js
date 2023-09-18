import axios from "axios";

const baseURL = "IBP_DATA/sap/opu/odata/IBP/EXTRACT_ODATA_SRV/";

const instance = axios.create({
  baseURL
});

export const getTableData = async (params = { $top: 100, $skip: 0 }) => {
  const { data } = await instance.get("/DUBAIEXPO", {
    params
  });

  return data.d?.results || data.d || data.value;
};

export const getTableCount = async () => {
  const { data } = await instance.get("/DUBAIEXPO/$count");
  return data;
};
