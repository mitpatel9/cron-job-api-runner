const { apiEndPoint } = require("./apiCall/apiEndPoint");
const { getReqest, postReqest, putRequest } = require("./apiCall/index");

require("dotenv").config();
const cron = require("node-cron");

// automate market generate
const marketSchedule = async () => {
  let market_data;
  await getReqest(
    apiEndPoint.getClub,
    (res) => {
      market_data = res.data.data;
    },
    (error) => {
      console.log("market club", apiEndPoint.getClub, error);
    }
  );

  // automate market generate
  cron.schedule("0 1 * * *", async () => {
    market_data.map(
      async (data) =>
        await postReqest(
          apiEndPoint.getMarket,
          {
            club_id: data?._id,
            open_time: data?.open_time,
            close_time: data?.close_time,
          },
          (res) => {
            console.log("Market Data generate");
          },
          (error) => {
            console.log(error);
          }
        )
    );
  });
};

//automate market Inactive
const marketInactive = async () => {
  let todayMarketData;

  //get today active Data from market
  await getReqest(apiEndPoint.getMarket)
    .then(function (response) {
      todayMarketData = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  // automate  market Inactive
  cron.schedule("0 23 * * *", async () => {
    todayMarketData.map(
      async (data) =>
        await putRequest(apiEndPoint.getMarket, {
          id: data?._id,
          status: "Inactive",
        })
          .then((res) => {
            console.log("Market Data Inactive Task...");
          })
          .catch((error) => {
            console.log(error);
          })
    );
  });
};

// Run both functions
(() => {
  marketSchedule();
  marketInactive();
})();
