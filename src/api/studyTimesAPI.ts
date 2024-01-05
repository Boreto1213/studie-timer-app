import { toast } from 'sonner'
import { StudyTime } from '../types/studyTime'
import axios from './axios'

export const studyTimesAPI = {
  saveStudyTime: (studyTime: StudyTime) => {
    return axios
      .post('/studyTimes/upload', studyTime)
      .then((res) => res.data)
      .then((_) => {
        toast.success('Progress saved.')
      })
      .catch((_) => {
        toast.error('Something went wrong.')
      })
  },
  getStudyTimesByMonthAndYear: (month: number, year: number) => {
    return axios.get<StudyTime[]>(`/studyTimes?month=${month}&year=${year}`).then((res) => res.data)
  },
  getStudyTimeForToday: () => {
    return axios.get<StudyTime>('/studyTimes/today').then((res) => res.data)
  }
}
