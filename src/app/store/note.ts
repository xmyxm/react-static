// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'zustand'

interface NoteState {
	title: string
	updateTitle: Function
}

const useNoteStore = create<NoteState>(set => ({
	title: 'Note',
	updateTitle: (text: string) => set({ title: text }),
}))

export default useNoteStore
