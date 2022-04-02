import { gql } from "@apollo/client";
import { parseISO } from "date-fns";
import { launchData } from "./types";

export const launchesQuery = gql`
  query launches {
    launches(limit: 10) {
      mission_name
      mission_id
      rocket {
        rocket_name
        rocket {
          company
          name
          mass {
            kg
          }
        }
      }
      launch_site {
        site_name
      }
      launch_date_local
    }
  }
`;

export const formatLaunchesData = (data: launchData[]) => {
  try {
    const dataArr = data.map((launch, idx) => {
      return {
        id: launch.mission_id[0] || "",
        nameOfMssion: launch.mission_name || "",
        nameOfRocket: launch.rocket.rocket_name || "",
        nameOfCompany: launch.rocket.rocket.company || "",
        massOfRocket: launch.rocket.rocket.mass.kg || 0,
        launchSite: launch.launch_site.site_name || "",
        launchDate: `${parseISO(launch.launch_date_local)}` || "",
      };
    });
    return dataArr;
  } catch (error) {
    console.error("Failed to format data in formatLaunchesData FN", error);
  }
};
