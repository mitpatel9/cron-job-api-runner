const { apiEndPoint } = require("./apiCall/apiEndPoint");
const { getReqest, postReqest } = require("./apiCall/index");

require("dotenv").config();
const cron = require("node-cron");

// First function
const marketSchedule = async () => {
  let market_data;

  // get club data from database
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
  cron.schedule("* * * * *", async () => {
    console.log("✅ Running cron job at 12 AM...");
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
            console.log("🎉 Cron Job Service Ended Create task...");
          },
          (error) => {
            console.log(error);
          }
        )
    );
  });
};

// Run both functions
(() => {
  marketSchedule();
})();
