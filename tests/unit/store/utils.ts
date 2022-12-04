import state from "@/store/state";
import { Job } from "@/api/types";
import { GlobalState } from "@/store/types";

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();
  return { ...initialState, ...config };
};

export const createJob = (config: Partial<Job> = {}): Job => ({
  id: 1,
  img: "test",
  title: "Angular Developer",
  organization: "Vue and Me",
  degree: "Master's",
  jobType: "Intern",
  locations: ["Lisbon"],
  minimumQualifications: [],
  preferedQualifications: [],
  description: [],
  dateAdded: "2021-07-04",
  ...config,
});
