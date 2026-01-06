import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {locations} from "#constants/";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,

        // Require an explicit argument; ignore calls where `location` is undefined
        setActiveLocation: (location) =>
          set((state) => {
              if (location === undefined) return; // guard: no-op for accidental no-arg calls
              state.activeLocation = location;
          }),

        resetActiveLocation: () =>
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
    })),
);

export default useLocationStore;