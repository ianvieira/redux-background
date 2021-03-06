import {
  JOB_ADD,
  JOB_ADDED,
  JOB_STARTED,
  JOB_PROGRESS,
  JOB_FINISHED,
  JOB_STOP,
  JOB_STOPPED,
  JOB_REMOVE,
  JOB_TIMEOUT_ID,
} from './types';

export const startJob = (name, fn, meta = {}) => ({
  type: JOB_ADD,
  payload: { name, fn },
  meta,
});

export const startDaemon = (name, fn, meta = {}) => ({
  type: JOB_ADD,
  payload: { name, fn },
  meta: { ...meta, maxTimes: Infinity },
});

export const jobAdded = (name, meta) => ({
  type: JOB_ADDED,
  payload: { name },
  meta,
});

export const jobStarted = (name, time) => ({
  type: JOB_STARTED,
  payload: { name },
  meta: { time },
});

export const jobProgress = (name, progress) => ({
  type: JOB_PROGRESS,
  payload: { name },
  meta: { progress },
});

export const jobFinished = (name, error, value, time, times) => ({
  type: JOB_FINISHED,
  payload: { name, value },
  error,
  meta: { time, times },
});

export const stopJob = name => ({
  type: JOB_STOP,
  payload: { name },
  meta: {},
});

export const jobStopped = name => ({
  type: JOB_STOPPED,
  payload: { name },
  meta: {},
});

export const removeJob = name => ({
  type: JOB_REMOVE,
  payload: { name },
  meta: {},
});

export const jobTimeoutId = (name, timeoutId) => ({
  type: JOB_TIMEOUT_ID,
  payload: { name },
  meta: { timeoutId },
});

export default {
  startJob,
  startDaemon,
  jobAdded,
  jobStarted,
  jobProgress,
  jobFinished,
  stopJob,
  jobStopped,
  removeJob,
  jobTimeoutId,
};
