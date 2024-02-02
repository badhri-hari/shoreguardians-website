import axios from "axios";

async function getMembersDataFromGoogleAppsScript() {
  try {
    const response = await axios.get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=A-S417Y8zCQafn42q2SF8pm8yPADqWatqC583Lm-FS4y3_m57jjcda3z-HBvPqVOD83gpvs9H8nwakLrEtbk3FDh7ca-tswGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnASciXxnS3nx4JGKSZJ7MhPwoC0sGDynUR3LJMG5A3qzBAnYQXmYTsGbbT05nNJzOHu-YW6DzHJw&lib=MN4McHg5VF7hVJ1wlZo-Il2s80ntowcNA"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Google Apps Script:", error);
    throw error;
  }
}

getMembersDataFromGoogleAppsScript()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
