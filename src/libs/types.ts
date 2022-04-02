export interface launchData {
  __typename: string;
  mission_name: string;
  mission_id: string[];
  rocket: {
    __typename: string;
    rocket_name: string;
    rocket: {
      __typename: string;
      company: string;
      name: string;
      mass: {
        __typename: string;
        kg: number;
      };
    };
  };
  launch_site: {
    __typename: string;
    site_name: string;
  };
  launch_date_local: string;
}

export interface LaunchTableData {
  id: string;
  nameOfMssion: string;
  nameOfRocket: string;
  nameOfCompany: string;
  massOfRocket: number;
  launchSite: string;
  launchDate: string;
}
