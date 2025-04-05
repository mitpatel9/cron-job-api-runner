const { default: axios } = require("axios");

const getReqest = async (url, callBack, errorCallBack) => {
  await axios
    .get(url)
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};

const postReqest = async (url, payload, callBack, errorCallBack) => {
  await axios
    .post(url, payload)
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};

const putRequest = async (url, payload, callBack, errorCallBack) => {
  await axios
    .put(url, payload)
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};

const deleteReqest = async (url, callBack, errorCallBack) => {
  await axios
    .delete(url)
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};

const postWithFormDataRequest = async (
  url,
  payload,
  headers,
  callBack,
  errorCallBack
) => {
  await axios({
    method: "post",
    url: url,
    data: payload,
    headers: headers,
  })
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};

const putWithFormDataRequest = async (
  url,
  payload,
  headers,
  callBack,
  errorCallBack
) => {
  await axios({
    method: "put",
    url: url,
    data: payload,
    headers: headers,
  })
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};

const getServerSideRequest = async (url) => {
  const Data = await axios.get(url);
  return Data;
};

const getDataWithOutHeader = async (url, callBack, errorCallBack) => {
  await axios
    .get(url)
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};
const postDataWithOutHeader = async (url, payload, callBack, errorCallBack) => {
  await axios
    .post(url, payload)
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      errorCallBack(error);
    });
};

module.exports = {
  getReqest,
  postReqest,
  deleteReqest,
  putRequest,
  postWithFormDataRequest,
  putWithFormDataRequest,
  getServerSideRequest,
  getDataWithOutHeader,
  postDataWithOutHeader,
};
