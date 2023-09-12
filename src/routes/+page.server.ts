import jobs from '../data/job-listing.json';
import type { JobsList } from '../data/models';

const job_list: JobsList = jobs;

export const load = (() => {
  return {
    job_list
  };
})
