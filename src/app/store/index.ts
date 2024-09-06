// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand'

interface IndexState {
	time: Date
	updateTime: () => void
}

const useIndexStore = create<IndexState>(set => ({
	time: new Date(),
	updateTime: () => set({ time: new Date() }),
}))

export default useIndexStore
